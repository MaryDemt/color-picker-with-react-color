import React, { useState } from "react";
import ColorPickerItem from "./Color-picker";
import './App.css';

function App() {
  const [colorPickerIsOpen, setColorPickerIsOpen] = useState(false);
  const [color, setColor] = useState({});

  return (
    <div className="App"> 
      <button className="button" style={{backgroundColor: color.hex?`rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`:''}} 
      onClick={() => setColorPickerIsOpen(!colorPickerIsOpen)}>Click on me</button>
      {colorPickerIsOpen? <ColorPickerItem color={color} setColor={setColor} /> : ''}
    </div>
  );
}

export default App;
