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
            owner: {id: 1, name: 'Tom Hanks'},
            status: 'Pending'
        };
        this.updateOrder = this.updateOrder.bind(this);
    }

    updateOrder(orderChanges) {
        this.setState(orderChanges);
    }

    render() {

        const owners = [{id: 1, name: 'Tom Hanks'}, {id: 2, name: 'John Doe'}]; //TODO: Fetch from API
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
        orders.push({
            id: 7,
            sku: 'TN SO 0000015',
            description: 'Magnetic contactor - 9A (5.5 kW\,7.5 HP)\, control voltage 230 Vac',
            brand: 'Schneider Electric',
            discount: 30,
            quantity: 16
        });

        return (
            <main className="order-index">
                <div className="common-block hidden-xs hidden-sm">
                    <h1><span>Orders / </span>{this.state.code}</h1>
                </div>
                <OrderNavigation order={this.state} owners={owners} updateOrder={this.updateOrder}/>
                <OrderInvoice/>
                <OrderSearchBar/>
                <OrdersTable orders={orders}/>
                <div className="common-block card">
                    <h3>Remarks</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, dignissimos quas! Aliquam amet
                        aperiam asperiores assumenda at aut autem beatae delectus deserunt ea eligendi esse est
                        explicabo fugiat impedit incidunt labore</p>
                </div>
            </main>);
    }
}

export default OrderEdit;