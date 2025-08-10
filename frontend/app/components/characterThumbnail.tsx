import React from "react"
import { NavLink } from "react-router"

export default function CharacterThumbnail({name, creator, id}:Character){
    return <NavLink to="/">
                <div className="charthumbnail">
                    <img src="/character.svg" alt="" className="picture"/>
                    <div className="info">
                        <h1>{name}</h1>
                        <h3>{creator}</h3>
                    </div>
                </div>        
            </NavLink>
        
    
}//https://www.netjstech.com/2025/06/using-navlink-in-react-router.html