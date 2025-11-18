/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './style/index.scss'

import biohazard from '/icons/biohazard/solid.svg'

const containerTitle = {text: "Unnamed Container", display: false}

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titleText: "Unnamed Container",
            titleVisible: false
        };
    }
    toggleTitleVisible = () => {
        const curr = this.state.titleVisible;
        this.setState({ titleVisible: !curr});
    }
    render() {

    }
}

function Header(props) {
    const {title, ...rest} = props;
    const [orientation, setOrientation] = useState(0)

    return(
        <div className="container">
            <div className="item">
                <h2 className='label'>{title}</h2>
            </div>
            <div className="item">
                <h1 className='label'>{"Balls"}</h1>
            </div>
        </div>
    );
}

export default Header;