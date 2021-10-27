import css from "./FormsControls.module.css";
import {Field} from "redux-form";

/* {input, meta, ...props} - это деструктуризация, тоесть в props сейчас приходит input и meta а в них уже
нужные нам пропсы. А мы вот этой записью, достаем все что в input и meta и ставим сразу в пропсы.*/
const FormControl = ({input, meta: {touched, error}, children}) => {
    const hasError = touched && error; /* Это расшифровуется как:
        Если поле было тронуто и имеет ошибку то показать мообщение об ошибке */
    return (
        <div className={css.formControl + " " + (hasError ? css.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}

export const createField = (placeholder, name, validators, component, props = {}, text = "") => (
    <div>
        <Field placeholder={placeholder} name={name}
               validate={validators}
               component={component}
               {...props}
        />{text}
    </div>
)

