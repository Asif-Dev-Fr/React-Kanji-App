import React, {useState, useEffect} from 'react';

const QuizKanji = ({gradeOne, gradeTwo, gradeThree, gradeFour, gradeFive, gradeSix}) => {

    const [kanjiGrade, setKanjiGrade] = useState([]);
    const [randomKanji, setRandomKanji] = useState(0);

    const [buttonOneColor, setButtonOneColor] = useState();
    const [buttonTwoColor, setButtonTwoColor] = useState();
    const [buttonThreeColor, setButtonThreeColor] = useState();
    const [buttonFourColor, setButtonFourColor] = useState();
    const [buttonFiveColor, setButtonFiveColor] = useState();
    const [buttonSixColor, setButtonSixColor] = useState();

    const [translation, setTranslation] = useState('');
    const [kunyomi, setKunyomi] = useState([]);
    const [onyomi, setOnyomi] = useState([]);


    useEffect(() =>{
        setKanjiGrade(gradeOne);
        const randomNumber = Math.floor(Math.random() * gradeOne.length);
        setRandomKanji(randomNumber);
        setButtonOneColor(selectedColor);
        setButtonTwoColor(defaultColor);
        setButtonThreeColor(defaultColor);
        setButtonFourColor(defaultColor);
        setButtonFiveColor(defaultColor);
        setButtonSixColor(defaultColor);

    },[gradeOne]);

    const defaultColor = 'btn btn-primary';
    const selectedColor = 'btn btn-dark';

    const gradeOneKanji = (event) => {
        setKanjiGrade(gradeOne);
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
        if(buttonFiveColor === selectedColor) {
            setButtonFiveColor(defaultColor);
        };
        if(buttonSixColor === selectedColor); {
            setButtonSixColor(defaultColor);
        }

        
    }

    const gradeTwoKanji = () => {
        setKanjiGrade(gradeTwo);

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
        if(buttonFiveColor === selectedColor) {
            setButtonFiveColor(defaultColor);
        };
        if(buttonSixColor === selectedColor); {
            setButtonSixColor(defaultColor);
        }

    }

    const gradeThreeKanji = () => {
        setKanjiGrade(gradeThree);
        
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
        if(buttonFiveColor === selectedColor) {
            setButtonFiveColor(defaultColor);
        };
        if(buttonSixColor === selectedColor); {
            setButtonSixColor(defaultColor);
        }

    }

    const gradeFourKanji = () => {
        setKanjiGrade(gradeFour);

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
        if(buttonFiveColor === selectedColor) {
            setButtonFiveColor(defaultColor);
        };
        if(buttonSixColor === selectedColor); {
            setButtonSixColor(defaultColor);
        }
    }

    const gradeFiveKanji = () => {
        setKanjiGrade(gradeFive);

        if(buttonOneColor === selectedColor) {
            setButtonOneColor(defaultColor);
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
        if(buttonFiveColor === defaultColor) {
            setButtonFiveColor(selectedColor);
        };
        if(buttonSixColor === selectedColor); {
            setButtonSixColor(defaultColor);
        }
    }

    const gradeSixKanji = () => {
        setKanjiGrade(gradeSix);
 
        if(buttonOneColor === selectedColor) {
            setButtonOneColor(defaultColor);
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
        if(buttonFiveColor === selectedColor) {
            setButtonFiveColor(defaultColor);
        };
        if(buttonSixColor === defaultColor); {
            setButtonSixColor(selectedColor);
        }
    }

    const changeKanji = () => {
        setRandomKanji(Math.floor(Math.random() * gradeOne.length))
    }
    

    return(
        <div className="center">
            <div className="row buttonChangeGradeKanji">
                <div className="col-lg-4">
                    <button id="buttonOne" className={buttonOneColor} onClick={gradeOneKanji}>Kanji Grade One</button>
                </div>
                <div className="col-lg-4">
                    <button className={buttonTwoColor} onClick={gradeTwoKanji}>Kanji Grade Two</button>
                </div>
                <div className="col-lg-4">
                    <button className={buttonThreeColor} onClick={gradeThreeKanji}>Kanji Grade Three</button>
                </div>
            </div>
            <div className="row buttonChangeGradeKanji">
                <div className="col-lg-4">
                    <button className={buttonFourColor} onClick={gradeFourKanji}>Kanji Grade Four</button>
                </div>
                <div className="col-lg-4">
                    <button className={buttonFiveColor} onClick={gradeFiveKanji}>Kanji Grade Five</button>
                </div>
                <div className="col-lg-4">
                    <button className={buttonSixColor} onClick={gradeSixKanji}>Kanji Grade Six</button>
                </div>
            </div>
            <div className="quiz">
                {
                    kanjiGrade.slice(randomKanji, randomKanji + 1).map((value) =>(
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
            <div className="kanjiChangeButton">
                <button onClick={changeKanji}>Next Kanji</button>
            </div>
        </div>
    )
}

export default QuizKanji;