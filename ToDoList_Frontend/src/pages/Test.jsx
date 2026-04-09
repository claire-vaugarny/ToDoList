//import { useState } from 'react'

import Exemple from "../Exemple.jsx";
import ExempleListe from "../ExempleListe";
import ExempleCheckBox from "../ExempleCheckBox";
import ExempleAttente from "../ExempleAttente";
// import AddNoteButton from "../AddNoteButton.jsx";

//import './App.css'
import Navbar from "./Navbar.jsx";


function Test(){
    return(
    <div className="homeDiv">
        <h1>Test page</h1>
       <Navbar></Navbar>
    <Exemple></Exemple>
    <ExempleListe></ExempleListe>
    <ExempleCheckBox></ExempleCheckBox>
    <ExempleAttente></ExempleAttente>
    {/* <AddNoteButton onClick={() => console.log("Clicked")} /> */}
    </div>
    );
}

export default Test;

