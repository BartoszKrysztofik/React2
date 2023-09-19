import { useState } from "react"


const LikeButton = ({ count, setCount }) => {
    return (
        <button onClick={() => {
            setCount((prev)=>prev+1)
        }}
        >Obserwuje: {count}
        </button>
    )
}
export default LikeButton