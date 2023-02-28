import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import {Home} from "./Components/Home/Home";
import {About} from "./Components/About/About";
import {Portfolio} from "./Components/Portfolio/Portfolio";
import {Contact} from "./Components/Contact/Contact";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import {createRef, ReactNode, RefObject} from "react";


type RouteProps = {
    path: string
    name: string
    element: ReactNode
    nodeRef?: RefObject<HTMLDivElement>
}

export const routes: RouteProps[] = [
    {path: '/', name: 'Home', element: <Home/>, nodeRef: createRef()},
    {path: '/about', name: 'About', element: <About/>, nodeRef: createRef()},
    {path: '/work', name: 'Portfolio', element: <Portfolio/>, nodeRef: createRef()},
    {path: '/contact', name: 'Contact', element: <Contact/>, nodeRef: createRef(),},
]

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {index: true, element: <Home/>},
            ...routes.map((route) => ({
                // index: route.path === '/',
                path: route.path === '/' ? undefined : route.path,
                element: route.element,
            }))],
    },
])

/*
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path={'/'}
               element={<App/>}
               errorElement={<ErrorPage/>}
        >

            <Route errorElement={<ErrorPage/>}>
                <Route index element={<Home/>}/>
                <Route path={'/!*'} element={<Home/>}/>
                <Route path={'/home'} element={<Home/>}/>
                <Route path={'/about'} element={<About/>}/>
                <Route path={'/work'} element={<Portfolio/>}/>
                <Route path={'/contact'} element={<Contact/>}/>
            </Route>
        </Route>
    )
)*/

export default router;