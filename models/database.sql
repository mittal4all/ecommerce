CREATE DATABASE ecommerce;

CREATE TABLE shoping_carts(
    id SERIAL PRIMARY KEY NOT NUll,
    product_name character(40) NOT NULL,
    product_price numeric NOT NULL,
    product_description VARCHAR NOT NULL,
    product_image VARCHAR NOT NULL,
    created_at timestamp with time zone  NOT NULL  DEFAULT current_timestamp,
    updated_at timestamp with time zone  NOT NULL  DEFAULT current_timestamp
);

CREATE TABLE users(
    id SERIAL PRIMARY KEY NOT NUll,
    user_nam VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR NOT NULL,
    created_at timestamp with time zone  NOT NULL  DEFAULT current_timestamp,
    updated_at timestamp with time zone  NOT NULL  DEFAULT current_timestamp
);


-- CREATE TABLE shoping_carts(
--     id SERIAL PRIMARY KEY NOT NUll,
--     form_data VARCHAR NOT NULL,
--     created_at timestamp with time zone  NOT NULL  DEFAULT current_timestamp,
--     updated_at timestamp with time zone  NOT NULL  DEFAULT current_timestamp
-- );