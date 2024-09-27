import { Link, Route, Routes, useNavigate, useRoutes } from "react-router-dom";
import ReceipeList from "./pages/recipes/ReceipeList";
import CommentsList from "./pages/comments/CommentsList";
import RecipeDetailsPage from "./pages/recipe-details/RecipeDetailsPage";
import NotFoundPage from "./pages/not-found/NotFoundPage";
import Layout from "./layouts/Layout";
import ReactHookFormPage from "./pages/react-hook-form/ReactHookFormPage";

const CustomeRoutes = () => {
    const element = useRoutes([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "recipe-list",
                    element: <ReceipeList />,
                },
                {
                    path: "comment-list",
                    element: <CommentsList />,
                },
                {
                    path: "recipe-list/:id",
                    element: <RecipeDetailsPage />,
                },
            ],
        },
        {
            path: "/react-hook-form",
            element: <ReactHookFormPage />,
        },
        {
            path: "*",
            element: <NotFoundPage />,
        },
    ]);
    return element;
};

const App = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>React Routing and Custom Hooks</h1>
            <div>
                <Link to={"/recipe-list"}>
                    Alternative way of navigating to recipe list page
                </Link>
            </div>
            <button
                onClick={() => navigate("/recipe-list")}
                style={{ backgroundColor: "black", color: "white" }}
            >
                Navigate to Recipe List Page
            </button>
            <button
                onClick={() => navigate("/comment-list")}
                style={{ backgroundColor: "black", color: "white" }}
            >
                Navigate to Comments List Page
            </button>
            <button
                onClick={() => navigate("react-hook-form")}
                style={{ backgroundColor: "green", color: "black" }}
            >
                React Hook Form
            </button>
            {/*  <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="recipe-list" element={<ReceipeList />} />
                    <Route path="comment-list" element={<CommentsList />} />
                    <Route
                        path="recipe-list/:id"
                        element={<RecipeDetailsPage />}
                    />
                </Route>
                <Route path="*" element={<NotFoundPage />} /> 
            </Routes>*/}
            <CustomeRoutes />
        </div>
    );
};

export default App;
