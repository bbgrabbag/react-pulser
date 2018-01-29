import React, { Component } from 'react';

import "./index.css";

import Bar from "./Bar";

import { setInitialValues } from "./utils";

export default class Pulser extends Component {
    constructor(props) {
        super(props);
        let { options } = props;
        let defaults = {
            changeRate: options.changeRate > 15 ? options.changeRate : 20,
            maxHeight: 75,
            minHeight: options.minHeight < 31 ? options.minHeight : 30,
            barQuant: options.barQuant < 12 ? options.barQuant : 5
        }
        let initialValues = setInitialValues(defaults);
        this.state = {
            initialValues: initialValues,
            defaults
        }
        this.adjustHeight = this.adjustHeight.bind(this);
    }

    

    adjustHeight(i) {
        this.setState(prevState => {
            let { defaults } = prevState;
            let prevBar = prevState.initialValues[i];
            let newBar = { ...prevBar }
            if (prevBar.direction) {
                newBar.height = prevBar.height + 1;
                if (newBar.height === defaults.maxHeight) {
                    newBar.direction = false;
                }
            } else {
                newBar.height = prevBar.height - 1;
                if (newBar.height === defaults.minHeight) {
                    newBar.direction = true;
                }
            }
            return {
                initialValues: prevState.initialValues.map((bar, i) => {
                    if (i === newBar.i)
                        return newBar;
                    else
                        return bar;
                })
            }
        });
    }

    render() {
        let { barStyles, pulserStyles, animate } = this.props;
        let { initialValues, defaults } = this.state;
        const bars = initialValues.map((bar, i) => <Bar key={i} styles={barStyles}{...bar} animate={animate}adjustHeight={this.adjustHeight}changeRate={defaults.changeRate}></Bar>)
        return (
            <div className="pulser-wrapper" style={pulserStyles}>
                {bars}
            </div>
        )
    }
}