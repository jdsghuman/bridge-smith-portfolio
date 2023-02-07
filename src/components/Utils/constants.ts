import { PageType, RobotsContent, MetaTags } from "@components/Meta/types";
import { concatenateStrings } from "@components/Utils/Util";

export const defaultMetaTags: MetaTags = {
  canonical: "https://www.bridgettecsmith.com",
  description: "Web Strategy | Digital Marketing | Management",
  image: "https://www.bridgettecsmith.com/images/bridgette.jpg",
  robots: concatenateStrings(RobotsContent.index, RobotsContent.follow),
  title: "bridgettecsmith",
  type: PageType.website,
};
