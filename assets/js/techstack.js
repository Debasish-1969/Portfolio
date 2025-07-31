AOS.init();

//  Tech Stacks cards

const techStackCards = document.querySelector(".techstack-box");
const techStack = [
  {
    langImage: "assets/images/techstack-page/html.png",
    langName: "HyperText Markup Language",
    langDesc: "<li>The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser</li>",
  },
  {
    langImage: "assets/images/techstack-page/css.png",
    langName: "Cascading Style Sheets",
    langDesc: "<li>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML</li>",
  },
  {
    langImage: "assets/images/techstack-page/javascript.png",
    langName: "JavaScript",
    langDesc: "<li>JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS</li>",
  },
  {
    langImage: "assets/images/techstack-page/node.png",
    langName: "Node",
    langDesc: "<li>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser</li>",
  },
  {
    langImage: "assets/images/techstack-page/python.png",
    langName: "Python",
    langDesc: "<li>Python is an interpreted high-level general-purpose programming language</li>",
  },
  {
    langImage: "assets/images/techstack-page/java.png",
    langName: "Java",
    langDesc: "<li>Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.</li>",
  },
  {
    langImage: "assets/images/techstack-page/git.png",
    langName: "Git",
    langDesc: "<li>Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.</li>",
  },
  {
    langImage: "assets/images/techstack-page/bootstrap.png",
    langName: "Bootstrap",
    langDesc: "<li>Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development</li>",
  },
  {
    langImage: "assets/images/techstack-page/react.png",
    langName: "React",
    langDesc: "<li>React is a free and open-source front-end JavaScript library for building user interfaces based on UI components</li>",
  },
  {
    langImage:"assets/images/techstack-page/next.png",
    langName:"Next.js",
    langDesc:"<li>Next.js is an open-source React framework developed by Vercel that enables the creation of highly performant and SEO-friendly web applications.</li>"
  },
  {
    langImage:"assets/images/techstack-page/sql.png",
    langName:"MySQL",
    langDesc:"<li>MySQL is a widely used and popular open-source relational database management system (RDBMS) that utilizes Structured Query Language (SQL) for storing, managing, and retrieving data. </li>"
  },
  {
    langImage:"assets/images/techstack-page/postgre.png",
    langName:"PostgreSQL",
    langDesc:"<li>PostgreSQL is a powerful, open-source object-relational database management system (ORDBMS). It is known for its robust features, reliability, and performance, particularly when handling complex queries and large datasets.</li>"
  },
  {
    langImage:"assets/images/techstack-page/mongodb.png",
    langName:"MongoDB",
    langDesc:"<li>MongoDB is an open-source, non-relational database management system (DBMS) that stores data in flexible, JSON-like documents.</li>"
  },
  {
    langImage:"assets/images/techstack-page/firebase.png",
    langName:"Firebase Authentication",
    langDesc:"<li>Firebase Authentication is a backend service provided by Google Firebase that simplifies the process of authenticating users in applications.</li>"
  },
  {
    langImage:"assets/images/techstack-page/vercel.png",
    langName:"Vercel",
    langDesc:"<li>Vercel is a cloud platform that provides developer tools and infrastructure to build, deploy, and scale web applications and websites.</li>"
  },
];

const displayTechStacksCards = () => {
  const entireCardTemplate =
  techStack.map((stack)=> {
      return `        
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
        <div class="tech_card">
            <div class="card_img">
                <img src ="${stack.langImage}" class="featured_image">
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
                <ul class="description">
                ${stack.langDesc}
            </ul>
            </div>
        </div>
    </div>
      `}).join('');
  techStackCards.innerHTML = entireCardTemplate;
};
// displayTechStacksCards(techStack)
document.addEventListener("DOMContentLoaded", displayTechStacksCards);
