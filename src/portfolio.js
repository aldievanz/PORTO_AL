/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

// SEO Related settings
const seo = {
  title: "Aldi Vandiaz Maulana — Frontend Web Developer",
  description:
    "Lulusan D3 Teknik Informatika UDINUS (IPK 3.48) berfokus pada Frontend Web Development dengan React.js, TypeScript, dan Material UI.",
  og: {
    title: "Aldi Vandiaz Maulana Portfolio",
    type: "website",
    url: "https://aldivandiazmaulana.com/",
  },
};

// Home Page
const greeting = {
  title: "Aldi Vandiaz Maulana",
  logo_name: "AldiVandiaz",
  nickname: "aldivandiaz",
  subTitle:
    "Lulusan D3 Teknik Informatika Universitas Dian Nuswantoro (IPK 3.48) dengan fokus pada pengembangan Frontend Web (React.js, TypeScript, Material UI) & pemahaman backend (NestJS, PostgreSQL). Berpengalaman magang 6 bulan sebagai Staff IT Web Programmer di PT Pertamina Lubricants.",
  resumeLink: "/resume",
  portfolio_repository: "https://github.com/aldievanz",
  githubProfile: "https://github.com/aldievanz",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/aldievanz",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/aldi-vandiaz-maulana-5450012a8/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:aldivandiazmaulana@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

const skills = {
  data: [
    {
      title: "Frontend Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Membangun UI web yang responsif, modern, dan reusable menggunakan React.js & TypeScript",
        "⚡ Pengalaman menggunakan Material UI (MUI), React Query (TanStack), HTML, CSS, dan JavaScript",
        "⚡ Mengintegrasikan frontend dengan REST API backend (NestJS, Laravel, PHP)",
      ],
      softwareSkills: [
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: { color: "#3178C6" },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: { backgroundColor: "#000000", color: "#F7DF1E" },
        },
        {
          skillName: "Material UI",
          fontAwesomeClassname: "simple-icons:mui",
          style: { color: "#007FFF" },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: { color: "#E34F26" },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: { color: "#1572B6" },
        },
      ],
    },
    {
      title: "Backend & Database",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Pemahaman pengembangan API backend dengan NestJS, Laravel, CodeIgniter, PHP, dan Java",
        "⚡ Pengelolaan database relasional PostgreSQL, MySQL, dan alat manajemen HeidiSQL",
      ],
      softwareSkills: [
        {
          skillName: "NestJS",
          fontAwesomeClassname: "simple-icons:nestjs",
          style: { color: "#E0234E" },
        },
        {
          skillName: "Laravel",
          fontAwesomeClassname: "simple-icons:laravel",
          style: { color: "#FF2D20" },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: { color: "#777BB4" },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: { color: "#336791" },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: { color: "#4479A1" },
        },
      ],
    },
    {
      title: "Tools, Cloud & Deployment",
      fileName: "DesignImg",
      skills: [
        "⚡ Version control & kolaborasi tim menggunakan Git dan GitHub",
        "⚡ Pengujian API dengan Postman & HTTP Client Axios",
        "⚡ Deployment & dasar cloud infrastructure pada Vercel, GCP, dan AWS Cloud Fundamental",
      ],
      softwareSkills: [
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: { color: "#F05032" },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: { color: "#181717" },
        },
        {
          skillName: "VS Code",
          fontAwesomeClassname: "simple-icons:visualstudiocode",
          style: { color: "#007ACC" },
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:postman",
          style: { color: "#FF6C37" },
        },
        {
          skillName: "Vercel",
          fontAwesomeClassname: "simple-icons:vercel",
          style: { color: "#000000" },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "Universitas Dian Nuswantoro",
      subtitle: "D3 Teknik Informatika",
      logo_path: "udinus.png",
      alt_name: "UDINUS",
      duration: "2023 – 2026",
      descriptions: [
        "⚡ Yudisium: 10 Juli 2026 | IPK: 3.48",
        "⚡ Fokus pada penguasaan Frontend Web Development, Software Engineering, dan Database Management.",
        "⚡ Aktif dalam kegiatan organisasi Himpunan Mahasiswa Diploma Teknik Informatika (HMDTI).",
      ],
      website_link: "https://dinus.ac.id",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Certification Scheme of Web Developer",
      subtitle: "- Badan Nasional Sertifikasi Profesi (BNSP)",
      logo_path: "codeInLogo.png",
      certificate_link: "#",
      alt_name: "BNSP Web Developer",
      color_code: "#0077B599",
    },
    {
      title: "Certification Scheme of Pemrograman Mobil Pratama",
      subtitle: "- Junior Mobile Programmer BNSP",
      logo_path: "codeInLogo.png",
      certificate_link: "#",
      alt_name: "BNSP Junior Mobile Programmer",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Pengalaman",
  subtitle: "Magang & Organisasi",
  description:
    "Berpengalaman magang 6 bulan sebagai Staff IT Web Programmer di anak perusahaan BUMN nasional (PT Pertamina Lubricants) serta aktif dalam organisasi mahasiswa.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Pengalaman Magang",
      work: true,
      experiences: [
        {
          title: "Staff IT (Web Programmer)",
          company: "PT Pertamina Lubricants",
          company_url: "https://pertaminalubricants.com/",
          logo_path: "ptpl.png",
          duration: "8 September 2025 – 19 Januari 2026",
          location: "Gambir, Jakarta, Indonesia",
          description:
            "Membangun UI dashboard manajemen BBM untuk laporan bulanan menggunakan React.js. Berkolaborasi dengan tim IT dalam mengembangkan fitur baru pada aplikasi internal Perusahaan (frontend & integrasi API dari NestJS), serta mendukung operasional sistem informasi Perusahaan agar berjalan optimal.",
          color: "#ED1C24",
        },
      ],
    },
    {
      title: "Organisasi",
      experiences: [
        {
          title: "Anggota",
          company: "Himpunan Mahasiswa Diploma Teknik Informatika (HMDTI)",
          company_url: "#",
          logo_path: "hmdti.png",
          duration: "2024 – 2025",
          location: "Semarang, Indonesia",
          description:
            "Berpartisipasi aktif dalam perencanaan dan pelaksanaan program kerja himpunan, workshop teknologi, dan kegiatan kemahasiswaan.",
          color: "#0077B5",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Beberapa proyek sistem web yang pernah saya kembangkan selama magang dan perkuliahan.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Projects List",
  description: "Daftar proyek frontend & fullstack web development.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Hubungi Saya",
    profile_image_path: "aldi_v1.png",
    description:
      "Saya terbuka untuk kesempatan kerja, proyek freelance, atau diskusi kolaborasi pengembangan web. Mari terhubung!",
  },
  blogSection: {
    title: "",
    subtitle: "",
    link: "#",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Lokasi",
    subtitle: "Semarang, Indonesia",
    locality: "Semarang",
    country: "Indonesia",
    region: "Jawa Tengah",
    postalCode: "",
    streetAddress: "Semarang",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.google.com",
  },
  phoneSection: {
    title: "Nomor Telepon",
    subtitle: "+62 822-4540-0182",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
