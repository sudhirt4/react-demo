import OrderNavigation from './OrderNavigation';
import OrderSearchBar from  './OrderSearchBar';
import OrdersTable from './OrderTable';

class OrdersIndex extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="order-index main">
                <div className="main-content row">
                    <h2>Orders/<span>TN XXXXXXXX</span></h2>
                </div>
                <OrderNavigation/>
                <OrderSearchBar/>
                <OrdersTable/>
                <div className="main-content row">
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