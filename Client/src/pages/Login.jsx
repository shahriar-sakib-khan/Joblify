
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Logo, FormRow } from "../components";

const Login = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo/>
        <h4>login</h4>

        <FormRow type='email' name='email' defaultValue='sakib@gmail.com' />
        <FormRow type='password' name='password' defaultValue='sakibpass' />

        <button type='submit' className='btn btn-block'>
          submit
        </button>
        <p>
          Not a member yet?
          <Link to='/register' className='member-btn'>
          register
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};
export default Login;