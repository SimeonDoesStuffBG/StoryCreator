import type { Route } from "../+types/root";
import CharactersList from "~/components/charactersList";
import StoriesList from "~/components/storiesList";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Main() {
  return <>
  <div className="lists">
    <CharactersList/>
    <StoriesList/>
  </div>
  </>;
}
