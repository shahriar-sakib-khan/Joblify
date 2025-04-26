import { Link, useRouteError } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";
import img404 from "../assets/images/not-found.svg";
const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img404} alt='not found' />
          <h3>Ohh! page not found</h3>
          <p>We can't seem to find the page you're looking for</p>
          <Link to='/dashboard'>Return to dashboard</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h1>Something went wrong!</h1>
    </Wrapper>
  );
};
export default Error;
