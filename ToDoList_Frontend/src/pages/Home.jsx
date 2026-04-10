import Affichage from "../affichageSide/Affichage.jsx";
import Formulaire from "../formSide/Formulaire.jsx";
import Navbar from "./Navbar.jsx";
import './Home.css';
import { useState } from 'react';

function Home(){
    const [tasks, setTasks] = useState([]);
    const [selectedNote, setSelectedNote] = useState(null);

    const updateTasks = (newTasks) => {
        setTasks(newTasks);
    };

    const switchToEditMode = (note) => {
        setSelectedNote(note);
    };

    return(
    <div className="homeDiv">
        <h1>Home page</h1>
       <Navbar></Navbar>
       <div className="interface">
        <Formulaire noteData={selectedNote} onUpdateTasks={updateTasks}></Formulaire>
        <Affichage tasks={tasks} onModifyNote={switchToEditMode}></Affichage>
       </div>
    </div>
    );
        

}

export default Home;