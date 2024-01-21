// const productElement = document.querySelector("#products");
// fetch("https://6110f09bc38a0900171f0ed0.mockapi.io/products")
//     .then((response) => response.json())
//     .then((data) => {
//         productElement.innerHTML = data.map((product) => `<li>${product.name}</li>`).join("");
//     });


    const getProducts = async () =>{
const response = await fetch("https://6110f09bc38a0900171f0ed0.mockapi.io/products")
const data = await response.json();
data.map((product) =>` <li>${product.name}</li>`).json("");
    };
    getProducts();

// fake product
const productFake = {
    name: "Product b",
    img: "https://loremflickr.com/cache/resized/65535_53071549535_dd19303026_c_640_480_nofilter.jpg",
};
// ADD PRODUCT
const addProduct = async () => {
    await fetch("https://6110f09bc38a0900171f0ed0.mockapi.io/products", {
        method: "POST", // PUT - DELETE - GET
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(productFake),
    });
};

document.querySelector("#buttonAdd").addEventListener("click", addProduct);
// DELETE
const deleteProduct = async () => {
    await fetch("https://6110f09bc38a0900171f0ed0.mockapi.io/products/57", {
        method: "DELETE", // PUT - DELETE - GET
    });
    alert("Xóa thành công");
};
document.querySelector("#buttonDelete").addEventListener("click", deleteProduct);

// UPDATE
const updateProduct = async () => {
    const response = await fetch("https://6110f09bc38a0900171f0ed0.mockapi.io/products/56", {
        method: "PUT", // PUT - DELETE - GET
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(productFake),
    });
    const data = await response.json();
    console.log("data", data);
};
document.querySelector("#buttonEdit").addEventListener("click", updateProduct);