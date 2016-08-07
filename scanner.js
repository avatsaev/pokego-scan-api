const Pokeio = require('pokemon-go-node-api');
const Immutable = require('immutable');
const config = require('./config.json');

const pokedex = new Immutable.Map(Pokeio.pokemonlist.map(p => [p.id, Immutable.fromJS(p)]));
const locationType = 'coords';

module.exports = {


  scan_nearby: (latitude=48.582007, longitude=7.750348) => {

    latitude = parseFloat(latitude) ;
    longitude = parseFloat(longitude)

    const altitude = 5;

    const location = {
      type:  locationType,
      coords: {
        latitude: latitude,
        longitude: longitude,
        altitude: altitude
      }
    };

    result_promise = new Promise((resolve, reject) => {

      Pokeio.SetLocation(location, (err, coords) => {

        if (err) {
          console.log(err);
          reject(err);
          return;
        }

        Pokeio.Heartbeat(function(err, heartbeat) {

          if (err || heartbeat == undefined) {
            console.log(err);
            reject(err);
            return;
          }

          const map_pokemon = new Immutable.Map(
            Immutable.fromJS(heartbeat.cells.map(cell => cell.MapPokemon))
              .flatten()
              .map(p => [p.PokedexTypeId.toString(), Immutable.fromJS(Object.assign({}, p))])
            );

          const map_pokemon_with_pokedex_data = map_pokemon.mergeDeep(pokedex.filter((p, id) => map_pokemon.has(id)));

          const nearby_pokemon = new Immutable.Map(
            Immutable.fromJS(heartbeat.cells.map(cell => cell.NearbyPokemon))
              .flatten()
              .map(p => [p.PokedexNumber.toString(), Immutable.fromJS(Object.assign({}, p))])
            );

          const nearby_pokemon_with_pokedex_data = nearby_pokemon.mergeDeep(pokedex.filter((p, id) => nearby_pokemon.has(id)));

          const wild_pokemon = new Immutable.Map(
            Immutable.fromJS(heartbeat.cells.map(cell => cell.WildPokemon))
              .flatten()
              .map(p => [p.pokemon.PokemonId.toString(), Immutable.fromJS(Object.assign({}, p))])
            );

          const wild_pokemon_with_pokedex_data = wild_pokemon.mergeDeep(pokedex.filter((p, id) => wild_pokemon.has(id)));

          const response = {
            map_pokemon: map_pokemon_with_pokedex_data,
            nearby_pokemon: nearby_pokemon_with_pokedex_data,
            wild_pokemon: wild_pokemon_with_pokedex_data
          }

          resolve(response);

        });

      });

    });

    return result_promise;

  }

}
