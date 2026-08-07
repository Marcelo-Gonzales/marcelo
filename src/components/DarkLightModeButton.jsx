import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

function DarkLightModeButton(){
    const [isLightTheme, setIsLightTheme] = useState(true);

    useEffect(() => {
        document.documentElement.classList.toggle(
        "light-theme",
        isLightTheme
        );
    }, [isLightTheme]);

    return(
        <Button
        className="dark-light-mode-button"
        onClick={() => setIsLightTheme((current) => !current)}>
            {isLightTheme ? "☾" : "☼"}
        </Button>
    );
}

export default DarkLightModeButton;