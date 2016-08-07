# PokeGo Scan API

Lighweight Scan API for Pokemon Go

### Version
1.0.0


### Configuration

Edit **config.json** with your account credentials

### Installation

PokeGo Scan API requires [Node.js](https://nodejs.org/) v4+ to run.


Install the dependencies and start the server.

```sh
$ npm install
$ npm start
```


### Endpoints

**GET: /scan.json**

Params:

    - lat: latitude
    - lon: longitude

  Response:



    {
      "map_pokemon": {},
      "nearby_pokemon": {
        "7": {
          "img": "http://www.serebii.net/pokemongo/pokemon/007.png",
          "egg": "2 km",
          "candy": "25 Squirtle Candy",
          "num": "007",
          "height": "0.51 m",
          "PokedexNumber": 7,
          "name": "Squirtle",
          "EncounterId": {
            "low": -931883363,
            "high": -2029823777,
            "unsigned": true
          },
          "weight": "9.0 kg",
          "type": "Water",
          "id": "7",
          "DistanceMeters": 200
        },
        "16": {
          "img": "http://www.serebii.net/pokemongo/pokemon/016.png",
          "egg": "2 km",
          "candy": "12 Pidgey Candy",
          "num": "016",
          "height": "0.30 m",
          "PokedexNumber": 16,
          "name": "Pidgey",
          "EncounterId": {
            "low": -591745843,
            "high": 1672042959,
            "unsigned": true
          },
          "weight": "1.8 kg",
          "type": "Normal / Flying",
          "id": "16",
          "DistanceMeters": 200
        },
        "19": {
          "img": "http://www.serebii.net/pokemongo/pokemon/019.png",
          "egg": "2 km",
          "candy": "25 Rattata Candy",
          "num": "019",
          "height": "0.30 m",
          "PokedexNumber": 19,
          "name": "Rattata",
          "EncounterId": {
            "low": 1573425085,
            "high": -880799936,
            "unsigned": true
          },
          "weight": "3.5 kg",
          "type": "Normal",
          "id": "19",
          "DistanceMeters": 200
        },
        "21": {
          "img": "http://www.serebii.net/pokemongo/pokemon/021.png",
          "egg": "2 km",
          "candy": "50 Spearow Candy",
          "num": "021",
          "height": "0.30 m",
          "PokedexNumber": 21,
          "name": "Spearow",
          "EncounterId": {
            "low": -466088979,
            "high": 396609071,
            "unsigned": true
          },
          "weight": "2.0 kg",
          "type": "Normal / Flying",
          "id": "21",
          "DistanceMeters": 200
        }
      },
      "wild_pokemon": {}
    }

License
----

MIT
