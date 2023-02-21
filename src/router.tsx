import {createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import {Route} from "react-router";
import App from "./App";
import {Home} from "./Components/Home/Home";
import {About} from "./Components/About/About";
import {Portfolio} from "./Components/Portfolio/Portfolio";
import {Contact} from "./Components/Contact/Contact";
import ErrorPage from "./Components/ErrorPage/ErrorPage";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path={'/'}
               element={<App/>}
               errorElement={<ErrorPage/>}
        >

            <Route errorElement={<ErrorPage/>}>
                <Route index element={<Home />} />
                <Route path={'/*'} element={<Home/>}/>
                <Route path={'/home'} element={<Home/>}/>
                <Route path={'/about'} element={<About/>}/>
                <Route path={'/work'} element={<Portfolio/>}/>
                <Route path={'/contact'} element={<Contact/>}/>
            </Route>
        </Route>
    )
)

export default router;