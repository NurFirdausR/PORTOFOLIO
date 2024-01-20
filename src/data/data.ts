import PhaedraLogo from "assets/images/logos/phaedra.jpeg";
import BrainxLogo from "assets/images/logos/brainxtech.png";
import CodenyaLogo from "assets/images/logos/codenya.png";
import BrainplowLogo from "assets/images/logos/brainplow.jpg";
import UniLogo from "assets/images/logos/fast.png";
import figma from "assets/images/skills/figma.png";
import vscode from "assets/images/skills/vscode.png";
import react from "assets/images/skills/react.png";
// import ruby from "assets/images/skills/ruby.png";
// import rails from "assets/images/skills/rails.png";
import javascript from "assets/images/skills/javascript.png";
import typescript from "assets/images/skills/typescript.png";
import html5 from "assets/images/skills/html-5.png";
import css3 from "assets/images/skills/css3.png";
// import python from "assets/images/skills/python.png";
import bootstrap from "assets/images/skills/bootstrap.png";
import postgres from "assets/images/skills/postgresql.png";
import redis from "assets/images/skills/redis.png";
import mysql from "assets/images/skills/mysql.png";
// import heroku from "assets/images/skills/heroku.png";
// import docean from "assets/images/skills/digital-ocean.png";
// import aws from "assets/images/skills/aws.png";
// import nginx from "assets/images/skills/nginx.png";
import apache from "assets/images/skills/apache.png";
import gcp from "assets/images/skills/gcp.png";
import golang from "assets/images/skills/golang.png";
import jquery from "assets/images/skills/jquery.png";
import laravel from "assets/images/skills/laravel.png";
import php from "assets/images/skills/php.png";
import ubuntu from "assets/images/skills/ubuntu.png";
import smk from "assets/images/logos/smk.jpg";
import kuliah from "assets/images/logos/kuliah.jpeg";
import imp from "assets/images/logos/imp.jpg";
import ionbit from "assets/images/logos/ionbit.jpeg";

export const companies = [
  {
    title: "Informatika Media Pratama",
    alt: "IMP image",
    role: "Fullstack Engineer",
    skills: ["html", "css", "javascript", "jquery", "php", "laravel","mysql","postgres"],
    period: "May 2022 - November 2023",
    logo: imp
  },
  {
    title: "Ionbit Indonesia",
    alt: "BT image",
    role: "Intership",
    skills:["html", "css", "javascript","reactjs","nextjs"],
    period: "December 2021 - May 2022",
    logo: ionbit
  }
 
];

export const institutes = [
  {
    short_title: "Univ Unindra",
    title: "Universitas Indraprasta PGRI ",
    alt: "unindra image",
    role: "Student of Information Technology at Universitas Indraprasta PGRI",
    skills: ["web development", "data structures"],
    period: "2023 - now",
    startingYear: "2023",
    logo: kuliah
  },
  {
    short_title: "SMK TB",
    title: "Vocational High School",
    alt: "tb image",
    role: "Student",
    skills: ["web development", "devops",],
    period: "2019 - 2021",
    startingYear: "2019",
    logo: smk,
    awards: [
      {
        title: "Participant PermataYouthPreneur",
        description:
          "Participant PermataYouthPreneur Best 45 from indonesia - Frontend - Landing Page",
        date: "2021"
      },
      {
        title: "Join Course Web Complete",
        description:
        "During Covid, I spent a lot of time at home, such as distance learning, etc., I used this time to take a Web Complete course.",
        date: "2020"
      },
      {
        title: "Join Course Linux Administration",
        description:
        "During Covid, I spent a lot of time at home, such as distance learning, etc., I used this time to take a Linux administration course.",
        date: "2020"
      }
    ]
  }
];

export const skills = [
  {
    name: "Laravel",
    description: "Web development",
    link: "https://laravel.com/",
    type: "development",
    image: laravel
  },
  {
    name: "ReactJs",
    description: "Web development",
    link: "https://reactjs.org/",
    type: "development",
    image: react
  },
  {
    name: "PHP",
    description: "Web development, scrapping",
    link: "https://www.php.net/",
    type: "development",
    image: php
  },
  {
    name: "Golang",
    description: "Web development, scrapping",
    link: "https://go.dev/",
    type: "development",
    image: golang
  },
  {
    name: "Jquery",
    description: "Web development",
    link: "https://jquery.com/",
    type: "development",
    image: jquery
  },
  {
    name: "Javascript",
    description: "Web development",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    type: "development",
    image: javascript
  },
  {
    name: "Typescript",
    description: "Web development",
    link: "https://www.typescriptlang.org/",
    type: "development",
    image: typescript
  },
  {
    name: "Html5",
    description: "Web layouts",
    link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
    type: "development",
    image: html5
  },
  {
    name: "Css3",
    description: "Web design",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    type: "design",
    image: css3
  },
  {
    name: "Bootstrap",
    description: "Web design",
    link: "https://getbootstrap.com/",
    type: "design",
    image: bootstrap
  },
  {
    name: "Postgres",
    description: "Database",
    link: "https://www.postgresql.org/",
    type: "database",
    image: postgres
  },
  {
    name: "Mysql",
    description: "Database",
    link: "https://www.mysql.com/",
    type: "database",
    image: mysql
  },
  {
    name: "Redis",
    description: "Database",
    link: "https://redis.io/",
    type: "database",
    image: redis
  },
  {
    name: "GCP",
    description: "Devops",
    link: "https://cloud.google.com/",
    type: "devops",
    image: gcp
  },
  {
    name: "Ubuntu",
    description: "Devops",
    link: "https://ubuntu.com/",
    type: "devops",
    image: ubuntu
  },
  {
    name: "Apache",
    description: "Web server",
    link: "https://httpd.apache.org/",
    type: "devops",
    image: apache
  },
  {
    name: "Visual Studio Code",
    description: "Code editor of choice",
    link: "https://code.visualstudio.com/",
    type: "development",
    image: vscode
  },
  {
    name: "Figma",
    description: "Collaborative Design",
    link: "https://www.figma.com/",
    type: "design",
    image: figma
  }
];
