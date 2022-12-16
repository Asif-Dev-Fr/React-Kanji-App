import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import HomeScreen from "./Screens/HomeScreen";
import Furigana from "./Screens/Furigata";
import GradeOneScreen from "./Screens/GradeOneScreen";
import GradeTwoScreen from "./Screens/GradeTwoScreen";
import GradeThreeScreen from "./Screens/GradeThreeScreen";
import GradeFourScreen from "./Screens/GradeFourScreen";
import GradeFiveScreen from "./Screens/GradeFiveScreen";
import GradeSixScreen from "./Screens/GradeSixScreen";
import QuizFurigana from "./Screens/QuizFurigana";
import QuizKanji from "./Screens/QuizKanji";
import VocabJlpt5Screen from "./Screens/VocabJlpt5Screen";
import VocabJlpt4Screen from "./Screens/VocabJlpt4Screen";
import VocabJlpt3Screen from "./Screens/VocabJlpt3Screen";
import VocabJlpt2Screen from "./Screens/VocabJlpt2Screen";
import QuizVocabularyScreen from "./Screens/QuizVocabularyScreen";

const App = () => {
  const [gradeOneKanji, setGradeOneKanji] = useState([]);
  const [gradeTwoKanji, setGradeTwoKanji] = useState([]);
  const [gradeThreeKanji, setGradeThreeKanji] = useState([]);
  const [gradeFourKanji, setGradeFourKanji] = useState([]);
  const [gradeFiveKanji, setGradeFiveKanji] = useState([]);
  const [gradeSixKanji, setGradeSixKanji] = useState([]);

  useEffect(() => {
    const retrieveData = async () => {
      // Les données sont dans le fichier public :
      const response = await fetch("../data/kanji-list.json");
      const data = await response.json();
      if (data) {
        setGradeOneKanji(data.GradeOne);
        setGradeTwoKanji(data.GradeTwo);
        setGradeThreeKanji(data.GradeThree);
        setGradeFourKanji(data.GradeFour);
        setGradeFiveKanji(data.GradeFive);
        setGradeSixKanji(data.GradeSix);
      }
    };
    retrieveData();
  }, []);

  return (
    <Router>
      <div className="App container-fluid p-0 m-0">
        <header>
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route path="/" exact element={<HomeScreen />} />

            <Route path="/furigana" exact element={<Furigana />} />
            <Route path="/furigana/quiz" element={<QuizFurigana />} />

            <Route
              path="/kanjis/grade-one"
              element={<GradeOneScreen gradeOne={gradeOneKanji} />}
            />
            <Route
              path="/kanjis/grade-two"
              element={<GradeTwoScreen gradeTwo={gradeTwoKanji} />}
            />
            <Route
              path="/kanjis/grade-three"
              element={<GradeThreeScreen gradeThree={gradeThreeKanji} />}
            />
            <Route
              path="/kanjis/grade-three"
              element={<GradeThreeScreen gradeThree={gradeThreeKanji} />}
            />
            <Route
              path="/kanjis/grade-four"
              element={<GradeFourScreen gradeFour={gradeFourKanji} />}
            />
            <Route
              path="/kanjis/grade-five"
              element={<GradeFiveScreen gradeFive={gradeFiveKanji} />}
            />
            <Route
              path="/kanjis/grade-six"
              element={<GradeSixScreen gradeSix={gradeSixKanji} />}
            />

            <Route
              path="/kanji/quiz"
              element={
                <QuizKanji
                  gradeOne={gradeOneKanji}
                  gradeTwo={gradeTwoKanji}
                  gradeThree={gradeThreeKanji}
                  gradeFour={gradeFourKanji}
                  gradeFive={gradeFiveKanji}
                  gradeSix={gradeSixKanji}
                />
              }
            />
            <Route path="/vocabulary/jlpt5" element={<VocabJlpt5Screen />} />
            <Route path="/vocabulary/jlpt4" element={<VocabJlpt4Screen />} />
            <Route path="/vocabulary/jlpt3" element={<VocabJlpt3Screen />} />
            <Route path="/vocabulary/jlpt2" element={<VocabJlpt2Screen />} />
            <Route path="/vocabulary/quiz" element={<QuizVocabularyScreen />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
