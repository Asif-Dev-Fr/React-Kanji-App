import React, {useState, useEffect} from 'react';

const QuizKanji = ({gradeOne, gradeTwo, gradeThree, gradeFour, gradeFive, gradeSix}) => {

    const [kanjiGrade, setKanjiGrade] = useState([]);
    const [randomKanji, setRandomKanji] = useState(0);
    const [buttonColor, setButtonColor] = useState();

    const [translation, setTranslation] = useState('');
    const [kunyomi, setKunyomi] = useState([]);
    const [onyomi, setOnyomi] = useState([]);

    var defaultColor = 'btn btn-primay';
    var selectedColor = 'btn btn-warning';

    useEffect(() =>{
        setKanjiGrade(gradeOne);
        const randomNumber = Math.floor(Math.random() * gradeOne.length)
        setRandomKanji(randomNumber);
    },[gradeOne]);

    const gradeOneKanji = () => {
        setKanjiGrade(gradeOne);
    }

    const gradeTwoKanji = () => {
        setKanjiGrade(gradeTwo);
    }

    const gradeThreeKanji = () => {
        setKanjiGrade(gradeThree);
    }

    const gradeFourKanji = () => {
        setKanjiGrade(gradeFour);
    }

    const gradeFiveKanji = () => {
        setKanjiGrade(gradeFive);
    }

    const gradeSixKanji = () => {
        setKanjiGrade(gradeSix);
    }

    

    return(
        <div className="center">
            <div className="row buttonChangeGradeKanji">
                <div className="col-lg-4">
                    <button className={buttonColor} onClick={gradeOneKanji}>Kanji Grade One</button>
                </div>
                <div className="col-lg-4">
                    <button className={buttonColor} onClick={gradeTwoKanji}>Kanji Grade Two</button>
                </div>
                <div className="col-lg-4">
                    <button className="btn btn-primary" onClick={gradeThreeKanji}>Kanji Grade Three</button>
                </div>
            </div>
            <div className="row buttonChangeGradeKanji">
                <div className="col-lg-4">
                    <button className="btn btn-primary" onClick={gradeFourKanji}>Kanji Grade Four</button>
                </div>
                <div className="col-lg-4">
                    <button className="btn btn-primary" onClick={gradeFiveKanji}>Kanji Grade Five</button>
                </div>
                <div className="col-lg-4">
                    <button className="btn btn-primary" onClick={gradeSixKanji}>Kanji Grade Six</button>
                </div>
            </div>

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
    )
}

export default QuizKanji;