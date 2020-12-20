import React, { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import NavBar from './Components/Navbar';
import {Footer} from './Components/Footer';
import HomeScreen from './Screens/HomeScreen';
import Furigana from './Screens/Furigata';
import GradeOneScreen from './Screens/GradeOneScreen';
import GradeTwoScreen from './Screens/GradeTwoScreen';
import GradeThreeScreen from './Screens/GradeThreeScreen';
import GradeFourScreen from './Screens/GradeFourScreen';
import GradeFiveScreen from './Screens/GradeFiveScreen';
import GradeSixScreen from './Screens/GradeSixScreen';
import QuizFurigana from './Screens/QuizFurigana';
import QuizKanji from './Screens/QuizKanji';

const App = () => {

  const [chuugakkouKanjis, setChuugakkouKanjis] = useState([]);
  const [gradeOneKanji, setGradeOneKanji] = useState([]);
  const [gradeTwoKanji, setGradeTwoKanji] = useState([]);
  const [gradeThreeKanji, setGradeThreeKanji] = useState([]);
  const [gradeFourKanji, setGradeFourKanji] = useState([]);
  const [gradeFiveKanji, setGradeFiveKanji] = useState([]);
  const [gradeSixKanji, setGradeSixKanji] = useState([]);

  useEffect(() => {

    const retrieveData = async () => {
      // Les données sont dans le fichier public :
      const response = await fetch('../data/kanji-list.json');
      const data = await response.json();
      console.log(data);
      
      setGradeOneKanji(data.GradeOne);
      setGradeTwoKanji(data.GradeTwo);
      setGradeThreeKanji(data.GradeThree);
      setGradeFourKanji(data.GradeFour);
      setGradeFiveKanji(data.GradeFive);
      
      setGradeSixKanji(data.GradeSix);
    };
    retrieveData();    
  }, []);


  return (
    <Router>
      <div className="App container-fluid p-0">
        <header>
          <NavBar />
        </header>
        <main>
        <Switch>
          <Route path='/' exact component={HomeScreen} />

          <Route path='/furigana' exact component={Furigana} />
          <Route path='/furigana/quiz' component={QuizFurigana} />

          <Route path='/kanjis/grade-one'render={() => <GradeOneScreen gradeOne={gradeOneKanji} />} />
          <Route path='/kanjis/grade-two' render={() => <GradeTwoScreen gradeTwo={gradeTwoKanji} />}  />
          <Route path='/kanjis/grade-three' render={() => <GradeThreeScreen gradeThree={gradeThreeKanji} />} />
          <Route path='/kanjis/grade-three' render={() => <GradeThreeScreen gradeThree={gradeThreeKanji} />}  />
          <Route path='/kanjis/grade-four' render={() => <GradeFourScreen gradeFour={gradeFourKanji} />}  />
          <Route path='/kanjis/grade-five' render={() => <GradeFiveScreen gradeFive={gradeFiveKanji} />}  />
          <Route path='/kanjis/grade-six' render={() => <GradeSixScreen gradeSix={gradeSixKanji} />}  />

          <Route path='/kanji/quiz' 
            render={() => <QuizKanji 
                gradeOne={gradeOneKanji} 
                gradeTwo={gradeTwoKanji}  
                gradeThree={gradeThreeKanji}  
                gradeFour={gradeFourKanji}
                gradeFive={gradeFiveKanji}
                gradeSix={gradeSixKanji}
              />} 
          />
        </Switch>
        </main>

        <Footer />
        
      </div>
    </Router>
  );
}

export default App;
