
export default function Buttons() {

    return (
        <div className='grid'>
            {buttons.map(button => {
                let gridItemClass: string = (/(C|%|\+\/-)/.test(button.label)) ? 'first-row-cell' :
                    (/(÷|x|\+|=|-)/.test(button.label)) ? 'last-col-cell' : '';
                return (
                    <div key={button.label} className={`${gridItemClass} grid-item ${button.width === 2 ? 'two-grid-cell' : ''}`}>
                        {/* <Button label={button.label} /> */}
                        {button.label}
                    </div>
                );
            })}
        </div>
    );
}
const buttons = [
    { label: 'C' }, { label: '+/-' }, { label: '%' }, { label: '÷' },
    { label: '7' }, { label: '8' }, { label: '9' }, { label: 'x' },
    { label: '4' }, { label: '5' }, { label: '6' }, { label: '-' },
    { label: '1' }, { label: '2' }, { label: '3' }, { label: '+' },
    { label: '0', width: 2 }, { label: '.' }, { label: '=' }
];