import homeImage from "./assets/me.webp";
// ========================== Header Data
const headerIds = [
  "home",
  "profile",
  "education",
  "skills",
  "experience",
  "certificates",
];
const HeaderLinks = [
  {
    linkText: "Home",
    linkID: "home",
    boxIcon: "bx-home",
  },
  {
    linkText: "Profile",
    linkID: "profile",
    boxIcon: "bx-user",
  },
  {
    linkText: "Education",
    linkID: "education",
    boxIcon: "bx-book",
  },
  {
    linkText: "Skills",
    linkID: "skills",
    boxIcon: "bx-receipt",
  },
  {
    linkText: "Experience",
    linkID: "experience",
    boxIcon: "bx-briefcase-alt",
  },
  {
    linkText: "Certificates",
    linkID: "certificates",
    boxIcon: "bx-award",
  },
  //   {
  //     linkText: "References",
  //     linkID: "references",
  //     boxIcon: "bx-link-external",
  //   },
];

//  ===================================== Left Section Content =============================== //
// ========================== Home Data
const homeData = {
  homeImage,
  homeTitle1: "Mengli",
  homeTitle2: "Nurmamedova",
  homeProfession: "Web Developer",
  homeInformation: [
    {
      text: " Dormitory 7, Belarus, Minsk",
      icon: "bx-map",
    },
    {
      text: "menlinurmamedova7@gmail.com",
      icon: "bx-envelope",
    },
    {
      text: " +92 343 56877704",
      icon: "bx-phone",
    },
  ],
};

// ========================== Social Links
const socialLinks = {
  title: "works",
  links: [
    {
      link: "https://github.com/MelloLT/Todolist.git",
      text: "Todo List (Solid)",
    },
    {
      link: "https://github.com/MelloLT/Notion.git",
      text: "Notion",
    },
    {
      link: "https://github.com/MelloLT/API-SPA.git",
      text: "API & SPA",
    },
  ],
};

// ========================== Profile Data
const profileData = {
  title: "Profile",
  //   Here you can add as much paragraph as you can
  descriptions: [
    `I am a developer with an engineering mind and creativity is my passion. I am
        self-disciplined, highly motivated, having multi-tasking ability with polished
        technical skills.`,
    `I have experience in the freelance market as well as working with a small
        startup as a front end developer`,
  ],
};

// ========================= Education Data
const educationData = {
  title: "Education",
  educations: [
    {
      title: "Web Developer",
      studies: "Belarusian State University, Belarus",
      year: "2022 - Present",
      line: true,
    },
  ],
};

// ========================= Skills Data
const skillsData = {
  title: "Skills",
  //   Here you can add further skills array
  skills: [
    [`Html`, `Css`, `C++`],
    [`Python`, `React`, `Javascript`],
  ],
};
const logoText = "Mengli.";
const menuIcon = "bx-grid-alt";

//  ===================================== Right Section Content =============================== //

// ======================== Certificates Data
const certificatesData = {
  title: "Certificates",
  certificates: [
    {
      title: "Member of Technovation Girls",
      describe:
        "We Presented the idea of an application for rescuing homeless pets.",
    },
  ],
};

// ========================= Experience Data
const experienceData = {
  title: "Experience",
  experiences: [
    {
      title: "Front-end Developer",
      company: "2021 - 2022",
      describe:
        "Working as a Front-end developer at Technovation Girls – The global technology entrepreneurship.",
      line: true,
    },
  ],
};

// ========================= Languages Data
const languageData = {
  title: "Languages",
  languages: ["English", "Russian", "Turkmen"],
};

// ========================= INTERESTS Data
const interestsData = {
  title: "INTERESTS",
  interests: [
    {
      icon: "bxs-plane-alt",
      text: "Travel",
    },
    {
      icon: "bx-headphone",
      text: "Gaming",
    },
    {
      icon: "bx-book",
      text: "Reading",
    },
  ],
};
export {
  HeaderLinks,
  logoText,
  menuIcon,
  homeData,
  socialLinks,
  profileData,
  educationData,
  skillsData,
  certificatesData,
  experienceData,
  languageData,
  interestsData,
  headerIds,
};
