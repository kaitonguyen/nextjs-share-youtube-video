import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <>
      <div className="">
        <Navbar />
        <main className="flex justify-center">{children}</main>
      </div>
    </>
  );
}
