import React, { useEffect, useState } from "react";

const Furigana = () => {
  const [kana, setKana] = useState([]);
  const [id, setId] = useState(0);
  const retrieveFurigana = async () => {
    const response = await fetch("../data/furigana.json");
    const data = await response.json();
    if(data) setKana(data.kana);
  };

  useEffect(() => {
    retrieveFurigana();
    const footer = document.getElementById("footer");
    footer.classList.remove("footer-bottom");
  }, []);

  return (
    <div className="center wrap">
      {kana.map((value) => (
        <div className="card furiganaCardStyle" key={value.id}>
          <div className="card-body">
            <div className="card-text">
              <div>
                <span
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Hiragana"
                >
                  {value.hiragana}
                </span>
              </div>
              <div>
                <span
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Katakana"
                >
                  {value.katakana}
                </span>
              </div>
            </div>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="button">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    if (id !== value.id) {
                      setId(value.id);
                    } else {
                      setId(0);
                    }
                  }}
                >
                  {id === value.id ? "Hide translation" : "Show translation"}
                </button>
              </div>
              {id === value.id ? (
                <div className="meaningFurigana">
                  {value.meaning.toUpperCase()}
                </div>
              ) : (
                <div className="meaningFurigana">Hidden</div>
              )}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Furigana;
