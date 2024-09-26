import React, {useState} from 'react';

function Cpicker(){

    const [color, setColor] = useState("#FFFFFF");

    function handleColorChange(e){
        setColor(e.target.value);
    }

    return(
        <>
        <div className="color-picker-container">
            <h1>Color Picker</h1>
            <div className="color-display" style={{backgroundColor: color}}>
                <p>Selected color: {color}</p>
            </div>
            <label > Select a color:</label>
           <input type="color" value={color} onChange={handleColorChange}/>
        </div>
        </>
    );
}

export default Cpicker

/*import React, { useState } from 'react';

function Cpicker() {

    const [color, setColor] = useState("#FFFFFF");

    // Handle the color input change from the color picker
    function handleColorChange(e) {
        setColor(e.target.value);
    }

    // Handle the hex input change (ensures proper format)
    function handleHexChange(e) {
        const hex = e.target.value;
        // Validate hex code format before setting it
        if (/^#[0-9A-F]{6}$/i.test(hex)) {
            setColor(hex);
        }
    }

    return (
        <>
            <div className="color-picker-container">
                <h1>Color Picker</h1>
                <div className="color-display" style={{ backgroundColor: color }}>
                    <p>Selected color: {color}</p>
                </div>
                <label>Select a color:</label>
                <input type="color" value={color} onChange={handleColorChange} />
                
                <br />
                
                <label>Enter a hex color code:</label>
                <input type="text" value={color} onChange={handleHexChange} maxLength="7" />
            </div>
        </>
    );
}

export default Cpicker;*/
