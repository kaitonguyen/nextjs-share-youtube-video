import { useState } from "react";

const ThumbUpIconOutline = ({ className = "h-7 w-7" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
      />
    </svg>
  );
};

const ThumbDownIconOutline = ({ className = "h-7 w-7" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"
      />
    </svg>
  );
};

const ThumbUpIconSolid = ({ className = "h-7 w-7" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
    </svg>
  );
};

const ThumbDownIconSolid = ({ className = "h-7 w-7" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z" />
    </svg>
  );
};

export default function Home({
  email,
  videosList,
  setVideosList,
  voteState,
  setVoteState,
}) {
  // console.log(email);
  const handleVote = (timestamp, type) => {
    setVoteState((oldVoteState) => {
      if (oldVoteState && oldVoteState.hasOwnProperty(email)) {
        oldVoteState[email] = {
          ...oldVoteState[email],
          [timestamp]: type,
        };
      } else {
        oldVoteState = {
          ...oldVoteState,
          [email]: {
            [timestamp]: type,
          },
        };
      }
      return {
        ...oldVoteState,
      };
    });
  };

  return (
    <>
      <section
        id="videos-list"
        data-testid="videos-list"
        className="container max-w-6xl m-auto"
      >
        {videosList &&
          videosList.map((video) => {
            return (
              <div
                id="videos-list-item"
                className="w-full grid grid-cols-2 justify-center mt-12"
                key={video.etag}
              >
                <div className="video">
                  <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.snippet.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="video-info max-h-[315px] overflow-auto">
                  <h2 className="video-title text-rose-600 text-2xl font-bold">
                    {video.snippet.title}
                  </h2>
                  <div className="flex gap-4">
                    <div className="shared-by">Shared by {video.sharedBy}</div>
                    <div className="vote-buttons">
                      <div
                        className={`un-vote flex gap-1 ${
                          (!email ||
                            (voteState &&
                              voteState[email] &&
                              voteState[email].hasOwnProperty(
                                video.timestamp
                              ))) &&
                          "hidden"
                        }`}
                      >
                        <button
                          className="up-vote"
                          onClick={() => handleVote(video.timestamp, "up")}
                        >
                          <ThumbUpIconOutline />
                        </button>
                        <button
                          className="down-vote"
                          onClick={() => handleVote(video.timestamp, "down")}
                        >
                          <ThumbDownIconOutline />
                        </button>
                      </div>

                      <div
                        className={`voted flex gap-1 ${
                          (!email ||
                            !voteState ||
                            !voteState[email] ||
                            !voteState[email].hasOwnProperty(
                              video.timestamp
                            )) &&
                          "hidden"
                        }`}
                      >
                        <div
                          className={`up-voted ${
                            voteState &&
                            voteState[email] &&
                            voteState[email][video.timestamp] === "down" &&
                            "hidden"
                          }`}
                        >
                          <ThumbUpIconSolid />
                        </div>
                        <div
                          className={`down-voted ${
                            voteState &&
                            voteState[email] &&
                            voteState[email][video.timestamp] === "up" &&
                            "hidden"
                          }`}
                        >
                          <ThumbDownIconSolid />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="vote-counter flex items-center gap-7">
                    <span className="up-vote-counter">
                      <ThumbUpIconOutline className="inline h-7 w-7" />
                      12
                    </span>
                    <span className="down-vote-counter">
                      <ThumbDownIconOutline className="inline h-7 w-7" />
                      11
                    </span>
                  </div>
                  <div className="description">
                    <h2>Description</h2>
                    <div className="description-content">
                      <span className="text-gray-500 text-xs text-justify">
                        {video.snippet.description}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </section>
    </>
  );
}
