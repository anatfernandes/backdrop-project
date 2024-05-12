import { ImCompass2 } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { BsThreeDots } from "react-icons/bs";
import { MdBookmarks } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";
import { FaBell, FaComment } from "react-icons/fa";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineRight,
  AiOutlineLeft,
  AiFillEye,
  AiFillEyeInvisible,
} from "react-icons/ai";
import {
  IoHome,
  IoSearch,
  IoPerson,
  IoHeartOutline,
  IoHeart,
  IoReload,
  IoPaperPlaneSharp,
  IoMail,
  IoMenuOutline,
} from "react-icons/io5";
import { IconParamsType } from "./types";

const icons = Object.freeze({
  home: IoHome,
  search: IoSearch,
  menu: IoMenuOutline,
  notification: FaBell,
  person: IoPerson,
  comment: FaComment,
  reload: IoReload,
  send: IoPaperPlaneSharp,
  minus: AiOutlineMinus,
  plus: AiOutlinePlus,
  continue: AiOutlineRight,
  return: AiOutlineLeft,
  visible: AiFillEye,
  invisible: AiFillEyeInvisible,
  letter: IoMail,
  compass: ImCompass2,
  dots: BsThreeDots,
  bookmarks: MdBookmarks,
  settings: VscSettings,
  google: FcGoogle,
  heart: IoHeartOutline,
  "heart-full": IoHeart,
  "down-arrow": BiSolidDownArrow,
  "up-arrow": BiSolidUpArrow,
});

function Icon({ type, ...otherProps }: Readonly<IconParamsType>) {
  const ReactIcon = icons[type];
  return <ReactIcon title={type} size="1.5rem" color="var(--black)" {...otherProps} />;
}

export { Icon };
