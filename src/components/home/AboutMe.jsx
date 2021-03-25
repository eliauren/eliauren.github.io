import React from "react";

const AboutMe = ({ heading, message, imageLink, imgSize, resume_fr, resume_en }) => {
  const [profilePicUrl, setProfilePicUrl] = React.useState("");
  const showPic = React.useState(Boolean(imageLink));

  React.useEffect(() => {
    setProfilePicUrl(imageLink);
  }, [imageLink]);

  return (
    <div id="aboutme" className="jumbotron jumbotron-fluid m-0">
      <div className="container container-fluid">
        <div className="row">
          <div className="col-5 d-none d-lg-block align-self-center">
            {showPic && (
              <img
                className="border border-secondary rounded-circle"
                src={profilePicUrl}
                alt="profilepicture"
                width={imgSize}
                height={imgSize}
              />
            )}
          </div>

          <div className={`col-lg-${showPic ? "7" : "12"}`}>
            <h2 className="display-4 mb-5 text-center">{heading}</h2>
            <p className="lead text-center">{message}</p>
            {resume_en && (
              <p className="lead text-center">
                <a
                  className="btn btn-outline-dark btn-lg"
                  href={resume_en}
                  target="_blank"
                  rel="noreferrer noopener"
                  role="button"
                  aria-label="Resume_EN/CV"
                >
                  English&nbsp;Resume
                </a>
              </p>
            )}
            {resume_fr && (
              <p className="lead text-center">
                <a
                  className="btn btn-outline-dark btn-lg"
                  href={resume_fr}
                  target="_blank"
                  rel="noreferrer noopener"
                  role="button"
                  aria-label="Resume_FR/CV"
                >
                  French&nbsp;&nbsp;Resume
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
