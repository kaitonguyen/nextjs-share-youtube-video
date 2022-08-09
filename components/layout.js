import Navbar from "./navbar";

export default function Layout({ email, setEmail, children }) {
  return (
    <>
      <div className="">
        <Navbar email={email} setEmail={setEmail} />
        <main className="flex justify-center pb-10">{children}</main>
      </div>
    </>
  );
}
