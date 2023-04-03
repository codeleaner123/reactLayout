import React from "react"
import Header from "./home/Header"
import Sidebar from "./home/Sidebar"

export default function HomeLayout({children}:{children:JSX.Element}){
    return (
        <>
        <Header />
        <Sidebar />
        {children}
        </>
    )
}