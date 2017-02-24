import SelectDropdown from '../common/SelectDropdown';

class OrderNavigation extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="main-content order-navigation row">
                <div className="order-navigation-options col-md-9">
                    <div className="well">
                        <div className="row">
                            <div className="col-md-6">
                                <h3>CPF Saraburi</h3>
                                <span>Highway 2, Kaeng Khoi Saraburi Thailand</span>
                                <strong className="hidden-xs">+66 087 348 79 34</strong>
                            </div>
                            <div className="col-md-6">
                                <ul>
                                    <li className="hidden-xs">
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
                    </div>
                </div>
                <div className="col-md-3">
                    <button className="btn hidden-xs">Back</button>
                    <button className="btn">Update Order</button>
                </div>
            </div>);
    }
}

export default OrderNavigation;