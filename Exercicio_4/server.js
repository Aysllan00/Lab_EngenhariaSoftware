require('./src/infrastructure/database');
const app = require('./src/infrastructure/rest_server');

app.listen(5001, () => {
    console.log('REST server running on port 5001...');
});