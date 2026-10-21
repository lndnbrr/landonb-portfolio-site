import { SiCaldotcom, SiDiscogs, SiGithub, SiInstagram, SiLinkedin, SiSpotify, SiSteam, SiX} from "react-icons/si";
import { TbPhoneRinging} from "react-icons/tb";
import { MdAttachEmail, MdOutlineFastfood} from "react-icons/md";

const contact = {
  contactMethods: [
    {
      title: "Email (lndnborrego@gmail.com)",
      img: <MdAttachEmail size={30} className="lg:size-20"/>,
      url: "mailto:lndnborrego@gmail.com",
    },
    {
      title: "Scheduled Meetings",
      img: <SiCaldotcom size={50} className="lg:size-20"/>,
      url: "https://cal.com/lndnbrr",
    },
    {
      title: "Phone Number (313.412.0694)",
      img: <TbPhoneRinging size={30} className="lg:size-20"/>,
      url: "tel:+13134120694",
    },
  ],
  followMe: [
    {
      title: "LinkedIn",
      img: <SiLinkedin size={30} className="lg:size-15"/>,
      url: "https://www.linkedin.com/in/landon-borrego/",
    },
    {
      title: "GitHub",
      img: <SiGithub size={30} className="lg:size-15"/>,
      url: "https://github.com/lndnbrr",
    },
    {
      title: "X",
      img: <SiX size={30} className="lg:size-15"/>,
      url: "https://x.com/lndnbrr",
    },
    {
      title: "Instagram",
      img: <SiInstagram size={30} className="lg:size-15"/>,
      url: "https://www.instagram.com/lndn.brr/",
    },
    {
      title: "Beli (Mobile App Only)",
      img: <MdOutlineFastfood size={30} className="lg:size-15"/>,
      url: "https://beliapp.co/profile/lndnbrr",
    },
    {
      title: "Discogs",
      img: <SiDiscogs size={30} className="lg:size-15"/>,
      url: "https://www.discogs.com/user/lndn.brr",
    },
    {
      title: "Spotify",
      img: <SiSpotify size={30} className="lg:size-15"/>,
      url: "https://open.spotify.com/user/landman.bandman?si=5c3c2b2c1a9a4644",
    },
    {
      title: "Steam",
      img: <SiSteam size={30} className="lg:size-15"/>,
      url: "https://steamcommunity.com/id/milk_moustache1/",
    },
  ],
};

export default contact;
