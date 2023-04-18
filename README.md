# api-rest-mysql-demo

Api demo with SQL and Node.js 

Use the [url]( https://api-rest-mysql-demo-production.up.railway.app/api/employees)


## SQL table employee:
```bash
(
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
)
```

## Data base:
```bash
id,name,salary,
(1,"Joe",1003),
(2,"Lucas",1500),
(3,"Juan",1800),
(4,"Jose",2005)
```

## Endpoints: 

GET -> /appi/employees

GET BY ID -> /appi/employees/1

POST ->/appi/employees 
```json
{
"name":"value",
"salary":"value"
}
```

PATCH -> /appi/employees/1
```json
{
"name":"value",
"salary":"value"
}
```

DELETE BY ID -> /appi/employees/1
