import React from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

const CourseWrapper = props => {
  return (
    <Link to={"/course/" + props.name}>
      <div className={"courses__box " + props.style}>
        {parse(props.svg)}
        <div className="courses__info">
          <h5>Total lessons: {props.length}</h5>
          <h4>{props.name}</h4>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="courses__arrow"
        >
          <line x1="0" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </div>
    </Link>
  );
};
export default CourseWrapper;