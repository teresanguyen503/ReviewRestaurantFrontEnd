const LoginForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input id="email" type="email" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input id="password" type="text" className="form-control" />
      </div>
      <button className="btn btn-primary" type="submit">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
