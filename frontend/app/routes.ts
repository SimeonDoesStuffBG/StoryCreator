import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("pages/main.tsx"), route("character/:id","pages/character.tsx")] satisfies RouteConfig;
