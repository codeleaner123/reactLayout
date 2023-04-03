import React, { Suspense } from "react"
import HomeLayout from "./layouts/HomeLayout";
import IndexContent from "./components/IndexContent";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Error";

const AlcoholContent = React.lazy(() => import("./components/AlcoholContent"))

const router = createBrowserRouter([{
    path:"/",
    element:<HomeLayout><IndexContent /></HomeLayout>,
    errorElement:<Error />,
},{
    path:"/alcohol",
    element:<HomeLayout>
        <Suspense>
            <AlcoholContent />
        </Suspense>
        </HomeLayout>
}])

export default function App(){
    return (
        <RouterProvider router={router}></RouterProvider>
    )
}