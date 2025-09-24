import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { MainPage } from "./routes/MainPage.jsx";
import { RewardsPage } from "./routes/RewardsPage.jsx";
import { Layout } from "./layouts/Layout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StatisticsPage } from "./routes/StatisticsPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <MainPage /> },
            { path: "/rewards", element: <RewardsPage /> },
            { path: "/statistics", element: <StatisticsPage /> },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
