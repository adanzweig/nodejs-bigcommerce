# GraphQL Connection Tutorial

This project serves as a basic tutorial on how to connect to a GraphQL API using JavaScript. The example demonstrates fetching product data from a GraphQL endpoint.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (includes npm)
- Code editor of your choice (e.g., Visual Studio Code)

## Getting Started

1. Clone this repository:

   ```bash
   git clone https://github.com/adanzweig/nodejs-bigcommerce.git
   cd nodejs-bigcommerce
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the project root and add your GraphQL API token:

   ```env
   TOKEN=your-graphql-api-token
   ```

4. Run the tutorial script:

   ```bash
   npm start
   ```

   This script connects to the GraphQL API and fetches product data.

## Project Structure

- `index.js`: Main JavaScript file containing the GraphQL connection logic.
- `.env`: Configuration file for storing environment variables.

## Tutorial Steps

The tutorial covers the following steps:

1. **Install Dependencies**: Set up the project dependencies using npm.

2. **Create .env file**: Create a `.env` file to store your GraphQL API token.

3. **Run the Script**: Execute the script (`index.js`) to connect to the GraphQL API and fetch product data.

4. **Explore the Code**: Review the code in `index.js` to understand how the GraphQL connection is established.

## Troubleshooting

If you encounter any issues, please check the following:

- Ensure Node.js is installed correctly.
- Verify that your GraphQL API token is correctly added to the `.env` file.

## Resources

- [Node.js Documentation](https://nodejs.org/en/docs/)
- [npm Documentation](https://docs.npmjs.com/)
- [GraphQL](https://graphql.org/)

Feel free to customize this project and explore more advanced GraphQL features!