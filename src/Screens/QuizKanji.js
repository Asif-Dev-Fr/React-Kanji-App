import React, {useState, useEffect} from 'react';

const QuizKanji = ({gradeOne, gradeTwo, gradeThree, gradeFour, gradeFive, gradeSix}) => {

    const [kanjiGrade, setKanjiGrade] = useState([]);
    const [randomKanji, setRandomKanji] = useState(0);

    useEffect(() =>{
        setKanjiGrade(gradeOne);
        const randomNumber = Math.floor(Math.random() * gradeOne.length)
        setRandomKanji(randomNumber)
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
                    <button className="btn btn-primary" onClick={gradeOneKanji}>Kanji Grade One</button>
                </div>
                <div className="col-lg-4">
                    <button className="btn btn-primary" onClick={gradeTwoKanji}>Kanji Grade Two</button>
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
                    value.kanji
                ))
            }
        </div>
    )
}

export default QuizKanji;