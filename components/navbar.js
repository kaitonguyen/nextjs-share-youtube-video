const Navbar = () => {
  return (
    <header>
      <div className="">
        <h1 id="logo">Funny Movies</h1>
      </div>
      <div className="">
        <div id="authenticated">
          nguyenhieuky@gmail.com
          <button>Share a movie</button>
          <button>Logout</button>
        </div>
        <div id="unauthenticated">
          <input id="email" placeholder="email" className="" />
          <input id="password" placeholder="password" className="" />
          <button>Login/Register</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
