-- Auth Service Tables
CREATE TABLE IF NOT EXISTS auth.users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    email VARCHAR(100),
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    last_login_at TIMESTAMP,
    active BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE IF NOT EXISTS auth.roles (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    description VARCHAR(255),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS auth.user_roles (
    user_id INTEGER NOT NULL,
    role_id INTEGER NOT NULL,
    PRIMARY KEY (user_id, role_id),
    FOREIGN KEY (user_id) REFERENCES auth.users (id) ON DELETE CASCADE,
    FOREIGN KEY (role_id) REFERENCES auth.roles (id) ON DELETE CASCADE
);

-- Customer Service Tables
CREATE TABLE IF NOT EXISTS customers.customers (
    id SERIAL PRIMARY KEY,
    customer_number VARCHAR(20) NOT NULL UNIQUE,
    first_name VARCHAR(50) NOT NULL,
    middle_name VARCHAR(50),
    last_name VARCHAR(50) NOT NULL,
    date_of_birth DATE NOT NULL,
    ssn VARCHAR(20),
    email VARCHAR(100),
    phone VARCHAR(20),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    active BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE IF NOT EXISTS customers.addresses (
    id SERIAL PRIMARY KEY,
    customer_id INTEGER NOT NULL,
    address_line1 VARCHAR(100) NOT NULL,
    address_line2 VARCHAR(100),
    city VARCHAR(50) NOT NULL,
    state VARCHAR(50) NOT NULL,
    zip_code VARCHAR(20) NOT NULL,
    country VARCHAR(50) NOT NULL DEFAULT 'USA',
    address_type VARCHAR(20) NOT NULL DEFAULT 'PRIMARY',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (customer_id) REFERENCES customers.customers (id) ON DELETE CASCADE
);

-- Account Service Tables
CREATE TABLE IF NOT EXISTS accounts.accounts (
    id SERIAL PRIMARY KEY,
    account_number VARCHAR(20) NOT NULL UNIQUE,
    customer_id INTEGER NOT NULL,
    account_type VARCHAR(20) NOT NULL DEFAULT 'CREDIT',
    current_balance DECIMAL(15, 2) NOT NULL DEFAULT 0,
    available_credit DECIMAL(15, 2) NOT NULL,
    credit_limit DECIMAL(15, 2) NOT NULL,
    cash_credit_limit DECIMAL(15, 2) NOT NULL,
    open_date DATE NOT NULL,
    expiration_date DATE,
    status VARCHAR(20) NOT NULL DEFAULT 'ACTIVE',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Card Service Tables
CREATE TABLE IF NOT EXISTS cards.cards (
    id SERIAL PRIMARY KEY,
    card_number VARCHAR(20) NOT NULL UNIQUE,
    account_id INTEGER NOT NULL,
    card_type VARCHAR(20) NOT NULL DEFAULT 'CREDIT',
    embossed_name VARCHAR(100) NOT NULL,
    expiration_date DATE NOT NULL,
    cvv VARCHAR(5) NOT NULL,
    pin VARCHAR(100),
    status VARCHAR(20) NOT NULL DEFAULT 'ACTIVE',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Transaction Service Tables
CREATE TABLE IF NOT EXISTS transactions.transaction_types (
    id SERIAL PRIMARY KEY,
    code VARCHAR(10) NOT NULL UNIQUE,
    description VARCHAR(100) NOT NULL,
    debit_credit_indicator CHAR(1) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS transactions.transaction_categories (
    id SERIAL PRIMARY KEY,
    code VARCHAR(10) NOT NULL UNIQUE,
    description VARCHAR(100) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS transactions.transactions (
    id SERIAL PRIMARY KEY,
    transaction_id VARCHAR(36) NOT NULL UNIQUE,
    card_id INTEGER NOT NULL,
    account_id INTEGER NOT NULL,
    transaction_date TIMESTAMP NOT NULL,
    post_date TIMESTAMP NOT NULL,
    amount DECIMAL(15, 2) NOT NULL,
    transaction_type_id INTEGER NOT NULL,
    transaction_category_id INTEGER,
    description VARCHAR(255) NOT NULL,
    merchant_name VARCHAR(100),
    merchant_city VARCHAR(50),
    merchant_state VARCHAR(50),
    merchant_zip VARCHAR(20),
    status VARCHAR(20) NOT NULL DEFAULT 'POSTED',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Insert initial data - Roles
INSERT INTO auth.roles (name, description) VALUES 
('ROLE_ADMIN', 'Administrator role with full access'),
('ROLE_USER', 'Regular user with limited access')
ON CONFLICT (name) DO NOTHING;

-- Insert transaction types
INSERT INTO transactions.transaction_types (code, description, debit_credit_indicator) VALUES 
('PURCH', 'Purchase', 'D'),
('PAYMENT', 'Payment', 'C'),
('CASH', 'Cash Advance', 'D'),
('FEE', 'Fee', 'D'),
('INTEREST', 'Interest Charge', 'D'),
('REFUND', 'Refund', 'C'),
('ADJUST', 'Adjustment', 'C')
ON CONFLICT (code) DO NOTHING;

-- Insert transaction categories
INSERT INTO transactions.transaction_categories (code, description) VALUES 
('RETAIL', 'Retail Purchase'),
('GROCERY', 'Grocery Store'),
('DINING', 'Restaurant/Dining'),
('TRAVEL', 'Travel/Transportation'),
('ENTERTAIN', 'Entertainment'),
('HEALTH', 'Healthcare/Medical'),
('UTILITY', 'Utilities'),
('OTHER', 'Other Purchases')
ON CONFLICT (code) DO NOTHING;