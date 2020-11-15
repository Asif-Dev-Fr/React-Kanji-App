import React from 'react';

const GradeOneScreen = ({ gradeOne }) => {
    return (
        <div className="center wrap">
            {
                gradeOne.map((value) => (
                    <div className="card cardStyle" key={value.kanji}>
                        <div className="card-body">
                            <p className="card-text">
                                {value.kanji}
                            </p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                {value.translation.charAt(0).toUpperCase() + value.translation.slice(1)}
                            </li>
                            <li className="list-group-item">Dapibus ac facilisis in</li>
                            <li className="list-group-item">Vestibulum at eros</li>
                        </ul>
                    </div> 
                ))
            }

        </div>
    )
}

export default GradeOneScreen;