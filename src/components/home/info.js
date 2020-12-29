import React from "react";
import { Fade } from "react-reveal";
import { FadeInSection } from "../utils";
const img1Src =
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.freepik.com%2Ffree-photo%2Fwoman-working-with-the-laptop-in-the-living-room-of-her-house_23-2147601396.jpg&f=1&nofb=1";

const img2Src =
  "https://bloximages.chicago2.vip.townnews.com/magicvalley.com/content/tncms/assets/v3/editorial/6/88/688a1fdb-0318-521e-82c4-41ed519e89a6/56d661c4024f1.image.jpg?resize=1200%2C800";
const img3Src =
  "https://www.coworker.com/mag/wp-content/uploads/2019/03/coworking-space-1280x640.jpg";
const img4Src =
  "https://inhabitat.com/wp-content/blogs.dir/1/files/2016/01/hoffice-meeting01.jpg";
const img5Src =
  "https://cms.qz.com/wp-content/uploads/2018/09/Working-At-Home.jpg?quality=75&strip=all&w=1600&h=900&crop=1";
const img6Src =
  "https://drop-desk.com/blog/wp-content/uploads/2019/02/advantages-of-coworking-spaces.jpg";
const description1 =
  "We connect you with local workspaces in beautiful homes. Each home is curated to provide the optimal work enviroment.";
const description2 =
  "Workspaces are conveniently placed around the city so one will always be nearby no matter where you are.";
const description3 =
  "Each workspace offers fast WiFi, comfortable furniture, a kitchen and unlimited coffee and tea. Feel free to take your shoes off, too.";
const description4 =
  "Hosts are vetted to ensure the saftey and security of our guests.  Protecting our guests is the highest priority.";
const description5 =
  "Meet other remote workers around the city.  Build your network and create strong connections.";
const InfoCard = (props) => {
  const { title, text, imgSrc, reverse } = props;
  if (reverse) {
    return (
      <FadeInSection>
        <div className="info-card">
          <div className="info-card-desc">
            <div className="info-card-text">
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
            <div
              style={{ backgroundImage: `url(${imgSrc})` }}
              className="info-card-img"
            ></div>
          </div>
        </div>
      </FadeInSection>
    );
  } else {
    return (
      <FadeInSection>
        <div className="info-card">
          <div className="info-card-desc">
            <div
              style={{ backgroundImage: `url(${imgSrc})` }}
              className="info-card-img"
            ></div>
            <div className="info-card-text">
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </div>
        </div>
      </FadeInSection>
    );
  }
};

const Info = () => {
  // https://www.selbekk.io/blog/2019/08/how-to-fade-in-content-as-it-scrolls-into-view/

  return (
    <div id="info" className="info">
      {/* <Fade> */}
      <InfoCard imgSrc={img4Src} title="How it works" text={description1} />
      {/* </Fade>
      <Fade> */}
      <InfoCard
        reverse
        imgSrc={img5Src}
        title="Convenient and easy"
        text={description2}
      />

      {/* </Fade>
      <Fade> */}
      <InfoCard
        imgSrc={img2Src}
        title="Everything you need for work"
        text={description3}
      />
      {/* </Fade>
      <Fade> */}
      <InfoCard
        reverse
        imgSrc={img3Src}
        title="Safe and secure"
        text={description4}
      />
      {/* </Fade> */}
      <InfoCard imgSrc={img6Src} title="Build community" text={description5} />
      {/* </Fade> */}
    </div>
  );
};

export default Info;
