const baseDomain = "https://fakestoreapi.com"

async function getProducts() {
    const url = baseDomain + "/products";

    const response = await fetch(url);
    const result = await response.json();

    return result;
}

async function postProduct(product) {
    const url = baseDomain + "/products";

    const init = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product),
    };

    const response = await fetch(url, init);
    const result = await response.json();

    return result;
}

export default {
    getProducts,
    postProduct
}