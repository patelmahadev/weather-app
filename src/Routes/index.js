import { useRoutes } from "react-router-dom";
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';
import AppLayout from "../Components/Layout/AppLayout";

export function AppRoute() {
    const isAuth = true
    let allRoutes = PublicRoutes;

    if(isAuth){
        allRoutes = PrivateRoutes;
    }

    let element = useRoutes(allRoutes)
    
    /**
     * @IS_AUTH
     * If user is logged in then private routes will be accessible
     */
    return isAuth ? (
        <AppLayout>
            {element}
        </AppLayout>) : element
}