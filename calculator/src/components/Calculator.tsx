
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
    function getButtonValue(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        let value: unknown = (e.target as Element).innerHTML;
        console.log((e.target as Element).innerHTML)
        setResult(value as number);
    }

    return (
        <div className='container'>
            <Display>{result}</Display>
            <Buttons onClick={getButtonValue} />
        </div>
    );
}

export default Calculator;

