import { NavLink } from "react-router";

export default function StoryThumbnail({title, creator, id}:Story){
    return <NavLink to={`/story/${id}`}>
        <div className="storythumbnail">
            <img src="/Deadly laser.jpg" alt="nothing" />
            <h1 className="title">{title}</h1>
            <h3 className="creator">{creator}</h3>
        </div>
    </NavLink>
}