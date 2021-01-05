import React,  { useState, useEffect } from 'react';

const QuizVocabularyScreen = () => {

    const [vocabulary, setVocabulary] = useState([]);
    const [randomVocabulary, setRandomVocabulary] = useState(0);
    const [furigana, setFurigana] = useState('');
    const [translation, setTranslation] = useState('');

    const [buttonOneColor, setButtonOneColor] = useState();
    const [buttonTwoColor, setButtonTwoColor] = useState();
    const [buttonThreeColor, setButtonThreeColor] = useState();
    const [buttonFourColor, setButtonFourColor] = useState();

    const defaultColor = 'btn btn-primary';
    const selectedColor = 'btn btn-dark';

    useEffect(() => {
        const retrieveData = async () => {
            const response = await fetch('../data/jlpt5.json');
            const data = await response.json();
            setVocabulary(data);

            setButtonOneColor(selectedColor);
            setButtonTwoColor(defaultColor);
            setButtonThreeColor(defaultColor);
            setButtonFourColor(defaultColor);
            
            const randomNumber = Math.floor(Math.random() * data.length);
            setRandomVocabulary(randomNumber);  
            
            const footer = document.getElementById('footer');
            footer.classList.add('footer-bottom');
        }
        retrieveData();
    },[]);

    const jlpt5 = async () => {
        const reponse = await fetch('../data/jlpt5.json');
        const data = await reponse.json();
        setVocabulary(data);
        const randomNumber = Math.floor(Math.random() * data.length);
        setRandomVocabulary(randomNumber);  

        if(buttonOneColor === defaultColor) {
            setButtonOneColor(selectedColor);
        }
        if(buttonTwoColor === selectedColor) {
            setButtonTwoColor(defaultColor);
        };
        if(buttonThreeColor === selectedColor) {
            setButtonThreeColor(defaultColor) 
        };
        if(buttonFourColor === selectedColor) {
            setButtonFourColor(defaultColor);
        };
    }

    const jlpt4 = async () => {
        const reponse = await fetch('../data/jlpt4.json');
        const data = await reponse.json();
        setVocabulary(data);
        const randomNumber = Math.floor(Math.random() * data.length);
        setRandomVocabulary(randomNumber); 

        if(buttonOneColor === selectedColor) {
            setButtonOneColor(defaultColor);
        }
        if(buttonTwoColor === defaultColor) {
            setButtonTwoColor(selectedColor);
        };
        if(buttonThreeColor === selectedColor) {
            setButtonThreeColor(defaultColor) 
        };
        if(buttonFourColor === selectedColor) {
            setButtonFourColor(defaultColor);
        };
    }

    const jlpt3 = async () => {
        const reponse = await fetch('../data/jlpt3.json');
        const data = await reponse.json();
        setVocabulary(data);
        const randomNumber = Math.floor(Math.random() * data.length);
        setRandomVocabulary(randomNumber); 

        if(buttonOneColor === selectedColor) {
            setButtonOneColor(defaultColor);
        }
        if(buttonTwoColor === selectedColor) {
            setButtonTwoColor(defaultColor);
        };
        if(buttonThreeColor === defaultColor) {
            setButtonThreeColor(selectedColor) 
        };
        if(buttonFourColor === selectedColor) {
            setButtonFourColor(defaultColor);
        };
    }

    const jlpt2 = async () => {
        const reponse = await fetch('../data/jlpt2.json');
        const data = await reponse.json();
        setVocabulary(data);
        const randomNumber = Math.floor(Math.random() * data.length);
        setRandomVocabulary(randomNumber); 

        if(buttonOneColor === selectedColor) {
            setButtonOneColor(defaultColor);
        }
        if(buttonTwoColor === selectedColor) {
            setButtonTwoColor(defaultColor);
        };
        if(buttonThreeColor === selectedColor) {
            setButtonThreeColor(defaultColor) 
        };
        if(buttonFourColor === defaultColor) {
            setButtonFourColor(selectedColor);
        };
    }

    const changeVocabulary = () => {
        const randomNumber = Math.floor(Math.random() * vocabulary.length);
        setRandomVocabulary(randomNumber); 
    }

    return (
        <div className="center">
            <div className="row buttonChangeVocab">
                <div className="col-lg-3">
                    <button className={buttonOneColor} onClick={jlpt5}>Vocabulary JLPT N5</button>
                </div>
                <div className="col-lg-3">
                    <button className={buttonTwoColor} onClick={jlpt4}>Vocabulary JLPT N4</button>
                </div>
                <div className="col-lg-3">
                    <button className={buttonThreeColor} onClick={jlpt3}>Vocabulary JLPT N3</button>
                </div>
                <div className="col-lg-3">
                    <button id="buttonOne" className={buttonFourColor} onClick={jlpt2}>Vocabulary JLPT N2</button>
                </div>
                
            </div>

            {
                vocabulary.slice(randomVocabulary, randomVocabulary + 1).map((value) => (
                    <div className="card cardVocabQuiz" key={value[0] + '_' + value[1]}>
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
                                        }
                                        else {
                                            setTranslation('');
                                        }
                                    }}>
                                        {(translation === value[2]) ? ('Hide translation') : ('Show translation')}
                                    </button>
                                </div>
                                {
                                    (translation === value[2]) ? (<div className='translation'>{value[2].charAt(0).toUpperCase() + value[2].slice(1)}</div>) : (<div className='translation'>Hidden</div>)
                                }
                            </li>
                        </ul>
                    </div>
                ))
            }
            <div className="nextVocabButton">
                <button onClick={changeVocabulary}>Next Word</button>
            </div>
        </div>
    )
}

export default QuizVocabularyScreen;