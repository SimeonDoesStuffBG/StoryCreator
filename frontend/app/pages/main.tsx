import StoryThumbnail from "~/components/storyThumbnail";
import CharacterThumbnail from "~/components/characterThumbnail";
import type { Route } from "../+types/root";
import CharactersList from "~/components/charactersList";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Main() {
  return <>
    <CharactersList/>
    <StoryThumbnail title="The Martian" creator="Andy Weir"/>
  </>;
}
