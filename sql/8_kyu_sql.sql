/*
-- # write your SQL statement here: you are given a table 'love' with columns 'flower1' and 'flower2',
return a table with columns ('flower1' and 'flower2') and your result in a column named 'res'.
*/

SELECT flower1, flower2, flower1 % 2 <> flower2 % 2 AS res FROM love

-- # write your SQL statement here: you are given a table 'nospace' with column 'x', return a table with column 'x' and your result in a column named 'res'.
SELECT x, REPLACE(x, ' ', '') AS res FROM nospace

/*
For this challenge you need to create a simple MIN / MAX statement that will return the Minimum and Maximum ages out of all the people.
people table schema
id
name
age
select table schema
age_min (minimum of ages)
age_max (maximum of ages)
*/
SELECT MIN(age) AS age_min, MAX(age) AS age_max FROM people

/*
You are a border guard sitting on the Canadian border. You were given a list of travelers who have arrived at your gate today.
You know that American, Mexican, and Canadian citizens don't need visas, so they can just continue their trips. You don't need to check their passports for visas!
You only need to check the passports of citizens of all other countries!
Select names, and countries of origin of all the travelers, excluding anyone from Canada, Mexico, or The US.
travelers table schema
name
country
*/
SELECT name, country FROM travelers WHERE country NOT IN ('Canada', 'Mexico', 'USA')

/*In your application, there is a section for adults only. You need to get a list of names and ages of users from the users table, who are 18 years old or older.
users table schema
name
age
*/
SELECT name, age FROM users WHERE age >= 18