import React, { Component } from 'react';

import "./index.css";

class Bar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            interval: null
        }
    }

    componentDidMount() {
        let { animate, adjustHeight, i, changeRate } = this.props;
        if (animate)
            this.setState({
                interval: setInterval(() => adjustHeight(i), changeRate)
            });
    }
    componentWillReceiveProps(nextProps) {
        let { animate, i, changeRate, adjustHeight } = this.props;
        let newAnimate = nextProps.animate;
        if (animate && newAnimate) return;
        if (!newAnimate) {
            clearInterval(this.state.interval);
        } else {
            this.setState({
                interval: setInterval(() => adjustHeight(i), changeRate)
            });
        }
    }
    render() {
        let { styles, width, height } = this.props;
        return (
            <div className="bar" style={{ ...styles, width: width + "%", height: height + "%" }}>
            </div>
        )
    }

}

export default Bar;
