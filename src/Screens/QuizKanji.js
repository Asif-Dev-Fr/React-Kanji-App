import React, {useState, useEffect} from 'react';

const QuizKanji = ({gradeOne, gradeTwo, gradeThree, gradeFour, gradeFive, gradeSix}) => {

    const [kanjiGrade, setKanjiGrade] = useState([]);
    const [randomKanji, setRandomKanji] = useState(0);

    useEffect(() =>{
        setKanjiGrade(gradeOne);
    },[])

    return(
        <div className="center">
            {
                kanjiGrade.map((value) =>(
                    value.kanji
                ))
            }
        </div>
    )
}

export default QuizKanji;