const checkLogin = (token) => (
    fetch('http://192.168.1.87:3000/checklogin',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({ token })
        })
        .then(res => res.json())
);

module.exports = checkLogin;
