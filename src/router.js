import {createBrowserRouter, createRoutesFromElements, Route, Routes} from "react-router-dom"
import App from "./App"

const router = createBrowserRouter(createRoutesFromElements(
    <Routes>
        <Route path="/" element={<App/>}>
            <Route path="" element={<Index/>}/>
            <Route path="post/:id" element={<Show/>}/>
            <Route path="create"/>
            <Route path="update/:id"/>
            <Route path="delete/:id"/>

        </Route>
    </Routes>
))

export default router