
import styled from 'styled-components';
import Buttons from './Buttons';
import ResultScreen from './ResultScreen';
import { useState } from 'react';

const Display = styled.div`
    border: solid black;
    padding: 10%;
    border-radius: 15px;
    color: black;
    font-size: xxx-large;
    text-align: right;

`;

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
            <Display>{result}</Display>
            <Buttons />
        </div>
    );
}

export default Calculator;

