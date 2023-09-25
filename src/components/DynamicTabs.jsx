import React, { Children } from "react";
import { useState } from "react";
import Tab from "./Tab-DynamicTabs";

const DynamicTabs = ({ data }) => {
    const [selectedTabs, setSelectedTabs] = useState(0);
    const handleClick = (idex) => {
        setSelectedTabs((prevState) => idex)
    };
    return (
    <div>
        <div className="tabsDynamic">
            {data.map((tab, index) => (
                <button key={index} onClick={() => handleClick(index)}>
                    {tab.nameData}
                </button>
                
        ))}
        </div>
        <div className="content">
                <Tab label={data[selectedTabs].nameData} content={data[selectedTabs].data}/>
        </div>
    </div>
    
    )
}
export default DynamicTabs;
    



