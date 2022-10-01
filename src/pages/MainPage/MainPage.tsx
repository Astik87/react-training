import React, {FC} from "react"
import {Link} from "react-router-dom"

import {useTheme} from "../../theme/useTheme"

const MainPage: FC = () => {
    const {toggleTheme} = useTheme()

    return (
        <div>
            <button onClick={toggleTheme}>Toggle</button>
            <br/>
            <Link to="/test">
                MainPage
            </Link>
        </div>
    )
}

export default MainPage