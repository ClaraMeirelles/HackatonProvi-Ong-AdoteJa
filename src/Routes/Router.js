import { BrowserRouter, Route, Switch } from "react-router-dom"
import AboutPage from "../Pages/AboutPage/AboutPage"
import HomePage from '../Pages/HomePage/HomePage'
import HowToHelpPage from '../Pages/HowToHelpPage/HowToHelpPage'
import EducationalPage from '../Pages/EducationalPage/EducationalPage'
import DepoimentsPage from '../Pages/DepoimentsPage/DepoimentsPage'
import AdminPage from "../Pages/AdminPage/AdminPage"
import LoginPage from "../Pages/LoginPage/LoginPage"
import ApplicationFormPage from "../Pages/ApplicationForm/ApplicationFormPage"

export const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"}>
                    <HomePage />
                </Route>
                <Route exact path={"/sobre-nos"}>
                    <AboutPage />
                </Route>
                <Route exact path={"/como-ajudar"}>
                    <HowToHelpPage />
                </Route>
                <Route exact path={"/educacional"}>
                    <EducationalPage />
                </Route>
                <Route exact path={"/depoimentos"}>
                    <DepoimentsPage />
                </Route>
                <Route exact path={"/administrativo"}>
                    <AdminPage />
                </Route>
                <Route exact path={"/formulario-voluntarios"}>
                    <ApplicationFormPage />
                </Route>
                <Route exact path={"/login"}>
                    <LoginPage />
                </Route>
                <Route>
                    <div>
                        Erro 404: Página não encontrada
                    </div>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}