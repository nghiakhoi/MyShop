const initData = () => (
    fetch('http://192.168.1.87:3000')
        .then(res => res.json())
);

export default initData;
