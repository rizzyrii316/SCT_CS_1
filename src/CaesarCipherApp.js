import React, { useState } from "react";

const CaesarCipherApp = () => {
  const [text, setText] = useState("");            
  const [shift, setShift] = useState(3);           
  const [mode, setMode] = useState("encrypt");     
  const [result, setResult] = useState("");

  // Caesar Cipher Logic
  const caesarCipher = (str, shift, mode = "encrypt") => {
    if (mode === "decrypt") shift = -shift;  

    return str.split('').map(char => {
      if (/[a-z]/i.test(char)) {  
        const base = char === char.toUpperCase() ? 65 : 97;
        return String.fromCharCode((char.charCodeAt(0) - base + shift + 26) % 26 + base);
      } else {
        return char;  
      }
    }).join('');
  };

  const handleSubmit = () => {
    setResult(caesarCipher(text, parseInt(shift), mode));
  };

  return (
    <div style={{ padding: "30px", maxWidth: "600px", margin: "auto", fontFamily: "Arial" }}>
      <h2>🔐 Caesar Cipher Encrypt/Decrypt</h2>

      <label>Enter Message:</label><br />
      <textarea rows="4" cols="50" value={text} onChange={(e) => setText(e.target.value)} /><br /><br />

      <label>Shift:</label><br />
      <input type="number" value={shift} onChange={(e) => setShift(e.target.value)} /><br /><br />

      <label>Select Operation:</label><br />
      <select value={mode} onChange={(e) => setMode(e.target.value)}>
        <option value="encrypt">Encrypt</option>
        <option value="decrypt">Decrypt</option>
      </select><br /><br />

      <button onClick={handleSubmit}>Submit</button>

      {result && (
        <>
          <h3>Result:</h3>
          <div style={{ background: "#f0f0f0", padding: "10px" }}>{result}</div>
        </>
      )}
    </div>
  );
};

export default CaesarCipherApp;
