import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("routes/layout.tsx", [
        index("routes/home.tsx"),
        route("/product","routes/product.tsx"),
        route("/service","routes/service.tsx"),
        route("/support","routes/support.tsx"),
        route("/contact","routes/contact.tsx"),
    ])


] satisfies RouteConfig;


