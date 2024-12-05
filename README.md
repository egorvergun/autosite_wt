# Brabus App

## Table of Contents

- [Installation](#installation)
- [Project Structure](#project-structure)
- [Running the Project](#running-the-project)
  - [Environment Variables](#1-environment-variables)
  - [Starting the Database with Docker Compose](#2-starting-the-database-with-docker-compose)
  - [Using Prisma](#3-using-prisma)
  - [Start the Development Server](#4-start-the-development-server)
- [Contributing](#contributing)
- [License](#license)

---

## Installation

To get started with the project, clone the repository and install the dependencies:

```
git clone https://github.com/yourusername/brabus-app.git
cd brabus-app
npm install
```
Project Structure
```
.vscode/
  settings.json
brabus-app/
  .env.local
  .gitignore
  .next/
    app-build-manifest.json
    build-manifest.json
    cache/
    package.json
    react-loadable-manifest.json
    server/
    static/
    trace
    types/
  app/
    api/
    changelog/
    fonts/
    globals.css
    layout.js
    page2/
    page3/
  components/
    CarCarousel.js
    cardSection.js
    dHeader.js
    Header.js
  jsconfig.json
  next.config.mjs
  package.json
  postcss.config.mjs
  public/
    ...
  README.md
  docker-compose.yml
  styles/
  tailwind.config.js
```
Running the Project
1. Environment Variables
Create a .env.local file in the root directory (if it doesn't exist) and add the following:

```
DATABASE_URL="postgresql://user:password@localhost:5432/brabus"
NEXT_PUBLIC_API_URL="http://localhost:3000/api"
```
Replace user, password, and other fields with your actual database credentials.

2. Starting the Database with Docker Compose
Ensure you have Docker and Docker Compose installed. Use the following docker-compose.yml file to set up a PostgreSQL database:

```
version: "3.9"
services:
  db:
    image: postgres:15
    container_name: brabus_db
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
      POSTGRES_DB: brabus
    ports:
      - "5432:5432"
    volumes:
      - db-data:/var/lib/postgresql/data
volumes:
  db-data:
```
Run the following command to start the database:

```
docker-compose up -d
```
3. Using Prisma
Initialize Prisma
Install Prisma CLI if not already installed:

```
npm install prisma --save-dev
npx prisma init
```
This will generate a schema.prisma file in the project.

Run Migrations
To initialize the database schema, run:

```
npx prisma migrate dev --name init
```

Run Prisma Studio to view and manage database records in a user-friendly interface:

```
npx prisma studio
```
4. Start the Development Server
Run the following command to start the Next.js application in development mode:

```
npm run dev
```
Visit the application in your browser at http://localhost:3000.
