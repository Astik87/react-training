import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "shared/config/routeConfig";

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {
                    routeConfig.map((routeProps) => (
                        <Route {...routeProps} />
                    ))
                }
            </Routes>
        </Suspense>
    );
};

export default AppRouter;