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
    const handleClick = ( nameProduct, price, description) => {
        alert(`${nameProduct} w cenie ${price} COP, ${description}!!! Kupuj nie czekaj, taniej nie bedzie`)
    }
    return (
        <div>
            <h3 className="availableProducts">Dostępne produkty</h3>
            <div className="ukladProduktu" >
                {data.map((product, index) => (
                    <p key={index} className="line" >
                        <div className="productLeft" onClick={() => handleClick(product.nameProduct, product.price, product.description )}>
                            <div>Oferta {index + 1}:</div> 
                            <div>{product.nameProduct}</div> 
                        {/* <p>Cena: {product.price} COP</p>  */}
                        {/* <p>Opis: {product.description}</p> */}
                        </div>
                        <div className="like">
                        <p ><LikeButton setCount={setCount} count={count} /></p>
                        </div>    
                        </p>
                ))}
            </div>
        </div>
    )
}
export default NewDataProduct
