import { RouteObject } from "react-router-dom";
import Tutorial from "@/pages/Tutorial";
import Layout from "@/components/template/Layout";
import Pricing from "@/pages/Pricing";
import Landing from "@/pages/Landing";
import Checkout from "@/pages/Checkout";
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
            {
                path: "/checkout",
                element: <Checkout />
            }
        ]
    },
]

export default routes;