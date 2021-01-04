import React, { useState, useEffect } from 'react';

const VocabJlpt5Screen = () => {

    const [vocabulary, setVocabulary] = useState([]);
    const [furigana, setFurigana] = useState('');
    const [translation, setTranslation] = useState('');
    const [duplicateFurigana, setDuplicateFurigana] = useState('');

    useEffect(() => {
        const retrieveData = async () => {
            const reponse = await fetch('../data/jlpt5.json');
            const data = await reponse.json();
            setVocabulary(data);
        }
        retrieveData();
        const footer = document.getElementById('footer');
        footer.classList.remove('footer-bottom');
    }, [])
    return (
        <div className="center wrap">
            {
                vocabulary.map((value) => (
                    <div className="card cardVocab" key={value[0] + '_' + value[1]}>
                        <div className="card-body">
                            <div className="card-text">
                                <div>
                                    <span data-toggle="tooltip" data-placement="top" title="Hiragana">
                                        {value[0]}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <div>
                                    <button className="button" onClick={() => {
                                        if (furigana !== value[1]) {
                                            setFurigana(value[1]);
                                        } else {
                                            setFurigana('');
                                        }
                                    }}>
                                        {furigana === value[1] ? 'Hide furigana' : 'Show furigana'}
                                    </button>
                                </div>
                                {
                                    furigana === value[1] ? <div className='furigana'>{value[1]}</div> : <div className='furigana'>Hidden</div>
                                }
                            </li>
                            <li className="list-group-item">
                                <div>
                                    <button className="button" onClick={() => {
                                        if (translation !== value[2]) {
                                            setTranslation(value[2]);
                                            setDuplicateFurigana(value[1]);
                                        }
                                        else {
                                            setTranslation('');
                                            setDuplicateFurigana('');
                                            console.log('else');
                                        }
                                    }}>
                                        {(translation === value[2] && duplicateFurigana === value[1]) ? ('Hide translation') : ('Show translation')}
                                    </button>
                                </div>
                                {
                                    (translation === value[2] && duplicateFurigana === value[1]) ? (<div className='translation'>{value[2].charAt(0).toUpperCase() + value[2].slice(1)}</div>) : (<div className='translation'>Hidden</div>)
                                }
                            </li>
                        </ul>
                    </div>
                ))
            }
        </div>
    )
}

export default VocabJlpt5Screen;