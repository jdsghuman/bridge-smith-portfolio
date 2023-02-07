import ProjectList from "@components/Project/ProjectList";
import Skills from "@components/Skills";
import About from "@components/About";
import Contact from "@components/Contact";
import Hero from "@components/Hero";
import Meta from "@components/Meta";
import { MetaTags, PageType, RobotsContent } from "@components/Meta/types";

const HomePage = () => {
  const postMetaTags: MetaTags = {
    canonical: "http://bridgettecsmith.com/",
    description: `Web Strategy | Digital Marketing | Management`,
    image: "https://www.bridgettecsmith.com/images/bridgette.jpg",
    robots: `${RobotsContent.follow},${RobotsContent.index}`,
    title: `bridgettecsmith`,
    type: PageType.website,
  };
  return (
    <>
      <Meta tags={postMetaTags} />
      <Hero />
      <ProjectList />
      {/* <Skills /> */}
      <About />
      <Contact />
    </>
  );
};

export default HomePage;
