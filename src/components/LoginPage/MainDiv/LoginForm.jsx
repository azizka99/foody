import {Formik, Form, Field, ErrorMessage} from "formik";
import {FormattedMessage, useIntl} from "react-intl";


function LoginForm(props) {
    const intl = useIntl();
    const validateFunc = values =>{
        const errors = {};
        if(!values.username?.trim()){
            errors.username = intl.formatMessage({id:'loginPage_Username_Empty_ErrorMessage'});
        }else if(values.username?.trim().length<3 || values.username?.trim().length>50){
            errors.username = intl.formatMessage({id:'loginPage_Username_Validate_ErrorMessage'});
        }

        if(!values.password){
            errors.password = intl.formatMessage({id: 'loginPage_Password_Empty_ErrorMessage'});
        }else if(values.password?.length <8 || values.password?.length > 50){
            errors.password = intl.formatMessage({id:"loginPage_Password_Validate_ErrorMessage"});
        }
        return errors;
    };

    const submitFunc = values =>{
        console.log('submitted', values)
    }

    return (
        <Formik initialValues={{username:'', password:''}} validate={validateFunc} onSubmit={submitFunc}>
            <Form >
                <Field name={'username'} type={'text'} placeholder={intl.formatMessage({id:'loginPage_Username'})} />
                <ErrorMessage name={'username'}/>
                <Field name={'password'} type={'password'}  placeholder={intl.formatMessage({id:'loginPage_Password'})}/>
                <ErrorMessage name={'password'}/>
                <button type={"submit"}><FormattedMessage id={'loginPage_Button'}/></button>
            </Form>
        </Formik>
    );
}

export default LoginForm;