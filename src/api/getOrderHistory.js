const getOrderHistory = (token) => (
    fetch('http://192.168.1.87:3000/orderhistory',
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

module.exports = getOrderHistory;
