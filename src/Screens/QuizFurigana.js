import React, {useState, useEffect} from 'react';

const QuizFurigana = () => {

    const [kana, setKana] = useState([]);
    const [number, setNumber] = useState(0);
    const [id, setId] = useState(0);

    useEffect(() => {
        const retrieveFurigana = async () => {
            const response = await fetch('../data/furigana.json');
            const data = await response.json();
            setKana(data.kana);
            // Random Card :
            const randomNumber = Math.floor(Math.random() * data.kana.length)
            setNumber(randomNumber);
        }
        retrieveFurigana();

        const footer = document.getElementById('footer');
        footer.classList.add('footer-bottom');
    }, []);

    const changeFurigana = () => {
        setNumber(Math.floor(Math.random() * kana.length));
    }


    return(
        <div className="center quiz">
            {
                kana.slice(number, number + 1).map((value) => (
                    <div className="card furiganaCardStyle" key={value.id}>
                        <div className="card-body">
                            <div className="card-text">
                                <div>
                                    <span data-toggle="tooltip" data-placement="top" title="Hiragana">
                                        {value.hiragana}
                                    </span>
                                </div>
                                <div>
                                    <span data-toggle="tooltip" data-placement="top" title="Katakana">
                                        {value.katakana}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <div className="button">
                                    <button className='btn btn-primary' onClick={() => {
                                        if (id !== value.id) {
                                            setId(value.id);
                                        } else {
                                            setId(0);          
                                        }
                                    }}>
                                        {id === value.id ? 'Hide translation' : 'Show translation'}
                                    </button>
                                </div>
                                {
                                    id === value.id ? <div className='meaningFurigana'>{value.meaning.toUpperCase()}</div> : <div className='meaningFurigana'>Hidden</div>
                                }
                            </li>
                        </ul>
                    </div>
                ))
            }
            <div className="furiganaChangeButton">
                <button className='btn btn-primary' onClick={changeFurigana}>Next Furigana</button>
            </div>

        </div>
    )
}

export default QuizFurigana;