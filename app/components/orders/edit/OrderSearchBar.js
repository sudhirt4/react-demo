class OrderSearchBar extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            isTyping: false
        };

        this.focusIn = this.focusIn.bind(this);
        this.focusOut = this.focusOut.bind(this);
        this.keyDown = this.keyDown.bind(this);
    }

    openOverlay() {
        if (document && document.body) {
            let orig = document.body.className;
            document.body.className = orig + (orig ? ' ' : '') + 'overlay-active';
        }
    }

    closeOverlay() {
        if (document && document.body) {
            document.body.className = document.body.className.replace(/ ?overlay-active/, '');
        }
    }

    focusIn(event) {
        event.preventDefault();
        this.openOverlay();
    }

    focusOut(event) {
        event.preventDefault();
        this.closeOverlay();
    }

    keyDown(event) {
        if (event.keyCode === 27) {
            event.preventDefault();
            this.searchInput.blur();
            this.closeOverlay();
        }
        if(!this.state.isTyping) {
            this.setState({
                isTyping: true
            });
        }
        if(this.searchInputDebounce) {
            clearInterval(this.searchInputDebounce);
        }
        this.searchInputDebounce = setTimeout(()=> {
            this.setState({
                isTyping: false
            })
        }, 500);
    }

    render() {
        return (
            <div className={"common-block order-search-bar card " + (this.state.isTyping ? 'is-typing' : '')}>
                <button>
                    <img src={require('../../../../assets/icons/icon_plus.svg')}/>
                </button>
                <div className="pulsate"></div>
                <input type="text" ref={(input)=> {this.searchInput = input;}}
                       placeholder="Add Products"
                       onFocus={this.focusIn}
                       onBlur={this.focusOut}
                       onKeyDown={this.keyDown}/>
            </div>);
    }
}

export default OrderSearchBar;