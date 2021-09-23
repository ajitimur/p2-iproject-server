# Timur Movie Review App Server
This app has : 
* RESTful endpoint for asset's CRUD operation
* JSON formatted response

&nbsp;

## RESTful endpoints
### GET /movies

> Get all assets
_Request Header_
```
{
not needed
}
```

_Request Body_
```
not needed
```

_Response (200)_
```
{
    "page": 1,
    "results": [
        {
            "adult": false,
            "backdrop_path": "/gzppdxEJ6fofhtLzSVSUJZEVxvq.jpg",
            "genre_ids": [
                28,
                878,
                53
            ],
            "id": 848278,
            "original_language": "en",
            "original_title": "Jurassic Hunt",
            "overview": "Female adventurer Parker joins a crew of male trophy hunters in a remote wilderness park. Their goal: slaughter genetically recreated dinosaurs for sport using rifles, arrows, and grenades. After their guide is killed by raptors, the team tries to escape the park – but the hunters quickly become the hunted. Even worse, the park’s manager suspects Parker of being a spy and sends a hit squad after her. This battle’s about to become primitive!",
            "popularity": 1482.995,
            "poster_path": "/bZnOioDq1ldaxKfUoj3DenHU7mp.jpg",
            "release_date": "2021-09-01",
            "title": "Jurassic Hunt",
            "video": false,
            "vote_average": 5,
            "vote_count": 127
        },
        {
            "adult": false,
            "backdrop_path": "/byflnwPMumyvrCW9SfO5Miq3647.jpg",
            "genre_ids": [
                28,
                53
            ],
            "id": 597891,
            "original_language": "en",
            "original_title": "Kate",
            "overview": "After she's irreversibly poisoned, a ruthless criminal operative has less than 24 hours to exact revenge on her enemies and in the process forms an unexpected bond with the daughter of one of her past victims.",
            "popularity": 2069.411,
            "poster_path": "/uQWgSRXeYRWCvGIX9LDNBW6XBYD.jpg",
            "release_date": "2021-09-10",
            "title": "Kate",
            "video": false,
            "vote_average": 6.8,
            "vote_count": 416
        }],
    "total_pages": 500,
    "total_results": 10000
}
```
### GET /movies/search?query=<movie-title>
> Get Movie by Title
_Request Header_
```
{
not needed
}
```

_Request Body_
```
not needed
```

_Response (200)_
```
{
    "page": 1,
    "results": [
        {
            "adult": false,
            "backdrop_path": "/xnqust9Li4oxfhXD5kcPi3UC8i4.jpg",
            "genre_ids": [
                28,
                12,
                878
            ],
            "id": 99861,
            "original_language": "en",
            "original_title": "Avengers: Age of Ultron",
            "overview": "When Tony Stark tries to jumpstart a dormant peacekeeping program, things go awry and Earth’s Mightiest Heroes are put to the ultimate test as the fate of the planet hangs in the balance. As the villainous Ultron emerges, it is up to The Avengers to stop him from enacting his terrible plans, and soon uneasy alliances and unexpected action pave the way for an epic and unique global adventure.",
            "popularity": 111.42,
            "poster_path": "/4ssDuvEDkSArWEdyBl2X5EHvYKU.jpg",
            "release_date": "2015-04-22",
            "title": "Avengers: Age of Ultron",
            "video": false,
            "vote_average": 7.3,
            "vote_count": 18551
        }
    ],
    "total_pages": 1,
    "total_results": 1
}
```

### GET /movies/:MovieId
> Get Movie by Title
_Request Header_
```
{
not needed
}
```

_Request Body_
```
not needed
```

