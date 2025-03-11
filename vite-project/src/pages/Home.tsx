import React, { PureComponent, ReactNode } from 'react'

interface Props {}
interface State {}

class Home extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            
        }
    }

    render(): ReactNode {
        return (
            <div style={{ textAlign: 'center' }}>
                <h1>HOME</h1>
                <p>keep smiling</p>
            </div>
        )
    }
}

export default Home
