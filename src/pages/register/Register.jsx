import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { useDispatch, useSelector } from 'react-redux';
import {register} from '../../features/authSlice';
import '../../sass/pages/_register.scss';

const Register = () => {
  const auth = useSelector((state) => state.auth.entities);
  const dispatch = useDispatch();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isAdmin, setIsAdmin] = React.useState(false);
  const [email, setEmail] = React.useState("");

  const submit = (e) => {
    e.preventDefault();
    const data = {
      username,
      email,
      password,
      isAdmin,
      avatar: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png'
    }
    console.log(data)
    dispatch(register(data));
  }


  return (
    <div className="register">
      <Navbar />
      <div className="registerContainer">
        <h2 className="title">Register</h2>
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
            <label className="label" htmlFor="email">Email</label>
            <input
              className="input"
              type="email"
              id="email"
              name="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
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
          <button type="submit" className="button">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;