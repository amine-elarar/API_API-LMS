const app = require('./app');
const connect_db = require('./config/db');

const PORT = 3000;

async function start_server() {
    await connect_db();

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

start_server();