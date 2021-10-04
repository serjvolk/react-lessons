import React from "react";
import css from "./Login.module.css";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit} className={css.form}>
        <div>
            <Field component={Input}
                   validate={[required]}
                   name={"login"}
                   placeholder={"Login"}/>
        </div>
        <div>
            <Field component={Input}
                   validate={[required]}
                   name={"password"}
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
        console.log(formData);
    }

    return <div className={css.login}>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login;