import './Calculator.css';
import Button from './Button';
import ResultScreen from './ResultScreen';

function Calculator() {

    return (
        <div className='container'>
            <ResultScreen />
            <div className='grid'>
                {buttons.map(row => {
                    return row.map(cell => {
                        return (
                            <div key={cell}>
                                <Button label={cell} />
                            </div>
                        );
                    })
                })}
            </div>

        </div>
    );
}

export default Calculator;

const buttons = [
    ['C', '+/-', '%', '÷'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '=']
];