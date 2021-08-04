import React, {useState} from 'react'

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);

    const handleClick = () =>{
        setDarkMode(!darkMode);

    }

    return (
        <div>
            <div className="Header">
                <h1>ReactHooks</h1>
                
                <button type="button" className="" onClick={handleClick}>{darkMode ? 'Dark Mode' : 'Light mode'}</button>

                <button type="button" className="" onClick={() => setDarkMode(!darkMode)}>{darkMode ? 'Dark Mode2' : 'Light mode2'}</button>
                
            </div>
        </div>
    )
}

export default Header
