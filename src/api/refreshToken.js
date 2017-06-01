import saveToken from './saveToken';

const refreshToken = (token) => {
    fetch('http://192.168.1.87:3000/refreshtoken',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({ token })
        })
        .then(res => res.text())
        .then(tokenToSave => saveToken(tokenToSave));
};

module.exports = refreshToken;
