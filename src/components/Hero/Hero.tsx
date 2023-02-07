import React, { useCallback, useContext, useRef } from "react";
import Image from "next/image";
import profilePic from "../../../public/images/bridgette.jpg";
import styles from "./Hero.module.scss";
import IsTopContext from "src/store/isTop-context";
import ActiveLinkContext from "src/store/link-context";

const Hero = () => {
  const observer = useRef<any>();
  const isTopCtx = useContext(IsTopContext);
  const activeLinkCtx = useContext(ActiveLinkContext);

  const callbackFunction = (entries: any) => {
    if (!entries[0].isIntersecting) {
      isTopCtx.setIsTopFalse();
    } else {
      isTopCtx.resetIsTop();
      activeLinkCtx.updateActiveLink("home");
    }
  };

  const options = {
    root: null,
    rootMargin: "20px",
    threshold: 1.0,
  };

  const heroRef = useCallback(
    async (node: any) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(callbackFunction, options);
      if (node) observer.current.observe(node);
    },
    [isTopCtx.isTop]
  );

  return (
    <section ref={heroRef} className={styles.section}>
      <div style={{ position: "relative" }}>
        <div
          id="home"
          style={{ position: "absolute", top: "-1000px", left: 0 }}
        ></div>
      </div>
      <div>
        <h1 className={styles.text}>
          A jack of all trades is a master of none, but oftentimes better than a
          master of one.
        </h1>
      </div>
      <div>
        <Image
          src={profilePic}
          alt="Picture of Bridgette C Smith"
          width={273}
          height={273}
          className={styles.image}
          // placeholder="blur"
        />
      </div>
    </section>
  );
};

export default Hero;
