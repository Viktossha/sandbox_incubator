/*
-- # write your SQL statement here: you are given a table 'love' with columns 'flower1' and 'flower2',
return a table with columns ('flower1' and 'flower2') and your result in a column named 'res'.
*/

SELECT flower1, flower2, flower1 % 2 <> flower2 % 2 AS res FROM love