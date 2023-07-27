const express = require('express');

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');
const db = require('./models');

const cors = require('cors');
const app = express();
db.sequelize.sync();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors());
app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
    
});
