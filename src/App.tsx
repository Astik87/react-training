import React, {FC, Suspense} from 'react';
import {Routes, Route} from 'react-router-dom'

import {useTheme} from "./theme/useTheme"
import {TestAsync} from "./pages/Test/Test.async"
import {MainPageAsync} from "./pages/MainPage/MainPage.async"
import {classNames} from "./helpers/classNames/classNames";

const App : FC = () => {
    const {theme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/test" element={<TestAsync />} />
                    <Route path="/" element={<MainPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    )
}

export default App