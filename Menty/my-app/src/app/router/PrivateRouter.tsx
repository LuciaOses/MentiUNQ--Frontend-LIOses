import {Route, Navigate} from "react-router-dom";

interface Props {
    loggedIn:boolean | undefined,
    component:any
}
export function PrivateRouter({loggedIn, component}:Props){
    return (
        <>
        {
            loggedIn ? (
                <Route element= {component} />
            ): (
                <Route path='*' element={<Navigate to="/auth"/>}/>
            )
        }
        </>
    );
}