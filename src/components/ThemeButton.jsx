import { useContext } from "react"
import { ThemeContext } from "../contexts/theme"

function ThemeButton(){
    const {theme,toggleTheme} =useContext(ThemeContext)
    return(
        <>
        <button onClick={toggleTheme}>{theme}</button>
        </>
    )
}
export default ThemeButton