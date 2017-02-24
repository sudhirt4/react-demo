import OrderNavigation from './OrderNavigation';
import OrderSearchBar from  './OrderSearchBar';
import OrdersTable from './OrderTable';
import OrderInvoice from './OrderInvoice';

class OrdersIndex extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="main order-index">
                <div className="main-content row hidden-xs hidden-sm">
                    <div className="col-md-12">
                        <h2>Orders/<span>TN XXXXXXXX</span></h2>
                    </div>
                </div>
                <OrderNavigation/>
                <OrderInvoice/>
                <OrderSearchBar/>
                <OrdersTable/>
                <div className="main-content">
                    <span>Remarks</span>
                    <div className="well">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, consequatur
                            consequuntur distinctio inventore ipsa labore magnam magni minima porro veritatis?</p>
                    </div>
                </div>
            </div>);
    }
}

export default OrdersIndex;