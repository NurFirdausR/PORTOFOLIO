
import kehati from "assets/images/projects/kehati.png";
import kemenag from "assets/images/projects/logo_kemenag.png";
import pengkat from "assets/images/projects/pengkat.png";
import evogym from "assets/images/projects/evogym.png";

export const projectsList = [
  {
    id: 1,
    title: "HIBAH KEHATI",
    type: "at-work",
    developerAs: "core",
    logo: kehati,
    blurHash: "L4ADc400P*Zi4Tu1y;Qo00pH#YXl",
    link: "https://hibah.kehati.or.id/",
    desc: `SIM HIBAH KEHATI adalah Sistem Informasi Manajemen Hibah yang dikelola oleh Yayasan Keanekaragaman Hayati Indonesia (KEHATI). Sistem ini biasanya digunakan untuk mengelola proses pengajuan, evaluasi, dan pelaporan hibah yang diberikan oleh Yayasan KEHATI untuk berbagai proyek yang berkaitan dengan pelestarian keanekaragaman hayati di Indonesia.`,
    technologies: ["html","css", "javascript","php", "laravel"]
  },
  {
    id: 2,
    title: "IZOP MDT",
    type: "at-work",
    developerAs: "support-core",
    link: "https://ijopmadrasah.kemenag.go.id/",
    logo: kemenag,
    blurHash: "L0Aer?tjH[tPyAayj[j[00ay%xkB",
    desc: `Aplikasi IZOP MDT (Izin Operasional Madrasah Diniyah Takmiliyah) adalah sistem online dari Direktorat Jenderal Pendidikan Islam, Kementerian Agama RI, untuk mengelola pendaftaran izin operasional Madrasah Diniyah Takmiliyah. Aplikasi ini meningkatkan akuntabilitas dan transparansi dalam proses pengajuan izin operasional MDT di Indonesia.`,
    technologies: ["html","css", "javascript","php", "laravel"]

  },
  {
    id: 3,
    title: "IZOP PONTREN",
    type: "at-work",
    developerAs: "support",
    logo: kemenag,
    blurHash: "L2M5%%0000EN00I:-oIp00kC?^sl",
    link: "https://ijoppdma.kemenag.go.id/",
    desc: `Aplikasi  IZOP Pontren khusus berfokus pada izin operasional untuk Pondok Pesantren, yaitu sekolah asrama tradisional Islam di Indonesia. Aplikasi ini membantu mengelola proses pendaftaran dan kepatuhan untuk lembaga-lembaga ini.`,
    technologies: ["html","css", "javascript","php", "laravel"]
  },
  {
    id: 4,
    title: "Pengaduan Masyarakat / PENGKAT",
    type: "school-project",
    developerAs: "core",
    logo: pengkat,
    blurHash: "L1O^uE0679I00AGT?.H{00y7p2tK",
    link: "https://github.com/NurFirdausR/UKK-PENGKAT",
    desc: `Aplikasi Pengaduan Masyarakat berfokus pada keluh  kesah masyarakat supaya dapat di evaluasi melalui aplikasi oleh  pemerintah setempat`,
    technologies: ["html","css", "javascript","php", "laravel"]
  },
  {
    id: 5,
    title: "Evogym",
    type: "dummy-project",
    developerAs: "core",
    logo: evogym,
    blurHash: "L1O^uE0679I00AGT?.H{00y7p2tK",
    link: "https://github.com/NurFirdausR/react-ts-fitness",
    desc: `This is an Landing Page Evogym i was build this landing page for learn my react js `,
    technologies: ["html","css", "javascript","react js", "next js"]
  },
  {
    id: 6,
    title: "GoMovies",
    type: "dummy-project",
    developerAs: "core",
    logo: "",
    blurHash: "L1O^uE0679I00AGT?.H{00y7p2tK",
    link: "https://github.com/NurFirdausR/react-ts-fitness",
    desc: `This is an GoMovies that just simpliest application build by golang and react js focus on functionality and feature like auth,graphql,fetch api,docker i was learn this for knowing how backend and frontend work separately `,
    technologies: ["html","css", "javascript","react js", "golang","docker"]
  },
];
