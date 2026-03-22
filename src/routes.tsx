import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Layout from "./pages/Layout";
import GameDetailPage from "./pages/GameDetailPage";
import BrowseGamesPage from "./pages/BrowseGamesPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <App /> },
            { path: "games", element: <BrowseGamesPage /> },
            { path: "games/:id", element: <GameDetailPage /> }
        ]
    }
]);

export default router;
