CREATE DATABASE Bamazon;
USE Bamazon;
CREATE TABLE products(
item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
product_name VARCHAR(100) NOT NULL,
department_name VARCHAR(100) NOT NULL,
price DECIMAL(12, 2) NOT NULL DEFAULT 0.00,
stock_quantity INTEGER(12) NOT NULL DEFAULT 0,
PRIMARY KEY(item_id)
);
INSERT INTO products(product_name, department_name, price,  stock_quantity)
VALUES
("Ghost Recon Wildlands", "Videogames", 49.99, 4),
("Deadpool", "Amazon Video", 9.99, 841),
("Blink", "Books", 19.99, 715),
("Samsung UN65KS8000 65-Inch 4K Ultra HD Smart LED TV (2016 Model)", "Electronics", 13639.32, 762),
("Bowflex SelectTech 552 Adjustable Dumbbells (Pair)", "Sports", 249.00, 163),
("LEGO BATMAN MOVIE Batcave Break-in 70909 Building Kit", "Toys and games", 74.96, 9145),
("Tri-Core Cervical Pillow, Full Size, Standard Firm", "Bedding", 41.58, 600),
("Fossil Q Marshal Digital Display Stainless Steel Touchscreen Smartwatch", "Fashion", 275.00, 1420),
("Raider Adrenaline MX Helmet (Black, Large)", "Automotive", 68.40, 31),
("1928 Beacon Air Mail Stamp Original Art Photograph by Nathaniel Dewell", "Handmade", 70000.00, 1)