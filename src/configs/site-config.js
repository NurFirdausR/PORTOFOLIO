import React from "react";
import {
  FaGithub,
  FaDev,
  FaLinkedin,
  FaQuora,
  FaTwitter
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Nur Firdaus Ramandani. All Rights Reserved.`,
  author: {
    name: "Nur Firdaus Ramandani",
    accounts: [
      {
        url: "https://github.com/NurFirdausR",
        label: "Github Account",
        type: "gray",
        icon: <FaGithub />
      },
      {
        url: "https://www.linkedin.com/in/nurfirdausramandani/",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <FaLinkedin />
      },
      {
        url: "mailto:nurfirdaus.5000@gmail.com",
        label: "Nur Firdaus Ramandani",
        type: "gray",
        icon: <FiMail />
      }
    ]
  }
};

export default siteConfig;
