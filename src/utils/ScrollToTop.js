import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'

class ScrollToTop extends Component {
    componentDidUpdate(prevPops) {
        if (this.props.location !== prevPops.location) {
            window.scrollTo(0, 0)
        }
    }
    render() {
        return this.props.children;
    }
}

export default withRouter(ScrollToTop)