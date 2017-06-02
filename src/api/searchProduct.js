const searchProduct = (key) => {
    const url = `http://192.168.1.87:3000/search/${key}`;
    return fetch(url)
        .then(res => res.json());
};

export default searchProduct;
