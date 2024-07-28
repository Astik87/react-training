import React, {FC} from 'react';

import {useTheme} from "app/providers/ThemeProvider/lib/useTheme"
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/Router";
import {Navbar} from "widgets/Navbar";

import './styles/index.scss';

const App : FC = () => {
    const {theme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
          <Navbar />
          <AppRouter />
        </div>
    )
}

export default App
