import React, { Component } from "react";
import { Link } from "react-router-dom";
import "firebase/firestore";
import { auth } from "../auth";
import Loader from "../elements/Loader";
import { Logo, Mask, Input } from "../_helpers";

class Register extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      msg: "",
      loading: false
    };
    this.handleClickRegisterUser = this.handleClickRegisterUser.bind(this);
  }

  handleRefPassword = ref => {
    this.setState({
      password: ref
    });
  };

  handleRefUsername = ref => {
    this.setState({
      username: ref
    });
  };

  handleRefEmail = ref => {
    this.setState({
      email: ref
    });
  };

  componentDidMount() {
    this._isMounted = true;
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  handleClickRegisterUser(e) {
    e.preventDefault();
    var re = /^(([^<>()\\.,;:\s@"]+(\.[^<>()\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (this._isMounted) {
      this.setState({
        loading: true
      });
    }
    if (
      this.state.password.length >= 6 &&
      re.test(String(this.state.email).toLowerCase()) &&
      this.state.loading !== true
    ) {
      localStorage.setItem("user", this.state.username);
      auth(this.state.email, this.state.password, this.state.username)
        .then(() => {
          if (this._isMounted) {
            this.setState({
              loading: false,
              msg: "Register Successful"
            });
          }
        })
        .catch(() => {
          if (this._isMounted) {
            this.setState({
              msg: "This email i already registered.",
              loading: false
            });
          }
        });
    }
    if (this.state.password.length < 6) {
      if (this._isMounted) {
        this.setState({
          msg: "Password must have at least 6 characters",
          loading: false
        });
      }
    }
    if (re.test(String(this.state.email).toLowerCase()) === false) {
      if (this._isMounted) {
        this.setState({
          msg: "Wrong email adress",
          loading: false
        });
      }
    }
  }
  render() {
    return (
      <div className="Register">
        <Mask />
        <div className="wrapper">
          <Logo class="NavBar__logo mobile" />
          <form className="form">
            <h1>Sign Up</h1>
            <div className="form-line">
              <label htmlFor="username">Username</label>
              <Input
                type="text"
                name="username"
                handleRef={this.handleRefUsername}
              />
            </div>
            <br />
            <div className="form-line">
              <label htmlFor="email">Email</label>
              <Input type="text" name="email" handleRef={this.handleRefEmail} />
            </div>
            <br />
            <div className="form-line" data-validate="Password is required">
              <label htmlFor="password">Password</label>
              <Input
                type="password" name="password" handleRef={this.handleRefPassword}/>
            </div>
            <br />
            <br />
            <div>
              <button
                type="submit"
                className="form-btn"
                onClick={event =>
                  this.handleClickRegisterUser(event, this.props.role)
                }
              >
                {this.state.loading ? <Loader /> : <span>SIGNUP</span>}
              </button>
            </div>
          </form>
          {this.state.msg}
          <h4 className="underForm bottom">
            Already have an account?
            <Link to="login">
              <span className="redirect">&nbsp;Login</span>
            </Link>
          </h4>
        </div>
      </div>
    );
  }
}

export default Register;
