require('./src/infrastructure/database');
const app = require('./src/infrastructure/rest_server');

app.listen(4001, () => {
    console.log('REST server running on port 4001...');
});