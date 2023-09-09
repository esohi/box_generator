import React, { useState } from 'react';


const ColorForm = (props) => {
    const {boxColorArray, setBoxColorArray} = props;
    const [color, setColor] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        setBoxColorArray([...boxColorArray, color]);
        setColor(""); 
        
    };

    return (
        <>
        <form onSubmit={handleSubmit} style = {{margin: '20px'}}>
            <div>
            <label htmlFor="color" className='property'>Color </label>
            <input
                type="text"
                name="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
            />
            <button className='btn'>Add</button>
            </div>
        </form>
        </>
    );
}

export default ColorForm;



