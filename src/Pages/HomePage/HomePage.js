import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { useHistory } from "react-router-dom"
import Header from "../../Components/Header/Header"

export default function HomePage() {
    const history = useHistory()
    return (
        <>
        <Header/>
        </>
    )
}