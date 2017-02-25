import accounting from 'accounting';

const Currency = React.createClass({
    render: function () {
        return <span>{accounting.formatMoney(this.props.value, {symbol: this.props.symbol, precision: this.props.precision || 0})}</span>;
    }
});

export default Currency;