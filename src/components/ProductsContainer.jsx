import React from "react";
import { useState } from "react";
import Button from "./Button";
function ProductsContainer(props) {
    const [count, setCount] = useState(0);
    function sumarProductos() {
        setCount(count + 1);
    }
    function restarProductos() {
        setCount(count - 1);
    }
    return (
        <section className=" mt-4">
            <h1 className="text-2xl font-medium m-4">
                Lista de productos disponibles
            </h1>
            <div>
                <p>Carrito {count}</p>
                <Button handleClick={sumarProductos} text="Suma"></Button>
                <Button handleClick={restarProductos} text="Restar"></Button>
            </div>
            <div className="flex flex-wrap items-stretch">{props.children}</div>
        </section>
    );
}
export default ProductsContainer;
