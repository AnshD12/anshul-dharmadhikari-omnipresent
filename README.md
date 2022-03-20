For this task you are given a list of employees. The output of the task is an endpoint which returns the same list of employees but with the relevant country specific information added to each employee.

[Rest countries](https://restcountries.com) ****is a free API which you can use to retrieve details for a country.

The country specific information we would like to be present on an employee is:

- Full name of country
- Currency used in the country
- Language/s of the country
- Timezone/s for the country

We would also like employees in Asia and Europe regions to have an additional identifier which takes the form of `{firstName}{lastName}{dateOfBirth}`. So for Joe Bloggs born 19/07/1990 this would be `joebloggs19071990`. Please bear in mind that the regions which require this may change in the future.

How the data is structured on the resulting employee object is up to you but please explain your decisions in the Readme.

Feel free to make any assumptions you see fit but please explain/clarify your thinking in the Readme.

The framework/libraries/language you use is up to you but please ensure you write some tests. Our current tech stack is viewable [here](https://stackshare.io/omnipresent/omnipresent) if you would like some inspiration.

[
   {
      "firstName":"Roy",
      "lastName":"Testerton",
      "dateOfBirth":"19/02/1990",
      "jobTitle":"Software developer",
      "company":"Test co",
      "country":"US"
   },
   {
      "firstName":"Lisa",
      "lastName":"Testora",
      "dateOfBirth":"11/07/1984",
      "jobTitle":"CTO",
      "company":"Test co",
      "country":"GBR"
   },
   {
      "firstName":"Simon",
      "lastName":"McTester",
      "dateOfBirth":"01/11/1987",
      "jobTitle":"Product manager",
      "company":"Mock industries",
      "country":"IND"
   },
   {
      "firstName":"Selina",
      "lastName":"Testo",
      "dateOfBirth":"23/11/1972",
      "jobTitle":"Software developer",
      "company":"Mock industries",
      "country":"IND"
   },
   {
      "firstName":"Tim",
      "lastName":"Mockman",
      "dateOfBirth":"12/11/1972",
      "jobTitle":"Software developer",
      "company":"Mock industries",
      "country":"IND"
   },
   {
      "firstName":"Melissa",
      "lastName":"Mocker",
      "dateOfBirth":"10/01/1982",
      "jobTitle":"Software developer",
      "company":"Mock industries",
      "country":"US"
   }
]
