import React from "react";
import { useState } from "react";

const Tab = ({ label, content }) => {
    return (
        <div className="tab">
            <h3>{label}</h3>
            <p>{content}</p>
        </div>
    )
}
export default Tab