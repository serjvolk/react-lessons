import React from "react";
import css from "./Login.module.css";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit} className={css.form}>
        <div>
            <Field component={Input}
                   validate={[required]}
                   name={"email"}
                   placeholder={"Email"}/>
        </div>
        <div>
            <Field component={Input}
                   validate={[required]}
                   name={"password"}
                   type={"password"}
                   placeholder={"Password"}/>
        </div>
        <div>
            <Field component={Input} name={"rememberMe"} type={"checkbox"} className={css.checkbox}/> Remember me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({
    form: 'login' // Должно быть уникальное имя
})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if(props.isAuth){
        return <Redirect to={"/profile"}/>
    }

    return <div className={css.login}>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);