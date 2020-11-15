import React, { useState } from 'react';

const GradeFourScreen = ({ gradeFour }) => {

    const [translation, setTranslation] = useState('');
    const [kunyomi, setKunyomi] = useState('');
    const [onyomi, setOnyomi] = useState('');

    return (
        <div className="center wrap">
            {
                gradeFour.map((value) => (
                    <div className="card cardStyle" key={value.kanji}>
                        <div className="card-body">
                            <p className="card-text">
                                {value.kanji}
                            </p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <div>
                                    <button className='button' onClick={() => {
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
                                    <button className='button' onClick={() => {
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
                                        (<div>
                                            {
                                                value.furigana.onyomi[0] ? `${value.furigana.onyomi[0]}` : 'No onyomi'
                                            }
                                            {
                                                value.furigana.onyomi[1] ? ` / ${value.furigana.onyomi[1]}` : ''
                                            }
                                            {
                                                value.furigana.onyomi[2] ? ` / ${value.furigana.onyomi[2]}` : ''
                                            }
                                            {
                                                value.furigana.onyomi[3] ? ` / ${value.furigana.onyomi[3]}` : ''
                                            }
                                            {
                                                value.furigana.onyomi[4] ? ` / ${value.furigana.onyomi[4]}` : ''
                                            }
                                            {
                                                value.furigana.onyomi[5] ? ` / ${value.furigana.onyomi[5]}` : ''
                                            }
                                            {
                                                value.furigana.onyomi[6] ? ` / ${value.furigana.onyomi[6]}` : ''
                                            }
                                            {
                                                value.furigana.onyomi[7] ? ` / ${value.furigana.onyomi[7]}` : ''
                                            }
                                            {
                                                value.furigana.onyomi[8] ? ` / ${value.furigana.onyomi[8]}` : ''
                                            }
                                            {
                                                value.furigana.onyomi[9] ? ` / ${value.furigana.onyomi[9]}` : ''
                                            }
                                            {
                                                value.furigana.onyomi[10] ? ` / ${value.furigana.onyomi[10]}` : ''
                                            }
                                        </div>)

                                        : <div>Hidden onyomi</div>
                                }
                            </li>
                            <li className="list-group-item">
                                <div>
                                    <button className='button' onClick={() => {
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
                                        (<div>{value.furigana.kunyomi[0]} {
                                            value.furigana.kunyomi[1] ? `/ ${value.furigana.kunyomi[1]}` : ''
                                        } </div>) :
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

export default GradeFourScreen;