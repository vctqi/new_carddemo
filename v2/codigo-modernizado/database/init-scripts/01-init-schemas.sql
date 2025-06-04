-- Initialize schemas for CardDemo MVP microservices

-- Auth Service Schema
CREATE SCHEMA IF NOT EXISTS auth;

-- User Service Schema
CREATE SCHEMA IF NOT EXISTS users;

-- Customer Service Schema
CREATE SCHEMA IF NOT EXISTS customers;

-- Account Service Schema
CREATE SCHEMA IF NOT EXISTS accounts;

-- Card Service Schema
CREATE SCHEMA IF NOT EXISTS cards;

-- Transaction Service Schema
CREATE SCHEMA IF NOT EXISTS transactions;

-- Grant privileges
GRANT ALL PRIVILEGES ON SCHEMA auth TO carddemo;
GRANT ALL PRIVILEGES ON SCHEMA users TO carddemo;
GRANT ALL PRIVILEGES ON SCHEMA customers TO carddemo;
GRANT ALL PRIVILEGES ON SCHEMA accounts TO carddemo;
GRANT ALL PRIVILEGES ON SCHEMA cards TO carddemo;
GRANT ALL PRIVILEGES ON SCHEMA transactions TO carddemo;