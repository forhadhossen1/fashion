import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { FaCreditCard, FaHeart } from "react-icons/fa6";
import useCart from "../Hooks/useCart";

const Header = () => {
  const { user, logOut, loading } = useAuth();
  const [cart] = useCart();


  if (loading) {
    return <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
      <div className="w-24 h-24 border-4 border-dashed rounded-full animate-spin dark:border-violet-400 flex justify-center items-center"></div>
    </div>
  }


  const handleLogOut = () => {
    logOut()
      .then(result => {
        console.log(result)
      })
      .catch(error => {
        console.log(error)
      })
  }


  return (
    <div className="">
      <Navbar fluid rounded>
        <Navbar.Brand>
          <h2 className="text-3xl font-bold "><span className="text-4xl text-purple-700">F</span>ashion</h2>
        </Navbar.Brand>




        <Navbar.Collapse>
          <Navbar active>
            <Link to='/'>Home</Link>
          </Navbar>
          <Navbar>
            <Link to='/men'>Men</Link>
          </Navbar>
          <Navbar>
            <Link to='/women'>Women</Link>
          </Navbar>
          <Navbar>
            <Link to='/Kids'>Kids</Link>
          </Navbar>

          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <FaCreditCard className="text-xl" />
              <span className="badge badge-sm indicator-item">{cart.length}</span>
            </div>
          </div>

          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <FaHeart className="text-xl text-red-600" />
              <span className="badge badge-sm indicator-item">+0</span>
            </div>
          </div>

        </Navbar.Collapse>

        {
          user ?
            <div className="flex md:order-2">
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <Avatar alt="User settings" img={user?.photoURL} rounded />
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm">{user?.displayName}</span>
                  <span className="block truncate text-sm font-medium">{user?.email}</span>
                </Dropdown.Header>
                <Link to='/dashboard'>
                  <Dropdown.Item>Dashboard</Dropdown.Item>
                </Link>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Earnings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={handleLogOut}>Log Out</Dropdown.Item>
              </Dropdown>
              <Navbar.Toggle />
            </div>
            :
            <Navbar>
              <Link to='/login'>Login</Link>
            </Navbar>
        }

      </Navbar>
    </div>
  );
};

export default Header;