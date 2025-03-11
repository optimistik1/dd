import React, { PureComponent, ReactNode } from 'react'

interface Props {}
interface State {}

class Blog extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            
        }
    }

    render(): ReactNode {
        return (
            <div style={{ textAlign: 'center' }}>
                <h1>BLOG</h1>
                <p>i always wanted a brother</p>
            </div>
        )
    }
}

export default Blog
