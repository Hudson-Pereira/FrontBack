# A simple NodeJS + Express.js RESTful API

API Version: 1.0

More about
My main goal is organize my knowledge about MVC basics and improve coding.

You will notice that the endpoints for both are the same but the code is not. Inside musics I experiment some middleware initial concepts.

Inside misc folder you can try each of Thunder's Collections for both Endpoints.

### Endpoints for recipes

##### GET /personagens/readAll (ALL)

Returns an array with all registered recipes (this array have only on personage as example)

```
javascript
{

"name": "Rabanada",

"imagemUrl": "https://cdn.tasteatlas.com/images/dishes/5c33b6059a634e6195f80ff37c3f0997.jpg?mw=1300"

}

```

Status Code: 200

##### GET personagens/readSingle/:id (By ID)

Returns a personage by it's ID
Status Code: 200
Status Code: 404 if personage's ID is not inside my Array

##### POST /personagens/create

Create a new personage.

````
javascript
{

"name": "Gengar",

"imagemUrl": "https://cdn.tasteatlas.com/images/dishes/sgfgg43t4gg4gmgj"

}
````


Status Code: 200

##### PUT personagens/update/:id

Change personage by it's ID

````
javascript
{

"name": "Geng",

"imagemUrl": "https://cdn.tasteatlas.com/images/dishes/sgfgg43t4gg4gmgj"

}
````

Status Code: 200

Status Code: 404 if personage's ID is not inside my Array

##### DELETE personagens/delete/:id

Status Code: 200
Status Code: 404 if recipe's ID is not inside my Array

