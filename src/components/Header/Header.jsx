/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './style/index.scss'

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
            <div className="container-main">
                <h2>{title}</h2>
            </div>
            <div className="container-extra">
                {props.children}
            </div>
        </div>
    );
}

export default Header;