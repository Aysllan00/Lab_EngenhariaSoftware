const mongoose = require('mongoose');

const uri = `mongodb+srv://Ayslan:ayslanInatel@labengenhariasoftware.flhsrig.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const { Schema } = mongoose;

const UserSchema = new Schema({
    id:{
        type: String,
        index: true, 
        unique: true,
    },
    fabricante:{
        type: String, 
        unique: true,
    },
    ano: String,
    combustivel: String,
    cambio: String,
});

const UserModel = mongoose.model('UserModel', UserSchema);

module.exports = {
    UserModel,
};