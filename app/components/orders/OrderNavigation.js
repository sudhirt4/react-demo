import SelectDropdown from '../common/SelectDropdown';

class OrderNavigation extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            order: {}
        };
        this.dropdownChange = this.dropdownChange.bind(this);
        this.redirectBack = this.redirectBack.bind(this);
        this.updateOrder = this.updateOrder.bind(this);
    }

    dropdownChange(stateKey) {
        return (selectedOption) => {
            this.setState({
                [stateKey]: selectedOption
            });
        }
    }

    redirectBack(event) {
        event.preventDefault();
        //TODO:
    }

    updateOrder(event) {
        event.preventDefault();
        //TODO
    }

    render() {
        const customerInfo = this.props.order.customerInfo;
        const types = {
            options: ['Retailers', 'Type 2', 'Type 3'],
            selected: this.props.order.type
        };
        const owners = {
            options: this.props.owners,
            selected: this.props.order.owner
        };
        const statuses = {
            options: ['Pending', 'Resolved'],
            selected: this.props.order.status
        };
        return (
            <div className="main-content order-navigation">
                <div className="order-navigation-options">
                    <div className="order-info">
                        <h2>{customerInfo.name}</h2>
                        <ul>
                            <li>
                                {customerInfo.address}
                            </li>
                            <li className="hidden-xs hidden-sm">
                                {customerInfo.phone}
                            </li>
                        </ul>
                    </div>
                    <div className="order-dropdowns clearfix">
                        <ul>
                            <li className="hidden-xs hidden-sm">
                                <span>Type</span>
                                <SelectDropdown onChange={this.dropdownChange('type')}
                                                options={types.options}
                                                selected={types.selected}/>
                            </li>
                            <li>
                                <span>Owned By</span>
                                <SelectDropdown onChange={this.dropdownChange('owner')}
                                                options={owners.options}
                                                selected={owners.selected}
                                                optionKey={'name'}/>
                            </li>
                            <li>
                                <span>Status</span>
                                <SelectDropdown onChange={this.dropdownChange('status')}
                                                options={statuses.options}
                                                selected={statuses.selected}/>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="order-actions">
                    <button className="btn btn-no-bg hidden-xs hidden-sm"
                            onClick={this.redirectBack}>
                        Back
                    </button>
                    <button className="btn"
                            onClick={this.updateOrder}>
                        Update Order
                    </button>
                </div>
            </div>);
    }
}

export default OrderNavigation;