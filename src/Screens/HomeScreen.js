import React from 'react';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
    return(
        <div className="center">

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
                    <button className="btn btn-success buttonStyle">Grade 1</button>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6">
                    <button className="btn btn-success buttonStyle">Grade 3</button>
                </div>
                <div className="col-lg-6">
                    <button className="btn btn-success buttonStyle">Grade 4</button>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6">
                    <button className="btn btn-success buttonStyle">Grade 5</button>
                </div>
                <div className="col-lg-6">
                    <button className="btn btn-success buttonStyle">Grade 6</button>
                </div>
            </div>

        </div>
    )
}

export default HomeScreen;