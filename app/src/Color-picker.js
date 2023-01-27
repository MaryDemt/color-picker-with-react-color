import React from 'react';
import { ChromePicker, HuePicker, AlphaPicker, MaterialPicker } from 'react-color';


const ColorPickerItem = ({ color, setColor }) => {

    const handleChangeAlpha = (color) => {
        setColor({...color, rgb: color.rgb});
    };

    return (
        <section className='color-picker'>
            <div className='color-picker__numbers'>
                <ChromePicker color={color} onChangeComplete={(color) => setColor(color)} />
                <MaterialPicker color={color} onChangeComplete={(color) => setColor(color)} />
            </div>
            <div className='color-picker__appearence'>
                <HuePicker direction='vertical' color={color} onChangeComplete={(color) => setColor(color)} />
                <AlphaPicker color={color.rgb} direction='vertical' onChangeComplete={(color) => handleChangeAlpha(color)} />
            </div>
        </section>
    )
}

export default ColorPickerItem;