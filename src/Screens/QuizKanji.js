import React, { useState, useEffect } from "react";

const QuizKanji = ({
  gradeOne,
  gradeTwo,
  gradeThree,
  gradeFour,
  gradeFive,
  gradeSix,
}) => {
  const [kanjiGrade, setKanjiGrade] = useState([]);
  const [randomKanji, setRandomKanji] = useState(0);

  const [buttonList, setButtonList] = useState({
    one: true,
    two: false,
    three: false,
    four: false,
    five: false,
    six: false,
  });

  const [translation, setTranslation] = useState("");
  const [kunyomi, setKunyomi] = useState([]);
  const [onyomi, setOnyomi] = useState([]);

  useEffect(() => {
    setRandomKanji(Math.floor(Math.random() * gradeOne.length));
    setKanjiGrade(gradeOne);

    const footer = document.getElementById("footer");
    footer.classList.add("footer-bottom");
  }, [gradeOne]);

  const defaultColor = "btn btn-warning";
  const selectedColor = "btn btn-dark";

  const chooseGrade = (selected) => {
    for (let btn in buttonList) {
      buttonList[btn] = false;
    }

    if (selected) {
      setButtonList({
        [selected]: true,
      });
    }

    switch (selected) {
      case "one":
        setRandomKanji(Math.floor(Math.random() * gradeOne.length));
        setKanjiGrade(gradeOne);
        break;
      case "two":
        setRandomKanji(Math.floor(Math.random() * gradeTwo.length));
        setKanjiGrade(gradeTwo);
        break;
      case "three":
        setRandomKanji(Math.floor(Math.random() * gradeThree.length));
        setKanjiGrade(gradeThree);
        break;
      case "four":
        setRandomKanji(Math.floor(Math.random() * gradeFour.length));
        setKanjiGrade(gradeFour);
        break;
      case "five":
        setRandomKanji(Math.floor(Math.random() * gradeFive.length));
        setKanjiGrade(gradeFive);
        break;
      case "six":
        setRandomKanji(Math.floor(Math.random() * gradeSix.length));
        setKanjiGrade(gradeSix);
        break;
    }
  };

  const changeKanji = () => {
    if (kanjiGrade) {
      setRandomKanji(Math.floor(Math.random() * kanjiGrade.length));
    }
  };

  return (
    <div className="center">
      <div className="row buttonChangeGradeKanji">
        <div className="col-lg-4">
          <button
            id="buttonOne"
            className={buttonList.one ? selectedColor : defaultColor}
            onClick={() => chooseGrade("one")}
          >
            Kanji Grade One
          </button>
        </div>
        <div className="col-lg-4">
          <button
            className={buttonList.two ? selectedColor : defaultColor}
            onClick={() => chooseGrade("two")}
          >
            Kanji Grade Two
          </button>
        </div>
        <div className="col-lg-4">
          <button
            className={buttonList.three ? selectedColor : defaultColor}
            onClick={() => chooseGrade("three")}
          >
            Kanji Grade Three
          </button>
        </div>
      </div>
      <div className="row buttonChangeGradeKanji">
        <div className="col-lg-4">
          <button
            className={buttonList.four ? selectedColor : defaultColor}
            onClick={() => chooseGrade("four")}
          >
            Kanji Grade Four
          </button>
        </div>
        <div className="col-lg-4">
          <button
            className={buttonList.five ? selectedColor : defaultColor}
            onClick={() => chooseGrade("five")}
          >
            Kanji Grade Five
          </button>
        </div>
        <div className="col-lg-4">
          <button
            className={buttonList.six ? selectedColor : defaultColor}
            onClick={() => chooseGrade("six")}
          >
            Kanji Grade Six
          </button>
        </div>
      </div>
      <div className="quiz">
        {kanjiGrade.slice(randomKanji, randomKanji + 1).map((value) => (
          <div className="card cardStyle" key={value.kanji}>
            <div className="card-body">
              <p className="card-text">{value.kanji}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <div>
                  <button
                    className="button btn btn-primary"
                    onClick={() => {
                      if (translation !== value.translation) {
                        setTranslation(value.translation);
                      } else {
                        setTranslation("");
                      }
                    }}
                  >
                    {translation !== value.translation
                      ? "Show translation"
                      : "Hide translation"}
                  </button>
                </div>
                {translation === value.translation ? (
                  <div>
                    {value.translation.charAt(0).toUpperCase() +
                      value.translation.slice(1)}
                  </div>
                ) : (
                  <div>Hidden translation</div>
                )}
              </li>
              <li className="list-group-item">
                <div>
                  <button
                    className="button btn btn-primary"
                    onClick={() => {
                      if (onyomi !== value.furigana.onyomi) {
                        setOnyomi(value.furigana.onyomi);
                      } else {
                        setOnyomi("");
                      }
                    }}
                  >
                    {onyomi !== value.furigana.onyomi
                      ? "Show onyomi"
                      : "Hide onyomi"}
                  </button>
                </div>
                {onyomi === value.furigana.onyomi ? (
                  <div className="onyomi">
                    {onyomi.length !== 0
                      ? onyomi.map((value) => `[ ${value} ] `)
                      : "No onyomi"}
                  </div>
                ) : (
                  <div>Hidden onyomi</div>
                )}
              </li>
              <li className="list-group-item">
                <div>
                  <button
                    className="button btn btn-primary"
                    onClick={() => {
                      if (kunyomi !== value.furigana.kunyomi) {
                        setKunyomi(value.furigana.kunyomi);
                      } else {
                        setKunyomi("");
                      }
                    }}
                  >
                    {kunyomi !== value.furigana.kunyomi
                      ? "Show kunyomi"
                      : "Hide kunyomi"}
                  </button>
                </div>
                {kunyomi === value.furigana.kunyomi ? (
                  <div className="kunyomi">
                    {kunyomi.length !== 0
                      ? kunyomi.map((value) => `[ ${value} ] `)
                      : "No kunyomi"}
                  </div>
                ) : (
                  <div>Hidden kunyomi</div>
                )}
              </li>
            </ul>
          </div>
        ))}
      </div>
      <div className="kanjiChangeButton">
        <button className="btn btn-primary" onClick={changeKanji}>
          Next Kanji
        </button>
      </div>
    </div>
  );
};

export default QuizKanji;
