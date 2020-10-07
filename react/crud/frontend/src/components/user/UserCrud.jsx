import React, { Component } from 'react'
import Main from '../template/Main'

const headerProps = {
    icon: 'users',
    title: 'Users',
    subtitle: 'Users Registration: Include, List, Change and Delete!'    
}

export default class UserCrud extends Component {
    render() {
        return (
            <Main {...headerProps}>
                Users Registration
            </Main>
        )
    }
}