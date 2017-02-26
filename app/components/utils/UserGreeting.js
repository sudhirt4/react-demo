const UserGreeting = React.createClass({
    render: function () {
        return (
            <ul className="user-greeting">
                <li>Hello, {this.props.user.name}</li>
                <li>{this.props.user.organization}</li>
            </ul>);
    }
});

export default UserGreeting;