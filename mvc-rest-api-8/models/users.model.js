const { v4: uuidv4} = require('uuid');
const users = [
    {
        id: uuidv4(),
        username: 'shohel rana',
        email: 'shohelrana@gmail.com',
    },
    {
        id: uuidv4(),
        username: 'rakib rana',
        email: 'rakibrana@gmail.com',
    },
];

module.exports = users;