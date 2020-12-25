import React from "react";
import { Fade } from "react-reveal";
const img1Src =
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.freepik.com%2Ffree-photo%2Fwoman-working-with-the-laptop-in-the-living-room-of-her-house_23-2147601396.jpg&f=1&nofb=1";

const img2Src =
  "https://bloximages.chicago2.vip.townnews.com/magicvalley.com/content/tncms/assets/v3/editorial/6/88/688a1fdb-0318-521e-82c4-41ed519e89a6/56d661c4024f1.image.jpg?resize=1200%2C800";
const img3Src =
  "https://www.coworker.com/mag/wp-content/uploads/2019/03/coworking-space-1280x640.jpg";

const InfoCard = (props) => {
  const { title, text, imgSrc } = props;
  return (
    <div className="info-card">
      <h3>{title}</h3>
      <div className="info-card-desc">
        <div className="info-card-text">
          <p>{text}</p>
        </div>
        <div
          style={{ backgroundImage: `url(${imgSrc})` }}
          className="info-card-img"
        ></div>
      </div>
    </div>
  );
};

const Info = () => {
  // React.useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     if (entries[0].isIntersecting) {
  //       // Not possible to set it back to false like this:
  //       setVisible(true);
  //       // No need to keep observing:
  //       console.log("ELEM IS: ");
  //       console.log(domRef.current);
  //       //observer.unobserve(domRef.current);
  //     }
  //   });

  // just use this
  // https://www.npmjs.com/package/react-reveal

  // observer.observe(domRef.current);

  //   return () => observer.unobserve(domRef.current);
  // }, []);

  // https://www.selbekk.io/blog/2019/08/how-to-fade-in-content-as-it-scrolls-into-view/

  return (
    <div id="info" className="info">
      {/* <Fade> */}
      <InfoCard
        imgSrc={img1Src}
        title="How it works"
        text="We connect your employees with local, productive workspaces hosted in beautiful, quiet residences. Tell us where your employees need workspaces, and we'll take care of the rest."
      />
      {/* </Fade>
      <Fade> */}
      <InfoCard
        imgSrc={img2Src}
        title="Convenient and easy"
        text="Each Codi workspace offers office-level amenities, such as secure high-speed WiFi, fresh coffee, area for private calls, and more."
      />

      {/* </Fade>
      <Fade> */}
      <InfoCard
        imgSrc={img2Src}
        title="Everything you need for work"
        text="Each Codi workspace offers office-level amenities, such as secure high-speed WiFi, fresh coffee, area for private calls, and more."
      />
      {/* </Fade>
      <Fade> */}
      <InfoCard
        imgSrc={img3Src}
        title="Safe and secure"
        text="Every space and user is vetted to ensure strict quality standards, including cleaning protocols and distancing measures to protect our community."
      />
      {/* </Fade> */}
    </div>
  );
};

export default Info;
