import { useRouter } from "next/router";
import { useEffect } from "react";
import { getVideoInfo } from "../helpers";

export default function Share({ email, videosList, setVideosList }) {
  const router = useRouter();
  // console.log(email);
  useEffect(() => {
    if (!email) {
      router.push("/");
    }
  }, []);

  const handleShareVideo = async (e) => {
    e.preventDefault();
    const videoUrl = e.target[0].value;
    if (!videoUrl) {
      alert("Please enter video URL");
    } else if (
      !/^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/.test(videoUrl)
    ) {
      alert("This is not an Youtube Video URL");
    } else {
      const videoInfo = await getVideoInfo(videoUrl);

      await setVideosList((oldVideosList) => [
        { ...videoInfo, sharedBy: email, timestamp: Date.now() },
        ...oldVideosList,
      ]);
      e.target.reset();
      router.push("/");
    }
  };

  return (
    <>
      <section id="share-video" className="max-w-full w-[600px] md:mt-40">
        <h3 className="">Share a Youtube movie</h3>
        <form
          onSubmit={handleShareVideo}
          className="share-box bg-gray-200 px-10 py-10 "
        >
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
        </form>
      </section>
    </>
  );
}
