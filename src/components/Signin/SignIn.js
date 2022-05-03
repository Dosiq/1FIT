
import './SignIn.css';
import fit_icon from './1fit.png'
import back from './back.jpg'
import back1 from './back.jpg'

function SignIn() {
  return (
    <div className='SignIn'>
        <div className='SignIn_conteiner'>
          <div className='SignIn_conteiner_signin'>
            <div className='SignIn_conteiner_signin_icon'><img src={fit_icon} className='SignIn_conteiner_signin_icon'/></div>
            <div className='SignIn_conteiner_signin_form'></div>
            <div className='SignIn_conteiner_signin'></div>
          </div>
        </div>
    </div>
  );
}

export default SignIn;
