import React, { useState } from 'react'

const Signup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handleToggle = () => {
    setIsLogin(!isLogin);
    setFormData({ email: "", password: "", name: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password || (!isLogin && !formData.name)) {
      alert("Please fill in all fields");
      return;
    }

    if (isLogin) {
      console.log("Logging in with", formData);
      alert(`Logged in as ${formData.email}`);
    } else {
      console.log("Signing up with", formData);
      alert(`Signed up as ${formData.name}`);
    }
  };

  return (
    <div className="container mt-5  p-4" style={{ maxWidth: "400px"}}>
      <h2 className="text-center mb-4">{isLogin ? "Login" : "Sign Up"}</h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
        )}
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </form>
      <p className="mt-3 text-center">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <button className="btn btn-link p-0" onClick={handleToggle}>
          {isLogin ? "Sign Up" : "Login"}
        </button>
      </p>
    </div>
  );
}

export default Signup