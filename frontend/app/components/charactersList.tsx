import React, { useState } from "react"
import CharacterThumbnail from "./characterThumbnail"
import { containsFilter } from "~/helpers/filters";

export default function CharactersList({characters}:{characters:Character[]}){
    const [filter, setFilter]=useState('');
    return <div className="characters">
            <input type="text" value={filter} onChange={e=>setFilter(e.target.value)} placeholder="Search characters by name" />
            {characters.filter(character=>containsFilter(character.name, filter)).map(character=><CharacterThumbnail key={character.id} id={character.id} name={character.name} creator={character.creator}/>)}
        </div>
     
}