import { Component } from "react";

class ClassBasedComponent extends Component {
    state = {
        showText: false,
        changeColor: false,
    };

    // constructor(props) {
    //     super(props);

    //     this.state = false;
    // }

    handleClick = () => {
        // not recommended way
        // this.state.showText = !this.state.showText

        const { showText, changeColor } = this.state;

        this.setState({
            showText: !showText,
            changeColor: !changeColor,
        });
    };

    // ComponentDidMount
    // componentDidMount() {
    //     console.log("this is first time page loading ");
    //     this.setState({
    //         showText: !this.state.showText,
    //         changeColor: !this.state.changeColor,
    //     });
    // }

    // ComponentDidUpdate
    componentDidMount(prevPros, prevState) {
        console.log("Prev Props", prevPros);
        console.log("Prev State", prevState);
    }


    // ComponentWillUnmount

    render() {
        const { showText, changeColor } = this.state;
        return (
            <div className="">
                {showText ? (
                    <h4 style={{ color: changeColor ? "red" : "black" }}>
                        Class Based Component
                    </h4>
                ) : null}
                <button onClick={this.handleClick}>Toggle Text</button>
            </div>
        );
    }
}

export default ClassBasedComponent;
