import { Link, Form, redirect, useNavigation } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Logo, FormRow } from "../components";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

// <============================> Action <============================>

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post("/auth/register", data);
    toast.success("Registration successful");
    return redirect("/login");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

// <============================>  <============================>

const Register = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <Form method='post' className='form'>
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

        <button type='submit' className='btn btn-block' disabled={isSubmitting}>
          {isSubmitting ? "submitting..." : "submit"}
        </button>
        <p>
          Already a member?
          <Link to='/login' className='member-btn'>
            login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Register;
