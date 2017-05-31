const register = (email, name, password) => (
    fetch('http://192.168.1.87:3000/register',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({ email, name, password })
        })
        .then(res => res.json())
);

module.exports = register;
