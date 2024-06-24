import { createRoot } from "react-dom/client";
import { App } from "./components/App";
import {BrowserRouter, createBrowserRouter,  RouterProvider} from "react-router-dom";
import { Provider } from "react-redux";
import { setupStore } from "./store";
import './firebase'
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const root = document.getElementById('root');

if(!root) {
    throw new Error('root not found');
}

const container = createRoot(root);

const store = setupStore();

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: '/login',
                element: <LoginPage />
            },
            {
                path: '/register',
                element: <RegisterPage />
            }
        ]
    },
]);

container.render(
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
);
