import SelectDropdown from '../common/SelectDropdown';

class OrderNavigation extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="order-navigation main-content clearfix row">
                <div className="order-navigation-options pull-left well clearfix col-md-9">
                    <div className="pull-left">
                        <h3>CPF Saraburi</h3>
                        <span>Highway 2, Kaeng Khoi Saraburi Thailand</span>
                        <strong>+66 087 348 79 34</strong>
                    </div>
                    <div className="pull-right">
                        <ul>
                            <li>
                                <span>Type</span>
                                <SelectDropdown/>
                            </li>
                            <li>
                                <span>Owned By</span>
                                <SelectDropdown/>
                            </li>
                            <li>
                                <span>Status</span>
                                <SelectDropdown/>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="pull-right  col-md-3">
                    <button className="btn">Back</button>
                    <button className="btn">Update Order</button>
                </div>
            </div>);
    }
}

export default OrderNavigation;