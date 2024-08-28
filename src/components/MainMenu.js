import { Link } from "react-router-dom";
import { MainMenuContainer } from "../styles/MainMenuContainer";

export const MainMenu = () => (
    <MainMenuContainer>
        <ul>
            <li><Link>Home</Link></li>
            <li><Link>Sobre</Link></li>
        </ul>


    </MainMenuContainer>

);
