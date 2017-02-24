class Header extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
          searchActive: false
        };

        this.toggleSearch = this.toggleSearch.bind(this);
    }

    toggleSearch(event) {
        event.preventDefault();
        this.setState(prevState => ({
            searchActive: !prevState.searchActive
        }));
        this.searchInput.focus();
    }

    render() {
        return (
            <div className="header">
                <div className={"header-search " + (this.state.searchActive ? 'search-active' : '')}>
                    <a href="#" className="header-back-button">
                        <img src={require('../../../assets/icons/arrow-purple.svg')}/>
                    </a>
                    <a href="#" className="header-search-icon" onClick={this.toggleSearch}>
                        <img src={require('../../../assets/icons/magnifying-glass.svg')}/>
                    </a>
                    <span>Edit ORD07070707</span>
                    <input type="text" placeholder="Search here" ref={(input)=> {this.searchInput = input;}}/>
                </div>
                <div className="header-options hidden-xs hidden-sm">
                    <ul>
                        <li><span>Hello, Somchai</span></li>
                        <li>Twin Types Corporation</li>
                    </ul>
                    <button>
                        <img src={require('../../../assets/icons/arrow-grey.svg')}/>
                    </button>
                </div>
            </div>)
    }
}

export default Header;