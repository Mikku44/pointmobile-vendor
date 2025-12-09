import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("routes/layout.tsx", [
        index("routes/home.tsx"),
        route("/features","routes/features.tsx"),
        route("/pricing","routes/pricing.tsx"),
        route("/about","routes/about.tsx"),
    ])


] satisfies RouteConfig;
