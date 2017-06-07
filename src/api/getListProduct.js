const getListProduct = (idType, page) => {
    let url;
    if (idType !== 'collection') {
        url = `http://192.168.1.87:3000/getproductbytype/${idType}/${page}`;
    } else {
        url = `http://192.168.1.87:3000/getcollection/${page}`;
    }
    return fetch(url)
        .then(res => res.json());
};

export default getListProduct;
