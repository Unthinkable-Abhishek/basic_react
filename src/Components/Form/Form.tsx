import '../../styles/Login.scss'

interface Props {
    msg: string,
    title: string,
    email: boolean,
    password: boolean,
    forgotPassword: boolean,
    btnName: string
}

const Form:  React.FC<Props> = (props) => {
    
    return(
        <div className='login'>

            <div className='message'>
                <h1>{props.msg}</h1>
                <h1>{props.title}</h1>
            </div>

            <div className='loginForm'>
                {props.email && <input id='email' type={"email"} placeholder='E Mail'/>}
                {props.password && <input id='password' type={"password"} placeholder='Password'/>}
            </div>

            {props.forgotPassword && <div className='forgotPassword'>
                <p>Forgot password?</p>
            </div>}

            <div className='loginBtn'>
                <button>{props.btnName}</button>
            </div>
            
        </div>
    )
}

export default Form;