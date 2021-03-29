import React, {useState} from 'react';
import { useSpring, animated } from 'react-spring';
import './SignUp.css'

const SignUp = () =>  {

    const [registerationFormStatus, setRegistationFormStatus] = useState(false);

    const loginProps = useSpring({
        left: registerationFormStatus ?  -500 : 0
    });
    const registerProps = useSpring({
        left: registerationFormStatus ?  0 : 500
    });

    const loginBtnProps = useSpring({ borderBottom: registerationFormStatus ? 'solid 0px transparent' : 'solid 2px #1059FF'});
    const registerBtnProps = useSpring({ borderBottom: registerationFormStatus ? 'solid 2px #1059FF' : 'solid 0px transparent'});


    const registerClicked = () => {
        setRegistationFormStatus(true);
    }

    const loginClicked = () => {
        setRegistationFormStatus(false);
    }

    return (
        <body>

            <div className={'login-register-wrapper'}>
                <div className={'nav-buttons'}>
                    <animated.button
                        onClick={loginClicked} id={'loginBtn'} class={'active'} className={'button-log'} style={loginBtnProps}>Login</animated.button>
                    <animated.button onClick={registerClicked} id={'registerBtn'} className={"button-log"} style={registerBtnProps}>Register</animated.button>
                </div>
                <div className={'form-group'}>
                    <animated.form action={''} id={'loginform'} style={loginProps}><LoginForm /></animated.form>
                 <animated.form action={''} id={'registerform'} style={registerProps}><RegisterForm /></animated.form>
                </div>
                <animated.div className={'forgot-panel'} style={loginProps}>

                    <a href={"#"}>Forgot your password</a>
                </animated.div>
            </div>
        </body>
    )
}

const LoginForm = () => {
    return (
      <React.Fragment>
          <label form={'username'}>USERNAME</label>
          <input type="text" id={'username'} required/>
          <label form={'password'}>PASSWORD</label>
          <input type="text" id={'password'} required/>
          <input type="submit" value={'submit'} className={'submit'}/>
      </React.Fragment>
    );
}

const RegisterForm = () => {
    return (
        <React.Fragment>
            <label form={'fullname'}>Full Name</label>
            <input type="text" id={'fullname'}/>
            <label form={'email'}>Email</label>
            <input type="text" id={'email'}/>
            <label form={"password"}>Password</label>
            <input type="password" id={"password"}/>
            <label form={"confirmpassword"}>Confirm Password</label>
            <input type="password" id={"confirmpassword"}/>
            <input type="submit" value={"submit"} class={"submit"}/>
        </React.Fragment>
    )
}

/*const ForgotPasswordForm = () => {
    return (
        <React.Fragment>
            <label form={'email'}>Email</label>
            <input type="text" id={'email'}/>
            <input type="submit" value={"submit"} class={"submit"}/>
        </React.Fragment>
    )
}
*/
export default SignUp;
