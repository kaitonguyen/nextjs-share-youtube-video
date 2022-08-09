import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <>
      <div className="">
        <Navbar />
        <main>{children}</main>
      </div>
    </>
  );
}
