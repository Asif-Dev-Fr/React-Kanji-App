import React, {useState, useEffect} from 'react';

const QuizFurigana = () => {

    const [kana, setKana] = useState([]);
    const [sliced, setSliced] = useState([]);
    const [id, setId] = useState(0);

    useEffect(() => {
        const retrieveFurigana = async () => {
            const response = await fetch('../data/furigana.json');
            const data = await response.json();
            console.log(data.kana);
            setSliced(data.kana);
            const randomKana = Math.floor(Math.random() * data.kana.length);
            setKana(randomKana);
        }
        retrieveFurigana();

        const footer = document.getElementById('footer');
        footer.classList.remove('footer-bottom');
    }, []);



    return(
        <div>
            <h1>Try</h1>
            {
                <p>{kana.hiragana}</p>
            }
            {
                sliced.slice(0,5).map((value) =>(
                    value.hiragana
                ))
            }


        </div>
    )
}

export default QuizFurigana;