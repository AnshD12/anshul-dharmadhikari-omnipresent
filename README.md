# Omnipresent backend end challenge

## steps to run the project

### prerequisite

1. git
2. node v12.22.7 or above
3. npm v8.5.1

### env file

Before running the application please rename .env.example to .env

### via docker

1. git clone https://github.com/AnshD12/anshul-dharmadhikari-omnipresent.git
2. docker-compose up

### via npm

1. git clone https://github.com/AnshD12/anshul-dharmadhikari-omnipresent.git
2. npm install
3. npm start
4. for testing - npm run test

### endpoints

1. Health check - http://localhost:3000/health
2. POST employees - http://localhost:3000/employees

### curl for POST /employees API

curl --location --request POST 'http://localhost:3000/employees' \
--header 'Content-Type: application/json' \
--data-raw '[
{
"firstName":"Roy",
"lastName":"Fernandez",
"dateOfBirth":"19/02/1990",
"jobTitle":"Software developer",
"company":"Test co",
"country":"CA"
}
]'

### response of the API

I have added 2 keys to response object apart from the actual data sent in the body

1. countryDetails - contains all the data mention in the task(country's full name, currency, languages and timezone)
2. username - if the employee is from Europe/Asia

### implementation

Application is a simple typescript project that uses redis as a cache for storing result from country API.
As there can be multiple employees from same country it would be bad practice to call country API for each candidate.
So we are calling the country API for a specific country once and store in cache for faster calculation and response time.

for unit test I have used jest library.
