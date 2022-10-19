import React, {useEffect} from "react";
import Navbar from "../../components/navbar/Navbar";
import { useDispatch, useSelector } from 'react-redux';
import {login} from '../../features/authSlice';
import '../../sass/pages/_login.scss';
import {useNavigate} from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const locationID = useSelector((state) => state.search.locationID);
  const dispatch = useDispatch();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const submit = (e) => {
    e.preventDefault();
    const data = {
      username,
      password
    }
    dispatch(login(data));
    navigate(`/properties/${locationID}`);
  }

  return (
    <div className="login">
      <Navbar />
      <div className="loginContainer">
        <h2 className="title">Sign In</h2>
        <form className="form" onSubmit={submit}>
          <div className="form-item">
            <label className="label" htmlFor="username">Username</label>
            <input
              className="input"
              type="text"
              id="username"
              name="username"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-item">
            <label className="label" htmlFor="password">Password</label>
            <input
              className="input"
              type="password"
              id="password"
              name="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
