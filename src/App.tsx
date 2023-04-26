import React, { useEffect, useState, useContext } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import TextWriter from "./textWriter/TextWriter";

import pieceTableInstance from './PieceTable/pieceTable'
// import PieceTable from "./PieceTable/pieceTableInterface";

// export const reactContext = React.createContext(pieceTableInstance)

function App() {

  const [path, setPath] = useState(""); 
  
  async function load_file() {
    await invoke("read_file", { filepath: path }).then((res:unknown) => {
      console.log
      let text : string = res as string
      pieceTableInstance.input(text)
    }).catch((res: unknown) => alert(res));
  }


  useEffect(() => {load_file()}, [path])

  return (
    <div className="container">     
      <TextWriter></TextWriter>
      <input
        id="file_load_button"
        onChange={(e) => setPath(e.currentTarget.value)}
        placeholder="Enter a path..."
      />
    <button type="submit">Load File</button>
    </div>
  );
}

export default App;


/*

async function get_file() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    
    //await invoke("get_files", { path } ).then((res : unknown) : void => {
    //  const myArray = res as string[];
    //  console.log(path, myArray);
    //  file = path +'/'+ myArray[2];
    // });
    
    await invoke("read_file", { filepath: path }).then((res: unknown) => {
      console.log(res)
    }).catch((res: unknown) => alert(res));
  }


<h1>Welcome to Tauri!</h1>

<div className="row">
  <a href="https://vitejs.dev" target="_blank">
    <img src="/vite.svg" className="logo vite" alt="Vite logo" />
  </a>
  <a href="https://tauri.app" target="_blank">
    <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
  </a>
  <a href="https://reactjs.org" target="_blank">
    <img src={reactLogo} className="logo react" alt="React logo" />
  </a>
</div>

<p>Click on the Tauri, Vite, and React logos to learn more.</p>

<div className="row">
  <form
    onSubmit={(e) => {
      e.preventDefault();
      get_file();
    }}
  >
    <input
      id="greet-input"
      onChange={(e) => setPath(e.currentTarget.value)}
      placeholder="Enter a path..."
    />
    <button type="submit">Load File</button>
  </form>
</div>
<p>{greetMsg}</p>*/