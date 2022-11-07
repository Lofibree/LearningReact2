import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Field } from 'react-final-form'
import { loginThunkCreator } from '../../redux/authReducer';
import PhotoPopupOnClick from '../common/PhotoPopup/PhotoPopupOnClick';
import s from './Login.module.css'
import {Button, Input} from './../common/FormsControls/FormsControls'
import { connect } from 'react-redux';

const Login = (props) => {

    const navigate = useNavigate();

    const login = (formData) => {
        props.loginThunkCreator(formData)
    }

    if (props.isAuth) {
        navigate('/profile')
    }

    return (
        <div className={s.authorizeWrapper}>
            <PhotoPopupOnClick>
                <img src='https://sun9-80.userapi.com/impg/Icnvqh3rg6RbQzxLKUNGE40dYPCQz6zQKf2DXQ/rOX_FwkzH-E.jpg?size=1280x960&quality=95&sign=37106ba7c1301dac7a9efd231ea08774&type=album' />
            </PhotoPopupOnClick>
            <div className={s.authorizeText}>Authorize please!!!</div>
            <LoginForm login={login}/>
        </div>
    );
};


const LoginForm = (props) => {

    const required = value => (value ? undefined : 'Required');
    const minFieldLength = min => value => value.length >= min ? undefined : 'Too short'
    const composeValidators = (...validators) => {
        return (value) => (
            validators.reduce((error, validator) => error || validator(value), undefined)
        )
    }

    return (
        <Form
            onSubmit={(values) => {
                props.login(values)
            }}
            render={renderProps => {
                const { handleSubmit } = renderProps;
                return (
                    <form onSubmit={handleSubmit} className={s.formLogin}>
                        <Field
                            name='email'
                            type='email'
                            placeholder='email'
                            validate={composeValidators(required, minFieldLength(5))}
                            component={Input}
                        />
                        <Field
                            name='password'
                            type='password'
                            validate={composeValidators(required, minFieldLength(5))}
                            placeholder='password'
                            component={Input}
                        />
                        <Button type='submit'>Login</Button>
                    </form>
                )
            }}
        >
        </Form>
    )
}


export default connect((state) => {return {isAuth: state.auth.isAuth}}, {loginThunkCreator}) (Login)