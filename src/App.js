import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import Products from "./components/Products";
import Cart from "./components/Cart";

// Routing Creating configuration
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import About from "./components/About";
import Products from "./components/Products";

const App = () => {

    return <div className="app">
        <Header/>
        <Outlet />
    </div>
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,

        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/products",
                element: <Products />
            },
            {
                path: '/cart',
                element: <Cart />
            }
        ],
    }
]);



const root = ReactDOM.createRoot(document.querySelector(".root"));
// Providing the configuration
root.render(<RouterProvider router={appRouter} />);


