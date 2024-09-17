import Form from "../Form/Form";
import Image from "../Image/Image";
import '../../styles/container.scss';

const ResetContainer = () => {
    return (
        <div className="container">
            <Form  msg="Reset your" title="password" email={true} password={false} forgotPassword={false} btnName="Reset Password"/>
            <Image />
        </div>
    )
}

export default ResetContainer;