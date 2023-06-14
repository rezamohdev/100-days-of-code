class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = { count: 0 };
    }

    tick() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }

    componentDidMount() {
        this.counter = setInterval(() => this.tick(), 1000);
        console.log("Component did mount!");
    }

    componentDidUpdate() {
        console.log("Component did update!");

        if (this.state.count === 2) {
            ReactDOM.unmountComponentAtNode(document.getElementById('root'));
        }
    }

    componentWillUnmount() {
        console.log("Component will unmount!");
        clearInterval(this.counter);
    }

    render() {
        console.log("Component did render!");
        return (
            <h1>{this.state.count}</h1>
        );
    }
}