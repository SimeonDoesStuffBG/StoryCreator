import React from "react"
import CharacterThumbnail from "./characterThumbnail"

export default function CharactersList({characters}:{characters:Character[]}){
    return <div className="characters">
        {characters.map(character=><CharacterThumbnail name={character.name} creator={character.creator}/>)}
     </div>
}