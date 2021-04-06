import './Button.css'
function Button({ label }: { label: string }) {
    let cellClass: string = (/(C|%|\+\/-)/.test(label)) ? 'first-row-cell' : (/(÷|x|\+|=|-)/.test(label)) ? 'last-col-cell':'';
    return (
        <button className={`${cellClass} button grid-cell ${label === '0' ? 'two-grid-cells' : ''}`}>
            {label}
        </button>
    );
}
export default Button;