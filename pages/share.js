export default function Home() {
  return (
    <>
      <section id="videos-list" className="">
        <h3>Share a Youtube movie</h3>
        <div className="share-box">
          <label>
            <span>Youtube URL:</span>
            <input type={"text"} name="url" />
          </label>
          <div className="">
            <button>Share</button>
          </div>
        </div>
      </section>
    </>
  );
}
