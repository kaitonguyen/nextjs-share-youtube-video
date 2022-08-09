import Link from "next/link";

const Navbar = () => {
  return (
    <header className="container max-w-6xl m-auto border-b border-b-stone-600 py-4 flex justify-between items-center">
      <div className="">
        <h1 id="logo" className="flex text-3xl font-bold">
          <Link href={"/"}>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 inline-block mr-2 mb-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              Funny Movies
            </a>
          </Link>
        </h1>
      </div>
      <div className="">
        <div id="authenticated" className="flex md:gap-5 items-center hidden">
          <span>nguyenhieuky@gmail.com</span>
          <button className="px-5 py-3 bg-sky-600 text-white">Share a movie</button>
          <button className="px-5 py-3 bg-rose-500 text-white">Logout</button>
        </div>
        <div id="unauthenticated" className="flex md:gap-5">
          <input type="text" id="email" placeholder="email" className="" />
          <input type="password" id="password" placeholder="password" className="" />
          <button className="px-5 py-3 bg-sky-600 text-white">Login/Register</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
