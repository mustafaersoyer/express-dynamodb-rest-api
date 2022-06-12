# express-dynamodb-rest-api
This project is for starloop backend testing.

I developed the project using TypeScript, DynamoDB and Express. I have run DynamoDB both locally and on AWS. It is currently available on AWS with sample data. The project works with AWS DynamoDB. I learned DynamoDB for this project.

I created the relationship between companies, languages and developers using PK, SK and GSI. However, because I did not have time, I did not think about data repetition prevention, data deletion and updating.

I just got the project up with Docker Compose, you can run it with docker-compose up if you want.

I tried to run it on AWS Lambda with Serverless framework, but I encountered some errors, I couldn't find time to solve it. I learned AWS Lambda and Serverless Framework for this project.


1- clone

2- run "docker-compose up"


GET http://localhost:3000/api/language/company
Returns which company uses which languages.

GET http://localhost:3000/api/language/dev-counts
Returns how many developers the languages have.

POST http://localhost:3000/api/developer
{
        "firstName": "John",
        "lastName":"DOE",
        "company": "StarLoop",
        "languages": ["javascript", "f#"]
}
Adds data and required relationships to DynamoDB.
