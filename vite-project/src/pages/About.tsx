import React, { PureComponent, ReactNode } from 'react'

interface Props {}
interface State {}

class About extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            
        }
    }

    render(): ReactNode {
        return (
            <div style={{ textAlign: 'center' }}>
                <h1>ABOUT</h1>
                <p>bad kids never die</p>
            </div>
        )
    }
}

export default About
