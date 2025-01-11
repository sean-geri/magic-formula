import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {MainPage} from "./components/main-page/main-page";


function printNumber(num: number) {
    setTimeout(() => {
        console.log(num)
        if (num < 11) {
            printNumber(num+1)
        }
    }, 1000);
}

function printNumbersWithDelay(current: number = 0) {
    if (current > 10) return;

    console.log(" ASd " + current);
    setTimeout(() => {
        printNumbersWithDelay(current + 1);
    }, 1000);
}




function App() {

    useEffect(() => {
        printNumber(1)
        printNumbersWithDelay();

    }, [])
  return (
    <div className="App">
      <header className="App-header">
          <MainPage />
      </header>
    </div>
  );
}

export default App;
