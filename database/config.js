const mongoose = require('mongoose');

const dbConection = async() => {
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect(process.env.MONGODB_TO);
        console.log('Base de datos se ha conectado');
    } catch (error) {
        console.log(error);
        throw new Error('Error no se pudo conectar a la Base de datos');
    }
}

module.exports = {
    dbConection
}