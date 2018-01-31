### React-Pulser

##### Description
React component which displays an animated frequency graph. Adds a nice touch to audio playback UI's.

- `npm install --save react-pulser`

```javascript
import React, { Component } from 'react';
import Pulser from "react-pulser";
import "./index.css";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playing: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        this.setState(prevState => {
            return {
                playing: !prevState.playing
            }
        })
    }
    render() {
        let { playing } = this.state
        return (
            <div className="app-wrapper">
                <button onClick={this.handleClick} >Play/Pause</button>
                <Pulser animate={playing} ></Pulser>
            </div>
        )
    }
}
```
![react-pulser demo](demo.png "demo screenshot of react-pulser")
- NOTE: The `<Pulser>` component fills its parent container by default. Make sure it has a specified height and has position set to `relative` or it may not display. See the *Props* section below for more information on how to use custom styling.
---
#### Props:

**Name** | **Type** | **Default** | **Description** 
----- | ------- | ----- | -------
`animate` | `boolean` | `false` | Toggles bar graph animation.
`pulserStyles` | `object` | `{}` | Style object for the outer container. Use this if you want to override the default CSS styling. You can also refer to the selector `.pulser-wrapper` in CSS.
`barStyles` | `object` | `{}` | Style object for individual bars. Use this if you want to override the default CSS styling. You can also refer to the selector `.bar` in CSS.
`options` | `object` | {} | The `options` prop is an object which contains several extra configuration settings. See below.

##### `Options` prop
```javascript
let options = {
    barQuant: 7,
    minHeight: 15,
    changeRate: 5
}
<Pulser animate options={options}>
```
**Name** | **Type** | **Default** | **Description** 
----- | ------- | ----- | -------
`barQuant` | `number` | `5` | Specifies number of bars to display.
`minHeight` | `number` | `30` | Specifies the minimum initial height of each bar in terms of the percentage of its parent container. Must be between 0 and 30.
`changeRate` | `number` | `15` | Specifies the number in milliseconds for how fast to animate.

