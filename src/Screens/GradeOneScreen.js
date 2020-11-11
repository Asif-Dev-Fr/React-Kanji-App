import React from 'react';

const GradeOneScreen = ({ gradeOne }) => {
    return(
        <div className="center wrap">
            {
                gradeOne.map((value) =>(
                    value.kanji 
                ))
            }

        </div>
    )
}

export default GradeOneScreen;