_Response (200)_
```
{
    "adult": false,
    "backdrop_path": "/gzppdxEJ6fofhtLzSVSUJZEVxvq.jpg",
    "belongs_to_collection": null,
    "budget": 0,
    "genres": [
        {
            "id": 28,
            "name": "Action"
        },
        {
            "id": 878,
            "name": "Science Fiction"
        },
        {
            "id": 53,
            "name": "Thriller"
        }
    ],
    "homepage": "",
    "id": 848278,
    "imdb_id": "tt14442328",
    "original_language": "en",
    "original_title": "Jurassic Hunt",
    "overview": "Female adventurer Parker joins a crew of male trophy hunters in a remote wilderness park. Their goal: slaughter genetically recreated dinosaurs for sport using rifles, arrows, and grenades. After their guide is killed by raptors, the team tries to escape the park – but the hunters quickly become the hunted. Even worse, the park’s manager suspects Parker of being a spy and sends a hit squad after her. This battle’s about to become primitive!",
    "popularity": 2471.658,
    "poster_path": "/bZnOioDq1ldaxKfUoj3DenHU7mp.jpg",
    "production_companies": [
        {
            "id": 1632,
            "logo_path": "/cisLn1YAUuptXVBa0xjq7ST9cH0.png",
            "name": "Lionsgate",
            "origin_country": "US"
        },
        {
            "id": 3604,
            "logo_path": "/jC6Hk3ZyNRlVPJsA0xGlAhgd2RP.png",
            "name": "Grindstone Entertainment Group",
            "origin_country": "US"
        }
    ],
    "production_countries": [
        {
            "iso_3166_1": "US",
            "name": "United States of America"
        }
    ],
    "release_date": "2021-09-01",
    "revenue": 0,
    "runtime": 83,
    "spoken_languages": [
        {
            "english_name": "English",
            "iso_639_1": "en",
            "name": "English"
        }
    ],
    "status": "Released",
    "tagline": "This time it's mankind that's going extinct.",
    "title": "Jurassic Hunt",
    "video": false,
    "vote_average": 5,
    "vote_count": 127,
    "trailerLink": "https://www.youtube.com/embed/H9gpZqn-TtU"
}
```


### POST /translate
> Post Text to translate
_Request Header_
```
{
not needed
}
```

_Request Body_
```
{
  text: <your text here>,
  tl: <result languange in ISO 639‑1>,
  sl: <default languange in ISO 639‑1>
}
```

_Response (200)_
```
"Ketika Tony Stark mencoba untuk memulai program penjaga perdamaian yang tidak aktif, segalanya menjadi serba salah dan Pahlawan Terkuat di Bumi diuji saat nasib planet ini tergantung pada keseimbangan. Saat Ultron yang jahat muncul, terserah kepada The Avengers untuk menghentikannya dari menjalankan rencananya yang mengerikan, dan segera aliansi yang tidak nyaman dan tindakan tak terduga membuka jalan bagi petualangan global yang epik dan unik."
```

### GET /reviews/:MovieId
> GET reviews for one movie
_Request Header_
```
{
not needed
}
```
_Request Body_
```
not needed
```

_Response (200)_
```
[
    {
        "id": 6,
        "title": "test put",
        "content": "test",
        "rating": 4,
        "MovieId": 848278,
        "UserId": 1,
        "createdAt": "2021-09-22T10:05:21.010Z",
        "updatedAt": "2021-09-22T15:02:12.497Z",
        "User": {
            "id": 1,
            "email": "user1@mail.com",
            "password": "$2a$10$S7hZ4uf8jPkkCFkYhsqpj.aHhq2YJJi7s7hv/8iLoRZ3IGatBFpFa",
            "username": "user1",
            "createdAt": "2021-09-21T03:35:29.217Z",
            "updatedAt": "2021-09-21T03:35:29.217Z"
        }
    },
    {
        "id": 5,
        "title": "Title",
        "content": "bisa dari client woowww",
        "rating": 5,
        "MovieId": 848278,
        "UserId": 1,
        "createdAt": "2021-09-22T10:01:19.134Z",
        "updatedAt": "2021-09-22T10:01:19.134Z",
        "User": {
            "id": 1,
            "email": "user1@mail.com",
            "password": "$2a$10$S7hZ4uf8jPkkCFkYhsqpj.aHhq2YJJi7s7hv/8iLoRZ3IGatBFpFa",
            "username": "user1",
            "createdAt": "2021-09-21T03:35:29.217Z",
            "updatedAt": "2021-09-21T03:35:29.217Z"
        }
    },
]
```

### POST /reviews/:MovieId
> POST reviews for one movie
_Request Header_
```
{
  "access_token": "<your access token>"
}
```
_Request Body_
```
{
  title: <review title>,
  content: <review content>,
  rating: <review rating in integer>
}
```
_Response (200)_
```
{
    "id": 17,
    "title": "test",
    "content": "test",
    "rating": 5,
    "MovieId": 848278,
    "UserId": 1,
    "updatedAt": "2021-09-23T02:25:35.373Z",
    "createdAt": "2021-09-23T02:25:35.373Z"
}
```
