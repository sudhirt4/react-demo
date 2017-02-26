import Currency from '../../utils/Currency';

class OrderTable extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    renderCurrency(value) {
        return value ? (<Currency value={value} symbol="THB "/>) : <a href="#" className="warning">Set Price</a>
    }

    render() {
        const orders = this.props.orders;
        return (
            <div className="common-block order-table">
                <div className="card table-responsive">
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th style={ {minWidth: '124px'}}>SKU</th>
                            <th style={ {minWidth: '230px'} }>Description</th>
                            <th>Brand</th>
                            <th style={ {minWidth: '90px'} }>List Price</th>
                            <th style={ {minWidth: '80px'} }>Discount</th>
                            <th style={ {minWidth: '90px'} }>Net Price</th>
                            <th style={ {minWidth: '60px'} }>QTY</th>
                            <th style={ {minWidth: '132px'} }>Total</th>
                            <th style={ {minWidth: '110px'} }></th>
                        </tr>
                        </thead>
                        <tbody>
                        {orders.map((order) => {
                            return (
                                <tr key={order.id}>
                                    <td>{order.sku}</td>
                                    <td>{order.description}</td>
                                    <td>{order.brand}</td>
                                    <td>{ this.renderCurrency(order.list_price) }</td>
                                    <td>{order.discount}%</td>
                                    <td>{ this.renderCurrency(order.net_price) }</td>
                                    <td>
                                        {order.quantity}
                                        <button>
                                            <img src={require('../../../../assets/icons/icon_edit.svg')}/>
                                        </button>
                                    </td>
                                    <td>{ this.renderCurrency(order.total) }</td>
                                    <td><a href="#">Remove item</a></td>
                                </tr>)
                        })}
                        {orders.length === 0 &&
                        <tr>
                            <td colspan="8">No records found</td>
                        </tr>
                        }
                        </tbody>
                    </table>
                </div>
            </div>);
    }
}

export default OrderTable;