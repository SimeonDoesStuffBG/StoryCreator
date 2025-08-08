import StoryThumbnail from "~/components/storyThumbnail";
import type { Route } from "./+types/home";
import CharacterThumbnail from "~/components/characterThumbnail";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Main() {
  return <>
    <CharacterThumbnail name="Mark Watney" creator="Andy Weir"/>
    <StoryThumbnail/>
  </>;
}
