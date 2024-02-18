import { RouteObject } from "react-router-dom";
import Tutorial from "@/pages/Tutorial";
import Layout from "@/components/template/Layout";
import Pricing from "@/pages/Pricing";
import Landing from "@/pages/Landing";
const routes: RouteObject[] = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Landing />
            },
            {
                path: "/Pricing",
                element: <Pricing />,
            },
            {
                path: "/TutorialIptv",
                element: <Tutorial />,
            },
        ]
    },
]

export default routes;