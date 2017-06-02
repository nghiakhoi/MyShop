const getListProduct = (idType, page) => {
    const url = `http://192.168.1.87:3000/getproductbytype/${idType}/${page}`;
    return fetch(url)
        .then(res => res.json());
};

export default getListProduct;
