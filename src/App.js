import React, { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import NavBar from './Components/Navbar';
import HomeScreen from './Screens/HomeScreen';
import GradeOneScreen from './Screens/GradeOneScreen';


const App = () => {

  const [allData, setAllData] = useState([]);
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
      const response = await fetch('./kanji-list.json');
      const data = await response.json();
      console.log(data);

      setAllData(data);
      setGradeOneKanji(data.GradeOne);
      setGradeTwoKanji(data.GradeTwo);
      setGradeThreeKanji(data.GradeThree);
      setGradeFourKanji(data.GradeFour);
      setGradeFiveKanji(data.GradeFive);
      setGradeSixKanji(data.gradeSix);
      
    };
    retrieveData();    
  }, []);


  return (
    <div className="App container-fluid p-0">
      <Router>
      <NavBar />
      <Switch>
        <Route path='/' exact component={HomeScreen} />
        <Route path='/kanjis/grade-one' component={GradeOneScreen} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
