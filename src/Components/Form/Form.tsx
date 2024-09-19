import * as React from 'react'
import '../../styles/Login.scss'
import axios from 'axios';

interface Props {
    msg: string,
    title: string,
    email: boolean,
    password: boolean,
    forgotPassword: boolean,
    btnName: string,
}

const Form:  React.FC<Props> = (props) => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = async () => {
        try {
          const response = await axios.post('http://localhost:9000/api/login', {
            email,
            password,
          });
          console.log(response);
        } catch (error) {
            console.log('Error while logging in');
        }
      };
    
    return(
        <div className='login'>

            <div className='message'>
                <h1>{props.msg}</h1>
                <h1>{props.title}</h1>
            </div>

            <div className='loginForm'>
                {props.email && <input id='email' type={"email"} placeholder='E Mail' value={email} onChange={(e) => {setEmail(e.target.value)}}/>}
                {props.password && <input id='password' type={"password"} placeholder='Password' value={password} onChange={(e) => {setPassword(e.target.value)}}/>}
            </div>

            {props.forgotPassword && <div className='forgotPassword'>
                <p><a style={{color: "black"}} href='/resetPassword'>Forgot password?</a></p>
            </div>}

            <div className='loginBtn'>
                <button onClick={handleSubmit}>{props.btnName}</button>
            </div>
            
        </div>
    )
}

export default Form;