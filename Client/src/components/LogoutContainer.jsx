import { FaUserCircle, FaCaretDown } from "react-icons/fa";
import { useDashboardContext } from "../pages/DashboardLayout";
import Wrapper from "../assets/wrappers/LogoutContainer";
import { useState } from "react";

const LogoutContainer = () => {
  const { user, logoutUser } = useDashboardContext();
  const [showLogout, setShowLogout] = useState(false);

  return (
    <Wrapper>
      <button
        type='button'
        className='btn logout-btn'
        onClick={() => setShowLogout(!showLogout)}
      >
        <FaUserCircle />
        {user?.name}
        <FaCaretDown />
      </button>
      <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
        <button type='button' className='dropdown-btn' onClick={logoutUser}>
          Logout
        </button>
      </div>
    </Wrapper>
  );
};
export default LogoutContainer;
