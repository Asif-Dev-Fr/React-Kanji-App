import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <Link className="navbar-brand" to="/">Nihongo</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/furigana">Furigana</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Kanjis
                        </Link>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li>
                                <Link className="dropdown-item" to="/kanjis/grade-one">Grade One</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/kanjis/grade-two">Grade Two</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/kanjis/grade-three">Grade Three</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/kanjis/grade-four">Grade Four</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/kanjis/grade-five">Grade Five</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/kanjis/grade-six">Grade Six</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Quiz
                        </Link>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li>
                                <Link className="dropdown-item" to="/furigana/quiz">Furigana Quiz</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/kanji/quiz">Kanji Quiz</Link>
                            </li>
                        </ul>
                    </li>

                </ul>

            </div>
        </nav>
    )
}

export default NavBar;