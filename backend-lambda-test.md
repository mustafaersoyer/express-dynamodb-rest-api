# Starloop Backend Exercise

As a human resource manager of a big tech group, I want to be able to manage our developers’ data.
Our group is composed by multiple sub-companies spread around the globe, having distinct names.
Each developer works in a specific sub-company where he works using a set of programming languages.

Feel free to use any architecture pattern of your choice. Also we would like to see if you can reason your choice.
Please leave comments through the code in case you feel that you will not be able to complete some parts or if some code parts should be done some other way but you do not have time for it.

#### Use Cases

> Everytime a developer is hired we want to be able to insert him in our system with all the aggregated details.

Example:

```
  Name: Roger Rabbit
  Company: ACME
  Languages: Python, Javascript

  Name: Eddie Valiant
  Company: ACME
  Languages: Python

  Name: Mickey Mouse
  Company: Disney
  Languages: Lisp, Python
```
<br/>

> We need to be able to list all the languages our group uses and which sub-companies are using them.

Example:

```
  Language: Python
  Companies: ACME, Disney

  Language: Javascript
  Companies: ACME

  Language: Lisp
  Companies: Disney
```
<br/>

> We need to be able to display the number of developers per language (to use in a bar chart, for example).

Example:

```
	Python: 3
	Javascript: 1
	Lisp: 1
```


### The tasks
- Build a RESTful API, and implement the three endpoints that support the specified use cases.
- API should be RESTful and carefully designed.
- Provide all the required instructions to run the project.
- Output should be JSON

### The extras
- Automated tests covering at least the specified use cases are a plus.
- A docker-compose file to run the project would be awesome.
- Thinking about AWS lambdas is great

### Tech stack
- Node.js, Java, Go, Python or C#
- DynamoDB or any non-relational database

### Delivery
- Sharing a private github repository is ideal to user `mfstarloop`. However if you prefer you can send us a compressed version of the project in google drive (with the .git folder included)
