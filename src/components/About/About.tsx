import React, { useCallback, useContext, useRef } from "react";
import Heading from "@components/Heading";
import ActiveLinkContext from "src/store/link-context";

import styles from "./About.module.scss";

const About = () => {
  const observer = useRef<any>();
  const activeLinkCtx = useContext(ActiveLinkContext);

  const callbackFunction = (entries: any) => {
    if (entries[0].isIntersecting) {
      activeLinkCtx.updateActiveLink("about");
    }
  };

  const options = {
    root: null,
    rootMargin: "1px",
    threshold: 1.0,
  };

  const aboutRef = useCallback(
    async (node: any) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(callbackFunction, options);
      if (node) observer.current.observe(node);
    },
    [activeLinkCtx.activeLink]
  );

  return (
    <section ref={aboutRef} className={styles.section}>
      <div style={{ position: "relative" }}>
        <div
          id="about"
          style={{ position: "absolute", top: "-70px", left: 0 }}
        ></div>
      </div>
      <Heading title="about" />
      <div className={styles.container}>
        <p className={styles.text}>
          Bridging the gap between content design, email and web development. I
          offer strategic expertise in web development, digital analytics,
          content migration and strategy.
        </p>
        <p className={styles.text}>
          In my previous role, I worked as the Director of Web Strategy,
          Operations leading mdg&apos;s digital efforts, marketing automation,
          web team and web strategy. I worked with Facebook as Instagram&apos;s
          Web Strategist leading their end-to-end web strategy for Instagram
          Business. And now, I work with Here Technologies co-leading their web
          infrastructure and seo strategy.
        </p>
        <p className={styles.text}>
          I have a Bachelor of Science in Digital Media, Master of Education in
          Instructional Leadership and hold a certification in Full Stack Web
          Development. In my spare time, I&apos;m consistently developing my
          professional wealth of knowledge.
        </p>
      </div>
    </section>
  );
};

export default About;
