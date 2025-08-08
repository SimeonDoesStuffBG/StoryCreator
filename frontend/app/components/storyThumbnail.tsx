import { NavLink } from "react-router";

export default function StoryThumbnail({title, creator}:Story){
    return <NavLink to="/">
        <div className="storythumbnail">
            <img src="/Deadly laser.jpg" alt="nothing" />
            <h1 className="title">{title}</h1>
            <h3 className="creator">{creator}</h3>
        </div>
    </NavLink>
}