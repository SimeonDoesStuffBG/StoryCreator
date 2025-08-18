import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("pages/main.tsx"), 
    route("character/:id","pages/character.tsx"),
    route("story/:id", "pages/story.tsx"),
    route("login", "pages/login.tsx"),
    route("signin", "pages/signin.tsx")
] satisfies RouteConfig;
