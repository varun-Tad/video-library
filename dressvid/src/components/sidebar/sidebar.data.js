import { AiFillHome } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GrHistory } from "react-icons/gr";
import { MdPlaylistPlay } from "react-icons/md";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiFillHome />,
    cName: "sideBar-text",
  },
  {
    title: "Playlist",
    path: "/playlist",
    icon: <MdPlaylistPlay />,
    cName: "sideBar-text",
  },
  {
    title: "Liked Videos",
    path: "/likedVidoes",
    icon: <AiFillHeart />,
    cName: "sideBar-text",
  },
  {
    title: "Watch Later",
    path: "/watchLater",
    icon: <AiOutlineClockCircle />,
    cName: "sideBar-text",
  },
  {
    title: "History",
    path: "/history",
    icon: <GrHistory />,
    cName: "sideBar-text",
  },
];
