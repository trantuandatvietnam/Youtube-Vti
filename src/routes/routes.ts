import config from "../config";
import WatchLayout from "../layouts/WatchLayout";
import Home from "../pages/Home";
import Watch from "../pages/Watch";
import { IRoute } from "./routes.model";

const publicRoutes: IRoute[] = [
    {
        path: config.routesConfig.home,
        component: Home,
    },
    {
        path: config.routesConfig.watch,
        component: Watch,
        layout: WatchLayout
    }
]

export default publicRoutes;