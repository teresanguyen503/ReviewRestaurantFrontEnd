const LoginForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input id="name" type="text" className="form-control" />
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
