import React from "react";
import Comment from "./Comment";
import AccordionProfile from "./Accordion";

const CommentList = ({comments }) => {
    console.log('11',comments)
    return (
        <div className="comment-list">
            <h3 className="komentarze">Komentarze: ({comments.length})</h3> 
            {comments.map((comment, index) => (
                <Comment key={index} username={comment.username} text={comment.text} />
            ))}
            
        </div>
    )
}
export default CommentList;