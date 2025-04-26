import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Logo, FormRow } from "../components";

const Register = () => {
  return (
    <Wrapper>
      <form className='form'>
        <Logo />
        <h4>register</h4>

        <FormRow type='text' name='name' defaultValue='sakib' />
        <FormRow
          type='text'
          name='lastName'
          labelText='last name'
          defaultValue='khan'
        />
        <FormRow type='text' name='location' defaultValue='earth' />
        <FormRow type='email' name='email' defaultValue='sakib@gmail.com' />
        <FormRow type='password' name='password' defaultValue='sakibpass' />

        <button type='submit' className='btn btn-block'>
          submit
        </button>
        <p>
          Already a member?
          <Link to='/login' className='member-btn'>
            login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
