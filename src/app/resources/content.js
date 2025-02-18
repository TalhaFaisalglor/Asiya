import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Talha",
  lastName: "Faisal",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Building clarity in a chaotic world. One client at a time.",
  avatar: "/images/avatar.jpg",
  location: "Asia/Karachi", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "French"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/TalhaFaisalglor",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:talhafaisalglor@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: (
    <>
    <span style={{ fontSize: "3rem", fontWeight: "bold" }}>Documentation Architect.</span>
    <br />
    <span style={{ fontSize: "2rem", fontWeight: "600" }}>Content Strategist.</span>
    <br />
    <span style={{ fontSize: "1.5rem", fontWeight: "500", opacity: 0.8 }}>Purist.</span>
  </>
),
  subline: (
    <>
      I don't just write. I build. I manage. I execute.
      <br />
      <br />
  
      From technical documentation to social media strategy, from content writing to full-scale business operations, 
      I've worked with hundreds of clients, handled over $1 million in transactions, and delivered results across industries.
      <br />
      <br />
  
      <strong>Need flawless documentation?</strong> Done.
      <br />
      <br />

      <strong>Want social media that actually grows?</strong> I make that happen.
      <br />
      <br />

      <strong>Need end-to-end content strategy, outsourcing, or business operations?</strong> I've got the network and the expertise.
      <br />
      <br />
  
      This isn't just my work. It's my craft.
    </>
  ),
};


const about = {
  label: "About",
  title: "About Us",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a documentation architect and business strategist, focused on turning complex information into structured, impactful resources. My expertise spans technical documentation, content strategy, and business operations, ensuring efficiency and scalability across industries. With a meticulous approach to clarity and organization, I create systems that enhance user experiences, streamline processes, and drive meaningful engagement.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Lumena Labs - Colorado, DEN",
        timeframe: "August 2023 - Current",
        role: "Technical Writer",
        achievements: [
          <>Managed end-to-end documentation for Lumena Cloud, including user guides, API documentation, and release notes, ensuring clarity and accessibility for developers and users.</>,
          <>Built a documentation platform using Eleventy, integrating detailed content for Lumena’s Spruce framework and maintaining consistency across all technical documents.</>,
          <>Developed training modules (Katas) for Spruce framework developers, covering core concepts, best practices, and hands-on coding exercises.</>,
        ],
        images: [],
      },
      {
        company: "Apexanalytix - Greensboro, NC",
        timeframe: "Jan 2023 - July 2023",
        role: "Technical Writer",
        achievements: [
          <>Created internal documentation for supplier management teams working with Fortune 500 clients, including IBM, Microsoft, and GE, streamlining their procurement and supply chain processes.</>,
          <>Authored user guides, training manuals, FAQs, and knowledge base articles, improving operational efficiency and knowledge transfer within Apexanalytix.</>,
        ],
        images: [],
      },
      {
        company: "IDENTOS - Toronto, ON",
        timeframe: "Aug 2022 - May 2023",
        role: "Technical Writer",
        achievements: [
          <>Developed and maintained developer documentation for IDENTOS’s digital identity and access management solutions, collaborating closely with product teams.</>,
          <>Led the creation of the FPX User-to-User Delegation guide, including detailed instructions, code samples, and diagrams to assist developers in implementing delegation workflows.</>,
        ],
        images: [],
      },
      {
        company: "Postman - San Francisco, CA",
        timeframe: "Dec 2022 - Feb 2023",
        role: "Content Developer",
        achievements: [
          <>Authored technical content including API documentation, user guides, and whitepapers, enhancing the Postman learning experience for developers and API consumers.</>,
          <>Developed training modules covering Postman’s advanced features, API testing, and collaboration tools, ensuring comprehensive coverage for users at all levels.</>,
        ],
        images: [],
      },
      {
        company: "Pitcher AG - Zurich, CH",
        timeframe: "Feb 2019 - Oct 2022",
        role: "Lead Technical Writer",
        achievements: [
          <>Managed a team of technical writers to produce high-quality documentation for Pitcher’s sales enablement platform, serving global clients such as Johnson & Johnson, Danone, and Abbott.</>,
          <>Produced user guides, API references, and troubleshooting manuals for Pitcher's mobile and web applications, ensuring users had clear, concise support materials.</>,
        ],
        images: [],
      },
      {
        company: "Diesel Laptops LLC - Irmo, SC",
        timeframe: "March 2017 - June 2019",
        role: "Technical Writer",
        achievements: [
          <>Developed comprehensive troubleshooting guides and product manuals for diesel diagnostic tools, collaborating with engineers to ensure technical accuracy.</>,
        ],
        images: [],
      },
      {
        company: "Saving for College - Miami, FL",
        timeframe: "2016 - 2018",
        role: "Lead Content Writer (Part-Time)",
        achievements: [
          <>Led content strategy and development for Google Workspace tutorials, creating engaging video scripts, blog posts, and user guides that simplified complex tools for a broad audience.</>,
        ],
        images: [],
      },
      {
        company: "Hoistup - New York, NY",
        timeframe: "2015 - 2016",
        role: "Technical Writer (Contract-Based)",
        achievements: [
          <>Created a comprehensive 144-lesson training program for painting contractors, covering business management, client relations, and service delivery.</>,
        ],
        images: [],
      },
      {
        company: "AutomationStop/DoSupply - Raleigh, NC",
        timeframe: "2014 - 2015",
        role: "Technical Writer (Contract-Based)",
        achievements: [
          <>Developed detailed product documentation for industrial automation equipment, including user manuals, technical specifications, and installation guides.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "NUML",
        description: <>Bachelor's in Mass Communication.</>,
      },
      {
        name: "Arizona State University",
        description: <>Micro Bachelor's in Technical Writing.</>,
      },
      {
        name: "Google Digital Garage",
        description: <>Certification in Digital Marketing and Content Strategy.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Technical Documentation Tools",
        description: <>Proficient in Docusaurus, Jekyll, Gatsby, Eleventy, GitBook, and other documentation platforms.</>,
        images: [],
      },
      {
        title: "Web Development & Content Management",
        description: <>Skilled in Next.js, Once UI, Markdown, Git, and headless CMS platforms for building and managing documentation sites.</>,
        images: [],
      },
      {
        title: "Content Strategy & Management",
        description: <>Experienced in content planning, editorial workflows, and ensuring content consistency across large-scale projects.</>,
        images: [],
      },
    ],
  },
};
  

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
