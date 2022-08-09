import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Share({ email }) {
  const router = useRouter();
  console.log(email);
  useEffect(() => {
    if (!email) {
      router.push("/");
    }
  }, []);

  return (
    <>
      <section id="share-video" className="max-w-full w-[600px] md:mt-56">
        <h3 className="">Share a Youtube movie</h3>
        <div className="share-box bg-gray-200 px-10 py-10 ">
          <label className="flex items-center mb-10">
            <span className="block basis-1/4 text">Youtube URL:</span>
            <input type={"text"} name="url" className="basis-3/4" />
          </label>
          <div className="flex items-center">
            <span className="block basis-1/4"></span>
            <button className="basis-3/4 w-full bg-sky-500 px-5 py-2 text-white">
              Share
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
