// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "All courses taught at St. Olaf College unless specified",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-xanadu",
        
          title: "Xanadu",
        
        description: "Nope, not Rush. Olivia Newton-John and ELO",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/xanadu/";
          
        },
      },{id: "post-my-experience-in-dissertating",
        
          title: "My Experience in Dissertating",
        
        description: "The trials and tribulations of the end of a PhD",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/disertation/";
          
        },
      },{id: "post-the-academic-job-hunt",
        
          title: "The Academic Job Hunt",
        
        description: "My experience looking for a job",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/job_hunt/";
          
        },
      },{id: "post-big-wall-of-quotes",
        
          title: "Big Wall of Quotes",
        
        description: "Fun Quotes I&#39;ve heard in my time",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/quotes/";
          
        },
      },{id: "post-rejections-can-help",
        
          title: "Rejections Can Help",
        
        description: "Sometimes its good not to succeed on the first try",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/Rejections_Can_Help/";
          
        },
      },{id: "post-quals",
        
          title: "Quals",
        
        description: "A recounting of my qualification exam experience",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/quals/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-sibyl-improving-software-engineering-tools-with-smt-selection-was-accepted-at-icse-2023",
          title: '“Sibyl: Improving Software Engineering Tools with SMT Selection” was accepted at ICSE 2023!...',
          description: "",
          section: "News",},{id: "news-sibyl-improving-software-engineering-tools-with-smt-selection-was-selected-as-1-of-10-papers-to-earn-the-acm-sigsoft-distinguished-paper-award-at-icse-2023",
          title: '“Sibyl: Improving Software Engineering Tools with SMT Selection” was selected as 1 of...',
          description: "",
          section: "News",},{id: "news-i-passed-my-dissertation-proposal-now-i-gotta-do-what-i-promised-sweat-smile",
          title: 'I passed my dissertation proposal! Now I gotta do what I promised :sweat_smile:...',
          description: "",
          section: "News",},{id: "news-algorithm-selection-for-software-verification-using-graph-neural-networks-was-accepted-by-tosem-as-a-journal-first-paper-on-their-ai-for-se-track",
          title: '“Algorithm Selection for Software Verification using Graph Neural Networks” was accepted by TOSEM...',
          description: "",
          section: "News",},{id: "news-i-m-thrilled-to-announce-i-ve-accepted-an-tenure-track-position-in-the-math-statistics-and-computer-science-department-at-st-olaf-college",
          title: 'I’m thrilled to announce I’ve accepted an tenure-track position in the Math, Statistics,...',
          description: "",
          section: "News",},{id: "news-i-am-happy-to-report-i-have-passed-my-dissertation-defense-dr-leeson-reporting-for-duty",
          title: 'I am happy to report I have passed my dissertation defense! Dr. Leeson...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6C%65%65%73%6F%6E%32@%73%74%6F%6C%61%66.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/will-leeson", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-2403-9295", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=m7S5Ti8AAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
