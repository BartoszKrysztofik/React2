import React from "react";

const Comment = ({ username, text }) => {
    return (
        <div className="comment">
            <h4 className="h4">{username}: </h4>
            <p className="p">{text}</p>
        </div>
    )
}
export default Comment;