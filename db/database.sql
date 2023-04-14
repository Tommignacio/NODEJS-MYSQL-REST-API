-- comandos para la terminal de mysql

CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employee(
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
);

-- Muestra las db
show databases;

-- describe la tabla
DESCRIBE employee;

--create new data (post)
INSERT INTO employee VALUES
(1,"Joe",1003),
(2,"Lucas",1500),
(3,"Juan",1800),
(4,"Jose",2005);

--select  all table (get)
SELECT * FROM employee;

--select one value of table (get)
SELECT * FROM employee WHERE id=1;

--delete one value (delete)
DELETE FROM employee WHERE id=2;

--update one value(put/patch)
--patch es cuando el cambio es parcial/ put es cuando cambia todo el campo

UPDATE employee SET name="jose" WHERE id=2

--IFNULL -> sirve para poner que si no se le pasa valor nuevo, mantenga el original

UPDATE employee SET name= IFNULL("jose",name) WHERE id=2
