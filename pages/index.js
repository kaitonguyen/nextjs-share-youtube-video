export default function Home() {
  return (
    <>
      <section id="videos-list" className="">
        <div id="videos-list-item">
          <div className="video">video here</div>
          <div className="video-info">
            <div className="video-title"></div>
            <div className="shared-by"></div>
            <div className="vote-buttons">
              <div className="un-vote">
                <div className="up-vote"></div>
                <div className="down-vote"></div>
              </div>
              <div className="voted">
                <div className="up-voted"></div>
                <div className="down-voted"></div>
              </div>
            </div>
            <div className="vote-counter">
              <span className="up-vote-counter">12</span>
              <span className="down-vote-counter">11</span>
            </div>
            <div className="description">
              <h2>Description</h2>
              <div className="description-content">lorem ipsum</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
