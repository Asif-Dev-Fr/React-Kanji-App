import React, {useEffect, useState} from 'react';

const Furigana = () => {

    const [kana, setKana] = useState([]);
    const [isShown, setIsShown] = useState(false);

    useEffect(() => {
        const retrieveFurigana = async () => {
            const response = await fetch('../data/furigana.json');
            const data = await response.json();
            console.log(data.kana);
            setKana(data.kana);
        }
        retrieveFurigana();
    }, []);

    const showAnswer = () => {
        setIsShown(true);
    }

    return(
        <div className="center wrap">
            {
                kana.map((value) => (
                    <div className="card furiganaCardStyle" key={value.id}>
                        <div className="card-body">
                            <p className="card-text">
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
                            </p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <div onClick={showAnswer}><button> Read translation </button></div>
                                { isShown === true ? <div>{ value.meaning.toUpperCase() }</div> : ''}
                            </li>
                        </ul>
                    </div> 
                ))
            }
        </div>
    )
}

export default Furigana;