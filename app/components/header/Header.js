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
        setTimeout(()=> {
            this.searchInput.focus();
        }, 50);
    }

    render() {
        return (
            <header>
                <form className={"header-search " + (this.state.searchActive ? 'search-active' : '')}>
                    <a href="#" className="header-back-button">
                        <img src={require('../../../assets/icons/arrow-purple.svg')}/>
                    </a>
                    <button type="submit" href="#" className="header-search-icon" onClick={this.toggleSearch}>
                        <img src={require('../../../assets/icons/magnifying-glass.svg')}/>
                    </button>
                    <span>Edit ORD07070707</span>
                    <input type="text" placeholder="Search here" ref={(input)=> {this.searchInput = input;}}/>
                </form>
                <div className="header-options hidden-xs hidden-sm">
                    <ul>
                        <li><span>Hello, Somchai</span></li>
                        <li>Twin Types Corporation</li>
                    </ul>
                    <button>
                        <img src={require('../../../assets/icons/arrow-grey.svg')}/>
                    </button>
                </div>
            </header>)
    }
}

export default Header;