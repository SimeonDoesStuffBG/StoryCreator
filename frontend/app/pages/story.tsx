import { stories } from "~/placeholders";
import type { Route } from "../+types/root";

export function meta({}:Route.MetaArgs){
    return[
        {title:"Story"}
    ];
}

export default function Story({params}:Route.ComponentProps){
    let story = stories.find(story=>params.id&&story.id==parseInt(params.id))
    
    return <>
        <h1>This is {story?.title}</h1> 
        <h3>by {story?.creator}</h3>
    </>
}