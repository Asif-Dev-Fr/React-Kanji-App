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
                <div className="col-lg-6">
                    <Link to="/furigana" className="linkStyle">
                        <button className="btn btn-success buttonStyle">
                            Furigana
                        </button>
                    </Link>
                </div>
                <div className="col-lg-6">
                    <Link to="/kanjis/grade-one" className="linkStyle">
                        <button className="btn btn-success buttonStyle">
                            Grade One
                        </button>
                    </Link>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6">
                    <Link to="/kanjis/grade-two" className="linkStyle">
                        <button className="btn btn-success buttonStyle">
                            Grade Deux
                            </button>
                    </Link>
                </div>
                <div className="col-lg-6">
                    <Link to="/kanjis/grade-three" className="linkStyle">
                        <button className="btn btn-success buttonStyle">
                            Grade Three
                            </button>
                    </Link>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6">
                    <Link to="/kanjis/grade-four" className="linkStyle">
                        <button className="btn btn-success buttonStyle">
                            Grade Four
                        </button>
                    </Link>
                </div>
                <div className="col-lg-6">
                    <Link to="/kanjis/grade-five" className="linkStyle">
                        <button className="btn btn-success buttonStyle">
                            Grade Five
                        </button>
                    </Link>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6">
                    <Link to="/kanjis/grade-six" className="linkStyle">
                        <button className="btn btn-success buttonStyle">
                            Grade Six
                        </button>
                    </Link>
                </div>
                <div className="col-lg-6">
                    <Link to="/furigana/quiz" className="linkStyle">
                        <button className="btn btn-success buttonStyle">
                            Furigana Quiz
                        </button>
                    </Link>
                </div>
                
            </div>

        </div>
    )
}

export default HomeScreen;