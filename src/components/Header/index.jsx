import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
        <header>
            <h1>Meu Portifólio</h1>
        <nav>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/">Sobre Mim</Link>
                </li>
                <li>
                    <Link to="/">Habilidades</Link>
                    </li>
            </ul>
        </nav>

        </header>


        </>
    )
}