import Currency from '../../common/Currency';

class OrderTable extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        let orders = [];
        for (var i = 2; i < 7; i++) {
            orders.push({
                id: i,
                sku: 'TN SO 0000015',
                description: 'Magnetic contactor - 9A (5.5 kW\,7.5 HP)\, control voltage 230 Vac',
                brand: 'Schneider Electric',
                list_price: 880,
                discount: 30,
                net_price: 660,
                quantity: 16,
                total: 500798823
            });
        }
        return (
            <div className="common-block order-table card table-responsive">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>SKU</th>
                        <th style={ {minWidth: '230px'} }>Description</th>
                        <th>Brand</th>
                        <th style={ {minWidth: '90px'} }>List Price</th>
                        <th style={ {minWidth: '80px'} }>Discount</th>
                        <th style={ {minWidth: '90px'} }>Net Price</th>
                        <th style={ {minWidth: '60px'} }>QTY</th>
                        <th style={ {minWidth: '120px'} }>Total</th>
                        <th style={ {minWidth: '95px'} }></th>
                    </tr>
                    </thead>
                    <tbody>
                    {orders.map((order) => {
                        return (
                            <tr key={order.id}>
                                <td>{order.sku}</td>
                                <td>{order.description}</td>
                                <td>{order.brand}</td>
                                <td><Currency value={order.list_price} symbol="THB "/></td>
                                <td>{order.discount}%</td>
                                <td><Currency value={order.net_price} symbol="THB "/></td>
                                <td>
                                    {order.quantity}
                                    <button>
                                        <img src={require('../../../../assets/icons/icon_edit.svg')}/>
                                    </button>
                                </td>
                                <td><Currency value={order.total} symbol="THB " precision="2"/></td>
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
            </div>);
    }
}

export default OrderTable;