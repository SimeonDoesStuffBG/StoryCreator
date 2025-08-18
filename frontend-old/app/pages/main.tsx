import { useState } from "react";
import type { Route } from "../+types/root";
import CharactersList from "~/components/charactersList";
import Checkbox from "~/components/checkbox";
import StoriesList from "~/components/storiesList";
import { characters, stories } from "~/placeholders";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dashboard" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Main() {
  
  const [showCharacters, setShowCharacters]=useState(true);
  const [showStories, setShowStories]=useState(true);
  return <>
  <Checkbox name="Characters" checked={showCharacters} enabled={showStories} onCheck={e=>setShowCharacters(!showCharacters)}/>
  <Checkbox name="Stories" checked={showStories} enabled={showCharacters} onCheck={e=>{console.log(showStories);setShowStories(!showStories)}}/>
  <div className="lists">
    {showCharacters&&<CharactersList characters={characters}/>}
    {showStories&&<StoriesList stories={stories}/>}
  </div>
  </>;
}
