import React from "react";
import { Link } from "react-router"
export default function Header(){
    return <header>
       <Link to="/">Home</Link>     
       <div className="login">
            <Link to="/">login</Link>|
            <Link to="/">sign in</Link>
        </div>    
    </header>
}