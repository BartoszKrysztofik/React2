import Outcome from "./Outcome"
import LikeButton from "./LikeButton"
import { useState } from "react"

const data = [
    {
        nameProduct: "zegar",
        price: 100,
        description: "nowy",
    },
    {
        nameProduct: "opona",
        price: 1,
        description: "lekko jezdzona",
    },
    {
        nameProduct: "seicento",
        price: 1000,
        description: "w gazie",
    },
]

const NewDataProduct = () => {
    const [count, setCount] = useState(0)
    const handleClick = ( nameProduct, price) => {
    alert (`${nameProduct} w cenie ${price} COP, kupuj nie czekaj, taniej ie bedzie`)
    }
    return (
        <div>
            <h3 className="availableProducts">Dostępne produkty</h3>
            <div className="ukladProduktu" >
                {data.map((product, index) => (
                    <p key={index} className="line" onClick={()=>handleClick( product.nameProduct,product.price)}>
                        <p>{index + 1}</p> 
                        <p>{product.nameProduct}</p> 
                        <p>Cena: {product.price} COP</p> 
                        <p>Opis: {product.description}</p>
                        <div className="like">
                        <p ><LikeButton setCount={setCount} /></p>
                        <p><Outcome count={count} /></p>
                        </div>    
                    </p>
                ))}
            </div>
        </div>
    )
}
export default NewDataProduct
