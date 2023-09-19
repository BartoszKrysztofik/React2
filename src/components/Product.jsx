import NewDataProduct from "./newDataProduct";
import LikeButton from "./LikeButton";
import { useState } from "react"

const Product = () => {
    const [count, setCount]=useState(0)
    
    return (
        <div className="newDataProduct">
            <NewDataProduct />
        </div>
    );
}
export default Product;

