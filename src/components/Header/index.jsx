import { Link } from "react-router-dom";
import './style.css'

export default function Header() {
    return (
        <>
        <header>
            <h1>Meu Portifólio</h1>
        <nav className="navegate">
            <div>
                <button>
                    <Link to="/">Inicio</Link>
                </button>
                <button>
                    <Link to="/">Sobre Mim</Link>
                </button>
                <button>
                    <Link to="/">Habilidades</Link>
                    </button>
            </div>
        </nav>

        </header>


        </>
    )
}