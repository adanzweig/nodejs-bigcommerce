// Load environment variables from a .env file
require('dotenv').config();

// Function to fetch products from the GraphQL API
async function getProducts() {
    try {
        // Make a POST request to the GraphQL endpoint
        const request = await fetch('https://codingwithado.mybigcommerce.com/graphql', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                // Include authorization token from environment variables
                'Authorization': `Bearer ${process.env.TOKEN}`
            },
            // Send a GraphQL query in the request body
            body: JSON.stringify({
                query: `query MyProducts {
                    site {
                        products {
                            edges {
                                node {
                                    name
                                    sku
                                    description
                                    defaultImage {
                                        url(width: 500)
                                        urlOriginal
                                    }
                                    prices {
                                        price {
                                            currencyCode
                                            value
                                        }
                                    }
                                }
                            }
                        }
                    }   
                }`
            })
        });

        // Parse the JSON response from the server
        const response = await request.json();
        return response;
    } catch (error) {
        // Log and handle any errors that occur during the request
        console.error('Error:', error);
    }
}

// Immediately invoked function expression (IIFE) to execute the code
(async () => {
    // Call the getProducts function and wait for the result
    const products = await getProducts();
    
    // Log the first product in the response
    console.log(products.data.site.products.edges[0]);
})();
