import React from 'react'
import {useContext} from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from './Context'

export const Home = () => {
    const { user } = useContext(AppContext)
    if(!user){
        return(
            <div>
                <h1>
                    Welcome Visitor,kindly
                    <Link to="/signup">Sign up</Link> to have access to
                </h1>
            </div>
        )
    }

    return(
        <div>
            <h1>
                Welcome <b>{user},</b>Thank you for signing up.
            </h1>
        </div>
    )
}