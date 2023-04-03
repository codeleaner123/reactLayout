import React from "react"
import HomeLayout from "./layouts/HomeLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Error";

const router = createBrowserRouter([{
    path:"/",
    element:<HomeLayout><div>test</div></HomeLayout>,
    errorElement:<Error />,
}])

export default function App(){
    return (
        <RouterProvider router={router}></RouterProvider>
    )
}