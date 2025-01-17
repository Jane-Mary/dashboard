import React from "react";
import "../Styles/topbar.css"
import Sidebars from "./sidebar";

const Topbar:React.FC = () =>{
    return (
        <>
        <div className="topbar">
            <div className="content">
                <img src="./src/assets/notifications.png"/>
                <h1>Jane-Mary</h1>
                <img src="./src/assets/anime-moon-landscape.jpg" style={{width:'5rem',borderRadius:'5rem'}}/>
            </div>
        </div>
        <Sidebars/>
        </>
    )
}

export default Topbar