class OrderSearchBar extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="common-block order-search-bar card">
                <button>
                    <img src={require('../../../../assets/icons/icon_plus.svg')}/>
                </button>
                <input/>
            </div>);
    }
}

export default OrderSearchBar;