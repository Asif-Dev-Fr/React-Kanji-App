import React, {useState, useEffect} from 'react';

const VocabJlpt5 = () => {

    const [vocabulary, setVocabulary] = useState([]);
    const [furigana, setFurigana] = useState('');

    useEffect(() => {
        const retrieveData = async () => {
            const reponse = await fetch('../data/jlpt5.json');
            const data = await reponse.json();
            setVocabulary(data);
        }
        retrieveData();
    },[]) 
    return(
        <div className="center wrap">
            {
                vocabulary.map((value) => (
                    <div className="card" key={value[0] + value[1]}>
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
                            <div className="button">
                                <button onClick={() => {
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
                                furigana === value[1] ? <div className=''>{value[1]}</div> : <div className=''>Hidden</div>
                            }
                        </li>
                        
                        
                    </ul>
                </div>
                ))
            }
        </div>
    )
}

export default VocabJlpt5;