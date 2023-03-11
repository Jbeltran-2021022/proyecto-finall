const jwt = require('jsonwebtoken');

const generarJWT = (uid = '') => {
    return new Promise((resolve, reject) => {
        const payload = {uid}

        jwt.sign(payload, process.env.SECREY_KEY_TOKEN, {
            expiresIn: '5h'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject('Error: no se pudo crear el token');
            } else {
                resolve(token);
            }
        })
    });
}

module.exports = {
    generarJWT
}