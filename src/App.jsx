//import { useState } from 'react'

import Exemple from "./Exemple";
import ExempleListe from "./ExempleListe";
import ExempleCheckBox from "./ExempleCheckBox";
import ExempleAttente from "./ExempleAttente";

//import './App.css'


function App() {
  return (
    <div>
    <h1>Todo List</h1>
    <Exemple></Exemple>
    <ExempleListe></ExempleListe>
    <ExempleCheckBox></ExempleCheckBox>
    <ExempleAttente></ExempleAttente>

    </div>
  );
}

export default App;