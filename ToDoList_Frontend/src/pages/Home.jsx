import Affichage from "../affichageSide/Affichage.jsx";
import Formulaire from "../formSide/Formulaire.jsx";
import Navbar from "./Navbar.jsx";
import './Home.css';
import { useState } from 'react';

function Home(){
    const [tasks, setTasks] = useState([]);

    const updateTasks = (newTasks) => {
        setTasks(newTasks);
    };

    return(
    <div className="homeDiv">
        <h1>Home page</h1>
       <Navbar></Navbar>
       <div className="interface">
        <Formulaire onUpdateTasks={updateTasks}></Formulaire>
        <Affichage tasks={tasks}></Affichage>
       </div>
    </div>
    );
        

}

export default Home;