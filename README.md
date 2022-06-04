# hackaton-BE

## API FOR CODERSCAMP HACKATHON APP CREATED IN NODE & EXPRESS.JS

---

## HOW TO RUN

### RUN:

`npm install`

### THEN:

`cp .env.example env`

### TO START SERVER LOCALLY:

`npm run dev`

---

## ROUTES

### SCORES:

#### GET ALL THE SCORES:

`GET http://localhost:4000/scores`

#### GET THE SCORE BY ID:

`GET http://localhost:4000/scores/:${id}`

#### POST THE SCORE:

`POST http://localhost:4000/scores
content-type: application/json

{
username: String,
score: Number
}

`

---

### QUESTIONS:

#### GET ALL THE QUESTIONS:

`GET http://localhost:4000/questions`

#### GET THE QUESTION BY ID:

`GET http://localhost:4000/questions/:${id}`

#### POST THE QUESTION:

`POST http://localhost:4000/questions
content-type: application/json

{
category: String,
content: String,
answers: [
{
 content: String,
correct: Boolean
}
],
explanation: String,
link: String
}

`
