import { characters } from "~/placeholders";
import type {Route} from "../+types/root"

export function meta({}:Route.MetaArgs){
    return[
        {title:"Character"}
    ];
}
export default function Character({params}:Route.ComponentProps){
    let character = characters.find(character=>params.id&&character.id==parseInt(params.id));
    return <><h1>Hello {character?.name}</h1></>
}