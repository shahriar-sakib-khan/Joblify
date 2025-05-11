import { Link, Form, redirect } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Logo, FormRow } from "../components";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import { useNavigation } from "react-router-dom";

// <============================> Action <============================>

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/auth/login", data);
    toast.success("Login successful");
    return redirect("/dashboard");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

// <============================>  <============================>

const Login = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <Form method='post' className='form'>
        <Logo />
        <h4>login</h4>

        <FormRow type='email' name='email' defaultValue='sakib@gmail.com' />
        <FormRow type='password' name='password' defaultValue='sakib123' />

        <button type='submit' className='btn btn-block' disabled={isSubmitting}>
          {isSubmitting ? "submitting..." : "submit"}
        </button>
        <p>
          Not a member yet?
          <Link to='/register' className='member-btn'>
            register
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Login;
