import React, { useState, useEffect } from 'react';
import './App.css';

import NavBar from './Components/Navbar';


const App = () => {

  const [allData, setAllData] = useState([]);
  const [shougakkouKanjis, setShougakkouKanjis] = useState([]);
  const [chuugakkouKanjis, setChuugakkouKanjis] = useState([]);
  const [gradeOne, setGradeOne] = useState([]);

  useEffect(() => {
    const retrieveData = async () => {
      // Les données sont dans le fichier public :
      const response = await fetch('./kanji-list.json');
      const data = await response.json();
      console.log(data);

      setAllData(data);
      setShougakkouKanjis(data.shougakkou);
      setChuugakkouKanjis(data.chuugakkou);
      setGradeOne(data.shougakkou[0].grade === '1');
      console.log(gradeOne);


    };
    retrieveData();    
  }, []);


  return (
    <div className="App container-fluid p-0">
      <NavBar />
      {
        
        shougakkouKanjis.map((value) => (
          value.grade === '1' ?
          <p>{value.kanji}</p>
          : ''
        ))
      }
    </div>
  );
}

export default App;
