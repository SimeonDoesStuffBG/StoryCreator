import type { Route } from "../+types/root";
import CharactersList from "~/components/charactersList";
import StoriesList from "~/components/storiesList";
import { characters, stories } from "~/placeholders";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Main() {
  return <>
  <div className="lists">
    <CharactersList characters={characters}/>
    <StoriesList stories={stories}/>
  </div>
  </>;
}
