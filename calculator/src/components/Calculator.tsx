import './Calculator.css';
import Buttons from './Buttons';
import ResultScreen from './ResultScreen';
import { useState } from 'react';

function Calculator() {
    let [result, setResult] = useState(0);
    function handleClick(e: MouseEvent) {
        e.preventDefault();
        // alert(event.currentTarget.tagName);
        console.log(e.target)
        return;
    }

    return (
        <div className='container'>
            <ResultScreen />
            <Buttons />
        </div>
    );
}

export default Calculator;

