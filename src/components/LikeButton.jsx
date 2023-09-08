const LikeButton = ({ setCount }) => {
    return (
        <button onClick={() => {
            setCount((prev)=>prev+1)
        }}
        >Like
        </button>
    )
}
export default LikeButton