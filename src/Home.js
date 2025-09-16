import React from 'react'
import {useContext} from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
    const { user } = useContext()
    if(!user){
        return(
            <div>
                <h1>
                    Welcome Visitor,kindly
                    <Link to=""></Link>
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