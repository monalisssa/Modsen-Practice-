import {createRoot} from "react-dom/client";
import {App} from "./components/App";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {ReactDOM} from "react";
import {Provider} from "react-redux";
import {setupStore} from "./store";
const root = document.getElementById('root')
const store = setupStore();

if(!root)
{
    throw new Error('root not found')
}

const container = createRoot(root)

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
]);

container.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);

