import React, { useState, useEffect } from 'react';

const GradeOneScreen = ({ gradeOne }) => {

    const [translation, setTranslation] = useState('');
    const [kunyomi, setKunyomi] = useState([]);
    const [onyomi, setOnyomi] = useState([]);

    useEffect(() => {
        const footer = document.getElementById('footer');
        footer.classList.remove('footer-bottom');
    }, []);

    return (
        <div className="center wrap">
            {
                gradeOne.map((value) => (
                    <div className="card cardStyle" key={value.kanji}>
                        <div className="card-body">
                            <p className="card-text">
                                {value.kanji}
                            </p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <div>
                                    <button className='button btn btn-primary' onClick={() => {
                                        if (translation !== value.translation) {
                                            setTranslation(value.translation);
                                        } else {
                                            setTranslation('');
                                        }
                                    }}>
                                        {translation !== value.translation ? 'Show translation' : 'Hide translation'}
                                    </button>
                                </div>
                                {
                                    translation === value.translation ? <div>{value.translation.charAt(0).toUpperCase() + value.translation.slice(1)}</div> : <div>Hidden translation</div>
                                }

                            </li>
                            <li className="list-group-item">
                                <div>
                                    <button className='button btn btn-primary' onClick={() => {
                                        if (onyomi !== value.furigana.onyomi) {
                                            setOnyomi(value.furigana.onyomi);
                                        } else {
                                            setOnyomi('');
                                        }
                                    }}>
                                        {onyomi !== value.furigana.onyomi ? 'Show onyomi' : 'Hide onyomi'}
                                    </button>
                                </div>
                                {
                                    (onyomi === value.furigana.onyomi) ?
                                        (<div className="onyomi">
                                            {
                                                onyomi.length !== 0 ?
                                                onyomi.map((value) => (
                                                    `[ ${value} ] `
                                                ))
                                                : 'No onyomi'
                                            }
                                        </div>)
                                        : <div>Hidden onyomi</div>
                                }
                            </li>
                            <li className="list-group-item">
                                <div>
                                    <button className='button btn btn-primary' onClick={() => {
                                        if (kunyomi !== value.furigana.kunyomi) {
                                            setKunyomi(value.furigana.kunyomi);
                                        } else {
                                            setKunyomi('');
                                        }
                                    }}>
                                        {kunyomi !== value.furigana.kunyomi ? 'Show kunyomi' : 'Hide kunyomi'}
                                    </button>
                                </div>
                                {
                                    (kunyomi === value.furigana.kunyomi) ?
                                        (<div className="kunyomi">
                                            {
                                                kunyomi.length !== 0 ?
                                                kunyomi.map((value) =>(
                                                    `[ ${value} ] `
                                                )) 
                                                : 'No kunyomi'
                                            }
                                        </div>) :
                                        <div>Hidden kunyomi</div>
                                }
                            </li>

                        </ul>
                    </div>
                ))
            }

        </div>
    )
}

export default GradeOneScreen;