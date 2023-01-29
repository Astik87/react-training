import React, {FC} from "react"
import {Link} from "react-router-dom"

import {useTheme} from "app/providers/ThemeProvider/lib/useTheme"

const MainPage: FC = () => {
    const {toggleTheme} = useTheme()

    return (
        <div>
            <button onClick={toggleTheme}>Toggle</button>
            <br/>
            <Link to="/about">
                About
            </Link>
        </div>
    )
}

export default MainPage