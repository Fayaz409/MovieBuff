import { MdHomeFilled } from "react-icons/md";
import { PiTelevisionFill } from "react-icons/pi";
import { RiMovie2Fill } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";

export const navigation = [
  {
    label: "TV Shows",
    href: "tv",
    icon: <PiTelevisionFill />
  },
  {
    label: "Movies",
    href: "movie",
    icon: <RiMovie2Fill />
  }
];

export const mobileNavigation = [
  {
    label: "Home",
    href: "/",
    icon: <MdHomeFilled />
  },
  ...navigation,
  {
    label : 'search',
    href : '/search',
    icon : <IoSearchSharp/>
  }
];

console.log("navigation:", navigation);
console.log("mobileNavigation:", mobileNavigation);
