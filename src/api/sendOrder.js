const sendOrder = (token, arrayDetail) => {
    return fetch('http://192.168.1.87:3000/cart',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({ token, arrayDetail })
        })
        .then(res => res.text());
};

module.exports = sendOrder;
