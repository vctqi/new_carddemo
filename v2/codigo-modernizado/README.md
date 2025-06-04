# CardDemo - Modernized Application

This is the modernized version of the AWS CardDemo application, a credit card management system. The application has been migrated from the original mainframe Cobol/CICS/VSAM implementation to a modern microservices architecture using Java Spring Boot, React, and PostgreSQL.

## Architecture

The modernized CardDemo application is built using the following technologies:

### Backend
- **Java 17**
- **Spring Boot 3.x**
- **Spring Security with JWT** for authentication and authorization
- **Spring Data JPA** for data access
- **PostgreSQL** as the relational database

### Frontend
- **React 18**
- **Material UI** for the user interface
- **React Router** for navigation
- **Formik & Yup** for form handling and validation
- **Axios** for API communication

### Infrastructure
- **Docker** and **Docker Compose** for containerization and orchestration
- **Nginx** as the API Gateway and static file server

## System Requirements

To run the CardDemo application, you need:

- Docker 20.10.x or higher
- Docker Compose 2.x or higher
- 4GB of RAM available for Docker
- 10GB of free disk space

## Project Structure

```
codigo-modernizado/
├── backend/                     # Backend microservices
│   ├── auth-service/            # Authentication and user management
│   ├── customer-service/        # Customer management
│   ├── account-service/         # Account management
│   ├── card-service/            # Card management
│   └── transaction-service/     # Transaction management
├── frontend/                    # React frontend application
├── database/                    # Database initialization scripts
├── infrastructure/              # Infrastructure configuration files
├── docker-compose.yml           # Docker Compose configuration
├── start.sh                     # Script to start the application
├── stop.sh                      # Script to stop the application
└── README.md                    # This file
```

## Getting Started

### Running the Application

1. **Clone the repository**

```bash
git clone <repository-url>
cd codigo-modernizado
```

2. **Start the application**

```bash
./start.sh
```

This script will:
- Check for required dependencies
- Build Docker images if needed
- Start all services using Docker Compose

3. **Access the application**

Once all services are running, you can access the application at:
- Frontend: http://localhost
- API Documentation: http://localhost/api-docs

### Default Credentials

The application comes with two default users:
- **Admin User**:
  - Username: `admin`
  - Password: `admin123`
- **Regular User**:
  - Username: `user`
  - Password: `user123`

### Stopping the Application

To stop the application, run:

```bash
./stop.sh
```

## Development

### Backend Development

Each microservice is a separate Spring Boot application. To work on a specific service:

1. Navigate to the service directory (e.g., `backend/auth-service`)
2. Use Maven to build and run the service:

```bash
./mvnw spring-boot:run
```

### Frontend Development

The frontend is a React application. To work on it:

1. Navigate to the frontend directory:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

The frontend development server will be available at http://localhost:3000.

## Testing

### Running Backend Tests

To run tests for a backend service:

```bash
cd backend/<service-name>
./mvnw test
```

### Running Frontend Tests

To run frontend tests:

```bash
cd frontend
npm test
```

## API Documentation

Each microservice provides its own API documentation using Swagger/OpenAPI:

- Auth Service: http://localhost/api/auth/swagger-ui.html
- User Service: http://localhost/api/users/swagger-ui.html
- Customer Service: http://localhost/api/customers/swagger-ui.html
- Account Service: http://localhost/api/accounts/swagger-ui.html
- Card Service: http://localhost/api/cards/swagger-ui.html
- Transaction Service: http://localhost/api/transactions/swagger-ui.html

## License

This project is licensed under the Apache License 2.0 - see the LICENSE file for details.