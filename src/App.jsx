import { useEffect, useState } from "react";
import ProductItem from "./components/ProductItem";


// React es7+... : gõ câu lệnh rafce để tạo component
// cài đặt extension: html to jsx

function App() {
    const [productList, setProductList] = useState( []);
    useEffect(() => {
        const getProducts = async () =>{
            const response = await fetch("https://6110f09bc38a0900171f0ed0.mockapi.io/products")
            const data = await response.json();
            setProductList(data);
                };
                getProducts();   
    }, []);
    // fake product
const productFake = {
    name: "Product b",
    img: "https://loremflickr.com/cache/resized/65535_53071549535_dd19303026_c_640_480_nofilter.jpg",
};
const productFakeEdit = {
    name: "Product Edit",
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


// DELETE
const deleteProduct = async () => {
    await fetch("https://6110f09bc38a0900171f0ed0.mockapi.io/products/62", {
        method: "DELETE", // PUT - DELETE - GET
    });
    
};


// UPDATE
const updateProduct = async () => {
    const response = await fetch("https://6110f09bc38a0900171f0ed0.mockapi.io/products/61", {
        method: "PUT", // PUT - DELETE - GET
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(productFakeEdit),
    });
    const data = await response.json();
    console.log("data", data);
};
    return (
        <>
            <button onClick={addProduct}>ADD</button>
            <button onClick={deleteProduct}>DELETE</button>
            <button onClick={updateProduct}>Edit</button>
            {productList.map((product) => {
                return <ProductItem key={product.name} product={product} />;
            })} 
            
{/*                
            <Header />
            <Main />
            <Footer /> */}
        </>
    );
}

export default App;
