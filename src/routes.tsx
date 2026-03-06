import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Layout from "./pages/Layout";
import GameDetailPage from "./pages/GameDetailPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <App /> },
            { path: "games/:id", element: <GameDetailPage /> }
        ]
    }
]);

export default router;
