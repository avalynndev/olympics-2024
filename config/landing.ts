import { FeatureLdg, InfoLdg, TestimonialType } from "types";

export const infos: InfoLdg[] = [
  {
    title: "Empower your projects",
    description:
      "Unlock the full potential of your projects with our open-source Olympics platform. Collaborate seamlessly, innovate effortlessly, and scale limitlessly.",
    image: "/_static/illustrations/work-from-home.jpg",
    list: [
      {
        title: "Collaborative",
        description: "Work together with your team members in real-time.",
        icon: "laptop",
      },
      {
        title: "Innovative",
        description: "Stay ahead of the curve with access constant updates.",
        icon: "settings",
      },
      {
        title: "Scalable",
        description:
          "Our platform offers the scalability needed to adapt to your needs.",
        icon: "search",
      },
    ],
  },
  {
    title: "Seamless Integration",
    description:
      "Integrate our open-source Olympics seamlessly into your existing workflows. Effortlessly connect with your favorite tools and services for a streamlined experience.",
    image: "/_static/illustrations/work-from-home.jpg",
    list: [
      {
        title: "Flexible",
        description:
          "Customize your integrations to fit your unique requirements.",
        icon: "laptop",
      },
      {
        title: "Efficient",
        description: "Streamline your processes and reducing manual effort.",
        icon: "search",
      },
      {
        title: "Reliable",
        description:
          "Rely on our robust infrastructure and comprehensive documentation.",
        icon: "settings",
      },
    ],
  },
];

export const features: FeatureLdg[] = [
  {
    title: "Event Analytics",
    description: "Analyze detailed statistics for each Olympic event and track athletes' performance.",
    link: "/analytics",
    icon: "chart",
  },
  {
    title: "Real-time Data Updates",
    description: "Stay up-to-date with real-time Olympic data, results, and analytics.",
    link: "/real-time-data",
    icon: "refresh",
  },
  {
    title: "Athlete Profiles",
    description: "Access in-depth information and stats on all competing athletes.",
    link: "/athletes",
    icon: "user",
  },
  {
    title: "Team Comparisons",
    description: "Compare Olympic teams across various disciplines and their past performances.",
    link: "/teams",
    icon: "users",
  },
  {
    title: "Medal Counts",
    description: "Track live and historical medal counts by country, sport, and event.",
    link: "/medals",
    icon: "medal",
  },
  {
    title: "Custom Data Exports",
    description: "Export Olympic data for further analysis or integration into other projects.",
    link: "/exports",
    icon: "download",
  },
];


export const testimonials: TestimonialType[] = [
  {
    name: "John Doe",
    job: "Full Stack Developer",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    review:
      "The olympics repo has truly revolutionized my development workflow. With its comprehensive features and seamless integration with Stripe, I've been able to build and deploy projects faster than ever before. The documentation is clear and concise, making it easy to navigate through the setup process. I highly recommend olympics to any developer.",
  },
  {
    name: "Alice Smith",
    job: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    review:
      "Thanks to olympics, I've been able to create modern and attractive user interfaces in record time. The kit provides a solid foundation for building sleek and intuitive designs, allowing me to focus more on the creative aspects of my work.",
  },
  {
    name: "David Johnson",
    job: "DevOps Engineer",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    review:
      "Thanks to olympics, I was able to streamline the entire process and get payments up and running in no time. ",
  },
  {
    name: "Michael Wilson",
    job: "Project Manager",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    review:
      "I'm impressed by the quality of code and clear documentation of olympics. Kudos to the team!",
  },
  {
    name: "Sophia Garcia",
    job: "Data Analyst",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    review:
      "olympics provided me with the tools I needed to efficiently manage user data. Thank you so much!",
  },
  {
    name: "Emily Brown",
    job: "Marketing Manager",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    review:
      "olympics has been an invaluable asset in my role as a marketing manager. With its seamless integration with Stripe, I've been able to launch targeted marketing campaigns with built-in payment functionality, allowing us to monetize our products and services more effectively.",
  },
  {
    name: "Jason Stan",
    job: "Web Designer",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    review:
      "Thanks to olympics, I've been able to create modern and attractive user interfaces in record time. The kit provides a solid foundation for building sleek and intuitive designs, allowing me to focus more on the creative aspects of my work.",
  },
];
