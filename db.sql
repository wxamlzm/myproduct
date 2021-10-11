DROP DATABASE test;

CREATE DATABASE test CHARSET=utf8;

use test;

create table products (
    pid SMALLINT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    pname VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    flag VARCHAR(10) NOT NULL,
    category_id SMALLINT UNSIGNED NOT NULL
) engine=innodb;