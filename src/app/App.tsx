import React, {FC, Suspense} from 'react';
import {Routes, Route} from 'react-router-dom'

import {useTheme} from "app/providers/ThemeProvider/lib/useTheme"
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/Router";

const App : FC = () => {
    const {theme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <AppRouter />
        </div>
    )
}

export default App