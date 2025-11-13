import React from 'react'
import { useContext } from 'react'
import { AppContext } from './Context'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import "./Signup.css"

export const Signup = () => {

    const schema = Yup.object(
        {
            name: Yup.string()
        .required()
        .min(2),
            email: Yup.string()
        .required()
        .email(),
            password: Yup.string()
        .required()
        .min(6)
        .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{6,}$/,
        'Password must contain uppercase, lowercase, number, and special character'
        ),
            phoneNumber: Yup.string()
    .required()
    .matches(/^[0-9]{10,15}$/, 'Phone number must be 10 to 15 digits'),
})

        const  {handleSubmit,register,formState:{errors},
    } = useForm({resolver:yupResolver(schema),
    })

            const { signup, err, user} = useContext(AppContext)
            const navigate = useNavigate()

            const Submit = (e) => {
                const checkSignup = signup(e.name,e.email,e.password,e.phoneNumber)
                if (checkSignup) {
                    navigate("/")
                }
            }

            return (
            <div>
        <form className="form-container" onSubmit={handleSubmit(Submit)}>
            <input type="text" placeholder="Name" {...register('name')} />
        {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
            <input type="text" placeholder="Email" {...register('email')} />
        {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
            <input type="password" placeholder="Password" {...register('password')} />
        {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
            <input type="text" placeholder="Phone Number" {...register('phoneNumber')} />
        {errors.phoneNumber && <p style={{ color: 'red' }}>{errors.phoneNumber.message}</p>}
            <button type="submit">Sign Up</button>
        </form>
        {err && <p style={{ color: 'red' }}>{err}</p>}
        {user && <p style={{ color: 'blue' }}>Signup successful</p>}
    </div>
            )
}


export default Signup