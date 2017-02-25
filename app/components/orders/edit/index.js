import OrderNavigation from './OrderNavigation';
import OrderSearchBar from  './OrderSearchBar';
import OrdersTable from './OrderTable';
import OrderInvoice from './OrderInvoice';

class OrderEdit extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            id: 1,
            orders: [],
            code: 'TN SO 000015',
            customerInfo: {
                name: 'CPF Saraburi',
                address: 'Highway 2, Kaeng Khoi Saraburi Thailand',
                phone: '+66 087 348 79 34'
            },
            type: 'Retailers',
            owner: {id: 1, name:'Tom Hanks'},
            status: 'Pending'
        };
        this.updateOrder = this.updateOrder.bind(this);
    }

    updateOrder(orderChanges) {
        this.setState(orderChanges);
    }

    render() {
        const owners = [{id: 1, name: 'Tom Hanks'}, {id: 2, name: 'John Doe'}]; //TODO: Fetch from API
        return (
            <main className="order-index">
                <div className="common-block hidden-xs hidden-sm">
                    <h1><span>Orders / </span>{this.state.code}</h1>
                </div>
                <OrderNavigation order={this.state} owners={owners} updateOrder={this.updateOrder}/>
                <OrderInvoice/>
                <OrderSearchBar/>
                <OrdersTable/>
                <h3>Remarks</h3>
                <div className="common-block card">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, consequatur
                        consequuntur distinctio inventore ipsa labore magnam magni minima porro veritatis?</p>
                </div>
            </main>);
    }
}

export default OrderEdit;