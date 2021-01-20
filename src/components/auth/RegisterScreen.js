import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm';
import validator from "validator";
import { RemoveError, setError } from '../../actions/ui';
import { useDispatch, useSelector } from 'react-redux';
import { startRegisterWithEmailPassword } from "../../actions/auth";

export const RegisterScreen = () => {
    const dispatch = useDispatch();

    const {msgError} = useSelector( state => state.ui);


    const [ formValues, handleInputChange ] = useForm({
        name: 'Fredy',
        email: 'fredo@gmail.com',
        password: '123456',
        password2: '123456'
    });

    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        if( isFormValid() ){
            dispatch(startRegisterWithEmailPassword( name, email, password ));
        }
    }

    const isFormValid = () => {

        if( name.trim().length === 0 ){
            dispatch( setError (' Name is required '));
            return false;
        }else if( !validator.isEmail( email )){
            dispatch( setError (' Email is not valid ')); 
            return false;
        }else if( password2 !== password || password.length <= 5){
            dispatch( setError (' Passwords don\'t match or not long enough '));
            return false;
        }
        dispatch(RemoveError());
        return true;
    }

    return (
        <>
        <h3 className='auth__title'>Register </h3>

        <form onSubmit = { handleRegister } className="animate__animated animate__fadeIn animate__faster">

            {
                msgError &&
                <div className='auth__alert-error'>
                    {msgError}
                </div>}
            <input
                type='text'
                placeholder='Name'
                name='name'
                autoComplete='off'
                className="auth__input"
                value = { name }
                onChange = { handleInputChange }

            />
            <input
                type='text'
                placeholder='Email'
                name='email'
                autoComplete='off'
                className="auth__input"
                value = { email }
                onChange = { handleInputChange }

            />

            <input
                type='password'
                placeholder='Password'
                name='password'
                autoComplete='off'
                className="auth__input"
                value = { password }
                onChange = { handleInputChange }

            />
            <input
                type='password'
                placeholder='Confirm Password'
                name='password2'
                autoComplete='off'
                className="auth__input"
                value = { password2 }
                onChange = { handleInputChange }

            />
            

            <button 
                type="submit" 
                className = 'btn btn-primary btn-block mb-5'

            >
                Register
            </button>

            
            <Link className="link" to='/auth/login'>Already Register?</Link>
        </form>
    </>
    )
}
