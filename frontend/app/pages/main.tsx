import StoryThumbnail from "~/components/storyThumbnail";
import CharacterThumbnail from "~/components/characterThumbnail";
import type { Route } from "../+types/root";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Main() {
  return <>
    <CharacterThumbnail name="Mark Watney" creator="Andy Weir"/>
    <StoryThumbnail title="The Martian" creator="Andy Weir"/>
    <input list="list" />
            <datalist id="list">
                <option value="one"></option>
                <option value="two"></option>
                <option value="three"></option>
                <option value="four"></option>
                <option value="five"></option>
                <option value="six"></option>
                <option value="seven"></option>
                <option value="eight"></option>
                <option value="nine"></option>
            </datalist>
  </>;
}
