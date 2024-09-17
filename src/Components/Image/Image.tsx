import FacebookImg from '../../facebook.jpg'
import '../../styles/image.scss'

function Image() {
    return (
        <div className='image'>
            <img src={FacebookImg} width={'100%'} height={'100%'} />
        </div>
    )
}

export default Image;