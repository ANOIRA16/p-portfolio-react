import { ProjectItemType } from "@/types";

const projectPageConfig: ProjectItemType[] = [
  {
    title: "Test 1",
    iconUrl: "/images/projects/fullstack-blog-app/icon.png",
    iconDescription: "App icon",
    screenShotUrl: "/images/projects/fullstack-blog-app/image.png",
    screenShotDescription: "App's screenshot",
    link: "https://anoira16.github.io/kenzmedia/",
    type: "Web",
    date: "2023-10-09",
    keywords: ["Next.js", "Supabase", "TailwindCSS"],
    techStacks: [
      {
        title: "Core",
        stacks: ["Next.js", "Supabase", "App router", "Server Actions"],
      },
      {
        title: "UI",
        stacks: [
          "TailwindCSS",
          "Shadcn-UI",
          "HeadlessUI",
          "Radix-UI",
          "Novel",
          "Vaul",
        ],
      },
      {
        title: "Others",
        stacks: [
          "React-Hook-Forms",
          "React-Hot-Toast",
          "Zod",
          "Convertkit",
          "Nodemailer",
          "React-Emails",
        ],
      },
    ],
  },
  {
    title: "Test 2",
    iconUrl: "/images/projects/portfolio-app-02/icon.png",
    iconDescription: "App icon",
    screenShotUrl: "/images/projects/portfolio-app-02/screen.png",
    screenShotDescription: "App's screenshot",
    link: "https://github.com/timtbdev/Portfolio-App-2",
    type: "Android",
    date: "2019-10-01",
    keywords: ["Kotlin", "XML", "JavaScript"],
    techStacks: [
      {
        title: "Components",
        stacks: [
          "Single Activity",
          "Navigation",
          "LiveData",
          "ViewModel",
          "DataBinding",
          "Room",
          "WorkManager",
          "MotionLayout",
          "Paging",
        ],
      },
      {
        title: "Libraries",
        stacks: [
          "Koin",
          "Kotlin Coroutines",
          "Retrofit",
          "OkHttp",
          "Moshi",
          "Coil",
          "Leak Canary",
          "Timber",
        ],
      },
      {
        title: "Backend",
        stacks: ["Cloud Firestore", "Cloud Functions"],
      },
    ],
  },
  {
    title: "Test 3 ",
    iconUrl: "/images/projects/portfolio-app-01/icon.png",
    iconDescription: "App icon",
    screenShotUrl: "/images/projects/portfolio-app-01/screen.png",
    screenShotDescription: "App's screenshot",
    link: "https://github.com/timtbdev/Portfolio-App-1",
    type: "Android",
    date: "2019-08-01",
    keywords: ["Java", "Xml", "JavaScript"],
    techStacks: [
      {
        title: "Components",
        stacks: [
          "Multiple Activities",
          "Fragment",
          "AppCompat",
          "RecyclerView",
          "ViewPager",
        ],
      },
      {
        title: "Libraries",
        stacks: ["Retrofit", "OkHttp", "Gson", "Glide", "Butterknife"],
      },
      {
        title: "Backend",
        stacks: ["Cloud Firestore", "Cloud Functions"],
      },
    ],
  },
];

export default projectPageConfig;
