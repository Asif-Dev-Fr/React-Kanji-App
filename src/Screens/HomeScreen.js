import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';


const HomeScreen = () => {

    useEffect(() =>{
        const footer = document.getElementById('footer');
        footer.classList.add('footer-bottom');
    },[]);

    return (
        <div className="center homepage">

            <div className="row">
                <div className="col-lg-4">
                    <Link to="/furigana" className="linkStyle">
                        <button className="btn btn-warning buttonStyle">
                            Furigana
                        </button>
                    </Link>
                </div>
                <div className="col-lg-4">
                    <Link to="/kanjis/grade-one" className="linkStyle">
                        <button className="btn btn-success buttonStyle">
                            Grade One Kanjis
                        </button>
                    </Link>
                </div>
                <div className="col-lg-4">
                    <Link to="/kanjis/grade-two" className="linkStyle">
                        <button className="btn btn-success buttonStyle">
                            Grade Deux Kanjis
                            </button>
                    </Link>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-4">
                    <Link to="/kanjis/grade-three" className="linkStyle">
                        <button className="btn btn-success buttonStyle">
                            Grade Three Kanjis
                            </button>
                    </Link>
                </div>
                <div className="col-lg-4">
                    <Link to="/kanjis/grade-four" className="linkStyle">
                        <button className="btn btn-success buttonStyle">
                            Grade Four Kanjis
                        </button>
                    </Link>
                </div>
                <div className="col-lg-4">
                    <Link to="/kanjis/grade-five" className="linkStyle">
                        <button className="btn btn-success buttonStyle">
                            Grade Five Kanjis
                        </button>
                    </Link>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-4">
                    <Link to="/kanjis/grade-six" className="linkStyle">
                        <button className="btn btn-success buttonStyle">
                            Grade Six Kanjis
                        </button>
                    </Link>
                </div>
                <div className="col-lg-4">
                    <Link to="/furigana/quiz" className="linkStyle">
                        <button className="btn btn-primary buttonStyle">
                            Furigana Quiz
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default HomeScreen;