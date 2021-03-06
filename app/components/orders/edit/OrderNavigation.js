import SelectDropdown from '../../utils/SelectDropdown';

class OrderNavigation extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            type: {
                options: ['Retailers', 'Type 2', 'Type 3'],
                selected: this.props.order.type
            },
            owner: {
                options: this.props.owners,
                selected: this.props.order.owner
            },
            status: {
                options: ['Pending', 'Resolved'],
                selected: this.props.order.status
            }
        };

        this.dropdownChange = this.dropdownChange.bind(this);
        this.redirectBack = this.redirectBack.bind(this);
        this.updateOrder = this.updateOrder.bind(this);
    }

    dropdownChange(stateKey) {
        return (selectedOption) => {
            this.setState((prevState) => ({
                [stateKey]: {
                    selected: selectedOption,
                    options: prevState[stateKey]['options']
                }
            }));
        }
    }

    redirectBack(event) {
        event.preventDefault();
        //TODO:
    }

    updateOrder(event) {
        event.preventDefault();
        this.props.updateOrder({
            type: this.state.type.selected,
            owner: this.state.owner.selected,
            status: this.state.status.selected
        });
    }

    render() {
        const customerInfo = this.props.order.customerInfo;
        return (
            <div className="common-block order-nav">
                <div className="order-nav-options">
                    <div className="order-nav-info">
                        <h2>{customerInfo.name}</h2>
                        <ul>
                            <li>
                                {customerInfo.address}
                            </li>
                            <li className="hidden-xs">
                                {customerInfo.phone}
                            </li>
                        </ul>
                    </div>
                    <ul className="order-nav-dropdowns">
                        <li className="hidden-xs">
                            <span>Type</span>
                            <SelectDropdown onChange={this.dropdownChange('type')}
                                            options={this.state.type.options}
                                            selected={this.state.type.selected}/>
                        </li>
                        <li>
                            <span>Owned By</span>
                            <SelectDropdown onChange={this.dropdownChange('owner')}
                                            options={this.state.owner.options}
                                            selected={this.state.owner.selected}
                                            optionKey={'name'}/>
                        </li>
                        <li>
                            <span>Status</span>
                            <SelectDropdown onChange={this.dropdownChange('status')}
                                            options={this.state.status.options}
                                            selected={this.state.status.selected}/>
                        </li>
                    </ul>
                </div>
                <div className="order-nav-actions">
                    <button className="btn btn-no-bg hidden-xs"
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