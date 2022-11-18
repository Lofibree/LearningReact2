import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Field } from 'react-final-form'
import { loginThunkCreator } from '../../redux/authReducer';
import s from './Login.module.css'
import {Button, Input} from './../common/FormsControls/FormsControls'
import { connect } from 'react-redux';
import { required, minFieldLength, composeValidators } from '../Utils/Validators/validators';
import { CreateField } from './../common/FormsControls/FormsControls';


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
            <img src='https://sun9-80.userapi.com/impg/Icnvqh3rg6RbQzxLKUNGE40dYPCQz6zQKf2DXQ/rOX_FwkzH-E.jpg?size=1280x960&quality=95&sign=37106ba7c1301dac7a9efd231ea08774&type=album'
                className={s.img}
            />
            <div className={s.authorizeText}>Authorize please!!!</div>
            <LoginForm login={login} />
        </div>
    );
};

  
const LoginForm = (props) => {
    return (
        <Form
            onSubmit={(values) => {
                props.login(values)
            }}
            render={renderProps => {
                const { handleSubmit } = renderProps;
                return (
                    <form onSubmit={handleSubmit} className={s.formLogin}>
                        <div className={s.formTitle}>Login</div>
                        <div className={s.fieldTitle}>Username</div>
                        <div>
                            {CreateField('email', 'email', 'email', composeValidators(required, minFieldLength(5)), Input)}
                        </div>
                        <div className={s.fieldTitle}>Password</div>
                        <div>
                            {CreateField('password', 'password', 'password', composeValidators(required, minFieldLength(5)), Input)}
                        </div>
                        <Button type='submit'>Login</Button>
                    </form>
                )
            }}
        >
        </Form>
    )
}


export default connect((state) => {return {isAuth: state.auth.isAuth}}, {loginThunkCreator}) (Login)