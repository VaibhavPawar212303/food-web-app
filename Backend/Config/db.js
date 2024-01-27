const { Client } = require('pg');
const DATABASE_URL = "postgresql://vaibhav:6pLtWr0AICh9M9m1apM9hQ@auburn-goose-6967.8nk.gcp-asia-southeast1.cockroachlabs.cloud:26257/foodapplication?sslmode=verify-full"
const client = new Client(DATABASE_URL);

(async () => {
    await client.connect();
    try {
        console.log("Database connection established Successfully");
    } catch (err) {
        console.error("error executing query:", err);
    }
})();

module.exports = client;    