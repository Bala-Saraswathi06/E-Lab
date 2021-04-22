import React from 'react'
import { Route , Switch} from 'react-router-dom'
import Main from '../pages/Main'

function Routes() {
    return (
        <div>
            <Switch>
                <Route path='/' > <Main /></Route>
            </Switch>
        </div>
    )
}

export default Routes
