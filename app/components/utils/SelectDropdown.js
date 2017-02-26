class SelectDropdown extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            selected: this.props.selected || this.props.placeholder || 'Select any'
        };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(option) {
        return (event) => {
            event.preventDefault();
            this.setState({
                selected: option
            });
            this.props.onChange(option);
        };
    }

    render() {
        const key = this.props.optionKey;
        const options = this.props.options || [];
        const selectedOption = key ? this.state.selected[key] : this.state.selected;
        return (
            <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
                    {selectedOption}
                    <span className="caret"></span></button>
                <ul className="dropdown-menu">
                    {options.map((option) => {
                        let optionValue = key ? option[key] : option;
                        return (
                            <li key={option.id ? option.id : optionValue}>
                                <a href="#" onClick={this.handleOnChange(option)}>{optionValue}</a>
                            </li>)
                    })}
                </ul>
            </div>);
    }
}

export default SelectDropdown;