import React from "react"
import { NavLink } from "react-router"

export default function CharacterThumbnail({name, creator}:character){
    return <NavLink to="/" className={({isActive})=>{return isActive?"charthumbnail":"charthumbnail"}} >
        <img src="../../public/character.svg" alt="" className="character"/>
        <h1>{name}</h1>
        <h3>{creator}</h3>
    </NavLink>
}//https://www.netjstech.com/2025/06/using-navlink-in-react-router.html