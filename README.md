# CardDemo Next.js MVP

This is a modern implementation of the CardDemo credit card management system, built with Next.js, SQLite, and Prisma.

## Overview

This application is a Minimum Viable Product (MVP) that demonstrates the core functionality of the original CardDemo mainframe application in a modern web-based architecture. It provides a simplified but functional interface for managing credit card accounts, cards, and transactions.

## Technologies Used

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: SQLite with Prisma ORM
- **Authentication**: NextAuth.js

## Features

- User authentication and role-based access control
- Account management
- Card management
- Transaction processing
- Reports and analytics
- Admin user management

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```
3. Set up the database
   ```bash
   npm run prisma:generate
   npm run prisma:migrate
   npm run db:seed
   ```
4. Create a `.env.local` file in the root directory with the following environment variables:
   ```
   # NextAuth.js Configuration
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret-key-here-change-in-production

   # Database
   DATABASE_URL="file:./prisma/carddemo.db"
   ```

5. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

### Default Users

The seed script creates the following users:

- Admin User
  - Email: admin@example.com
  - Password: adminpass
  - Role: admin

- Regular User
  - Email: john@example.com
  - Password: password
  - Role: user

## Project Structure

```
carddemo-nextjs/
├── components/         # Reusable UI components
├── lib/                # Utility functions and shared code
├── prisma/             # Database schema and migrations
├── public/             # Static assets
└── src/
    └── app/            # Next.js App Router pages
        ├── api/        # API routes
        ├── dashboard/  # Dashboard pages
        └── ...
```

## Development Workflow

1. Run the development server with `npm run dev`
2. Access the application at http://localhost:3000
3. Make changes to code and see the updates in real-time
4. Use Prisma Studio to manage database data: `npm run prisma:studio`

## License

This project is a demonstration and is not intended for production use.

## Acknowledgements

This project is a modernized version of the AWS Mainframe Modernization CardDemo application.
