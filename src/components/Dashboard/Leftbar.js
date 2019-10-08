import React from "react";
import { withRouter, NavLink } from "react-router-dom";
class Leftbar extends React.Component {


  render() {
    return (
      <div className="Leftbar">
        <div className="Leftbar__logo"></div>
        <ul>
          <li>
            <NavLink activeClassName="active" to="/dashboard">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                <path d="M3 9L21 9" />
                <path d="M9 21L9 9" />
              </svg>{" "}
              <h4>Dashboard</h4>
            </NavLink>
          </li>
          <li>
            <NavLink to="/courses">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
              </svg>
              <h4>Courses</h4>
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
export default withRouter(Leftbar);