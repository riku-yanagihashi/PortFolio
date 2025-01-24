export const translations = {
  en: {
    home: "Home",
    about: "About",
    projects: "Projects",
    contact: "Contact",
    name: "Riku Yanagihashi",
    title: "Technical College Student",
    aboutMe: "About Me",
    aboutContent: `I am a high school student 
born and raised in Tokyo, currently studying programming.

I am 17 years old and in my second year of high school. Next year, 
I will be preparing for university entrance exams to pursue a degree in the humanities.

Backend: Java, Python, C#
Frontend: React, Next.js, Django, Flask, TailwindCSS
Virtual Environments: Docker, pyenv, venv
Version Control: GitHub`,
    getInTouch: "Get In Touch",
    connectMessage: "Interested in collaborating? Let's connect!",
    learnMore: "Learn more →",
    allRightsReserved: "All rights reserved.",
    skills: "Skills",
    technicalSkills: "Technical Skills",
    softSkills: "Soft Skills",
  },
  ja: {
    home: "Home",
    about: "About",
    projects: "Projects",
    contact: "Contact",
    name: "柳橋 莉空",
    title: "現役高専生",
    aboutMe: "About Me",
    aboutContent: `東京出身東京育ちのプログラミング勉強中の学生です。
現在17歳で高校二年生、来年は文系の大学を受験するために受験勉強も行っています。

バックエンド: Java, Python, C#
フロントエンド: React, Next.js, Django, Flask, TailwindCSS
仮想環境: Docker, pyenv, venv
バージョン管理: GitHub`,
    getInTouch: "Get In Touch",
    connectMessage: "お仕事の連絡などはこちらから",
    learnMore: "詳細を見る →",
    allRightsReserved: "全著作権所有。",
    skills: "Skills",
    technicalSkills: "技術スキル",
    softSkills: "ソフトスキル",
  },
};

export type TranslationKey = keyof typeof translations.en;
