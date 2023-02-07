import Link from "next/link";
import ImageDisplay from "@components/ImageDisplay";
import { AiOutlineDownload } from "react-icons/ai";
import Button from "@components/Button";
import Meta from "@components/Meta";
import { MetaTags, PageType, RobotsContent } from "@components/Meta/types";

import styles from "./index.module.scss";

const Resume = () => {
  const postMetaTags: MetaTags = {
    canonical: "http://bridgettecsmith.com/",
    description: `Web Strategy | Digital Marketing | Management`,
    image: "https://www.bridgettecsmith.com/images/bridgette.jpg",
    robots: `${RobotsContent.follow},${RobotsContent.index}`,
    title: `bridgettecsmith | Resume`,
    type: PageType.website,
  };

  return (
    <div className={styles.container}>
      <Meta tags={postMetaTags} />
      <div>
        <Link target="_blank" href="/resume.pdf">
          <Button className={styles.button} primary>
            <AiOutlineDownload className={styles.icon} />
            Download Resume
          </Button>
        </Link>
      </div>
      <ImageDisplay
        images={[
          {
            src: "https://i.imgur.com/Etfwpy2.jpg",
            alt: "Resume of Bridgette C Smith",
            height: 1000,
            width: 780,
          },
          {
            src: "https://i.imgur.com/mEpFLun.jpg",
            alt: "Resume of Bridgette C Smith",
            height: 1000,
            width: 780,
          },
          {
            src: "https://i.imgur.com/vKloJbV.jpg",
            alt: "Resume of Bridgette C Smith",
            height: 1000,
            width: 780,
          },
        ]}
      />
    </div>
  );
};

export default Resume;
