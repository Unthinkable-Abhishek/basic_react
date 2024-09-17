import Image from "../Image/Image";
import Form from "../Form/Form";
import '../../styles/container.scss';

const LoginContainer = () => {
    return (
        <div className="container">
            <Form msg="Welcome to" title="facebook" email={true} password={true} forgotPassword={true} btnName="Login" />
            <Image />
        </div>
    )
}

export default LoginContainer;