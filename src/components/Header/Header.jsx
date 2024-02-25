import React from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className=" text-sm font-medium text-center text-gray-700 border-gray-200 dark:text-gray-400 dark:border-gray-700 ">
      <nav className="flex justify-around w-full dark:bg-gray-900">
        <div className="inline-block  m-2">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="inline-block">
          <ul className="flex flex-wrap -mb-px">
            {navItems.map((item) =>
              item.active ? (
                <li className="me-2" key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
