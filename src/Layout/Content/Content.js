import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import { connect } from 'react-redux'

import routes from '../../routes/routes'

class Content extends Component {
    render() {
        // const { auths } = this.props
        // const filterRoutes = routes(auths)
        return (
            <Switch>
                {routes().map((item, index) => {
                    return (
                        <Route
                            exact
                            //strict
                            path={item.path}
                            component={item.component}
                            key={index}
                        />
                    )
                })}
                <Redirect to="/404" />
            </Switch>
        )
    }
}
const mapStateToProps = state => {
    return {
        router: state.router,
    }
}
const mapDispatchToProps = {}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Content)
