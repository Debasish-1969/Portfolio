AOS.init(); //AOS (Animate On Scroll) library is initialized. This enables the scroll-based animation effects on elements that use data-aos attributes in the HTML.

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Software Development Intern",
    cardImage: "assets/images/experience-page/zidio.png",
    place: "Zidio Development",
    time: "(July, 2025 - present)",
    desp: "<li>Collaborating with the development team on real-world software projects and coding tasks.</li> <li>Gaining hands-on experience with version control, debugging, and issue tracking tools.</li> <li>Assisting in the development and enhancement of client-side or backend features.</li>",
  },
  {
    title: "Web developer Intern",
    cardImage: "assets/images/experience-page/VOC.png",
    place: "Vault Of Codes",
    time: "(July, 2025 - August, 2025)",
    desp: "<li>Working on frontend and responsive web design using HTML, CSS, JavaScript, and frameworks.</li><li>Building dynamic UI components and enhancing page performance, and learning how to integrate APIs and backend services into websites.</li><li>Participating in peer code reviews and task management workflows.",
  },
  {
    title: "Web Developer Intern",
    cardImage: "assets/images/experience-page/tamizhan_skills_.jpeg",
    place: "Tamizhan Skills",
    time: "(June, 2025 - 10th july, 2025)",
    desp: "<li>Developed and deployed multiple responsive websites for training purposes.</li><li>Designed and implemented interactive user interfaces and form handling.</li><li>Integrated animations and transitions to improve user experience.</li>",
  },

  {
    title: "Technical Content Writer",
    cardImage: "assets/images/experience-page/t point tech.png",
    place: "JavaTpoint",
    time: "(Feb, 2025 - Present)",
    desp: "<li>Authored 50+ technical articles and tutorials on Java, DBMS, OOPs, and other CS topics.</li><li>Explained complex technical concepts in beginner-friendly formats.</li><li>Optimized content for SEO and reader engagement.</li><li>Worked closely with the dev and content team to maintain editorial quality standards.</li>",
  },

  {
    title: "Machine Learning Intern/Trainee",
    cardImage: "assets/images/experience-page/web fictive.png",
    place: "Webfictive solution, Chandiagrh",
    time: "(May, 2024 - July 2024)",
    desp: "<li>Gained hands-on experience in ML algorithms and model training workflows.</li><li>Preprocessed datasets and applied supervised learning techniques in Python.</li><li>Built and evaluated simple ML models using libraries like Scikit-learn and Pandas.</li><li>Documented project findings and collaborated with mentors on model improvement.</li>",
  },
];

const showCards2 = () => {      /*Initializes a function showCards2 to build HTML dynamically.*/
  let output = "";              /*output is an empty string that will accumulate HTML content.*/
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">                                                
          <header>                                                
            <div class="title">                                         
              <h3>${title}</h3>                                                
            </div>                                                
            <p class="meta">                                                
              <span class="pre-heading">${place}</span><br>                                                
              <span class="author">${time}</span>                                                
            </p>                                                
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

// const volunteership = document.querySelector(".volunteership");
// const volunteershipcards = [
//   {
//     title: "GirlScript Summer Of Code 2020",
//     cardImage: "assets/images/experience-page/1.jpg",
//     description:
//       "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
//   },
//   {
//     title: "StudentCode-in 2020",
//     cardImage: "assets/images/experience-page/2.jpg",
//     description:
//       "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
//   },
//   {
//     title: "PClub Summer Of Code 2020",
//     cardImage: "assets/images/experience-page/3.jpg",
//     description:
//       "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
//   },
//   {
//     title: "Hakin-Codes",
//     cardImage: "assets/images/experience-page/4.jpg",
//     description:
//       "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
//   },
// ];

// const showCards = () => {
//   let output = "";
//   volunteershipcards.forEach(
//     ({ title, cardImage, description }) =>
//       (output += `        
//       <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
//       <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
//       <div class="content">
//           <h2 class="volunteerTitle">${title}</h2><br>
//           <p class="copy">${description}</p></div>
      
//       </div>
//       `)
//   );
//   volunteership.innerHTML = output;
// };
// document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Corporate & Relationship Head –  TPC 🧩",
    subtitle: "UIET Hoshiarpur, Panjab University, [2024–Present]",
    image: "assets/images/experience-page/tpc.png",
    desp: "Led the corporate outreach and relationship management initiatives of the Training and Placement Cell. Responsible for engaging with recruiters, organizing placement drives, and coordinating communication between companies and students",
    href: "https://www.linkedin.com/in/uiet-hoshiapur-tpc/",
  },
  {
    title: "Student Coordinator – NSS Unit 🤝",
    subtitle: "UIET Hoshiarpur, Panjab University, [2024–Present]",
    image: "assets/images/experience-page/nss.png",
    desp: "Acted as the primary link between volunteers, faculty, and external social organizations. Successfully led community outreach events, cleanliness drives, and social awareness campaigns. Demonstrated leadership in event planning and team coordination for socially impactful initiatives.",
    href: "https://nss.gov.in/",
  },
  {
    title: "Sports Fest/Event Coordinator 🏅 ",
    subtitle: "Annual College Sports Fest, [March 2025]",
    image: "assets/images/experience-page/sports.png",
    desp: "Organized inter-departmental and inter-college sports events, ensuring smooth logistics, team registrations, and scheduling. Oversaw on-field execution, volunteer management, and coordination with faculty and guests. Contributed to a high-energy, student-driven athletic experience.",
    href: "https://drive.google.com/file/d/1TWWYO-uwrdg5SZhz0qCrVpvVMGlbOO9R/view?usp=sharing",
  },
  {
    title: "Newsletter Editor – College Magazine/Newsletter Committee 📰 ",
    subtitle: "UIET Hoshiarpur, Panjab University, [2024–Present]",
    image: "assets/images/experience-page/news.png",
    desp: "Curated and edited official student newsletters featuring college highlights, achievements, and student voices. Worked closely with student writers and faculty to ensure content accuracy and publication timelines.",
    href: "https://www.canva.com/design/DAGRIS4a2sI/A-ebcz9XSihVObaOvv3Vog/edit?utm_content=DAGRIS4a2sI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  },
  {
    title: "Sports Achiever & Enthusiast ⚽ ",
    subtitle: "College-Level Achievements, [2023-2025]",
    image: "assets/images/experience-page/me.png",
    desp: "Represented college in multiple sporting events, earning accolades across athletics, team games, and inter-college tournaments. Known for discipline, sportsmanship, and commitment to fitness, contributing both as a player and a motivator in college sports culture.",
    href: "https://drive.google.com/file/d/1TWWYO-uwrdg5SZhz0qCrVpvVMGlbOO9R/view?usp=sharing",
  },
  // {
  //   title: "Hack-A-Solution",
  //   subtitle: "Judge",
  //   image: "assets/images/experience-page/hackasolution.png",
  //   desp: "Hack-a-Solution 2021 is a 24 hour long hackathon organized by Frisco students to raise awareness of world issues through technology.",
  //   href: "https://hackasolution.devpost.com/",
  // },
  // {
  //   title: "UniGlobe Hacks",
  //   subtitle: "Judge",
  //   image: "assets/images/experience-page/uniglobe.png",
  //   desp: "UniGlobe Hacks 2.0 is an upcoming 4-day long hackathon run by high school students held during 28-31 July 2021.",
  //   href: "https://uniglobe-hacks.devpost.com/",
  // },
  // {
  //   title: "AtlasHacks",
  //   subtitle: "Mentor",
  //   image: "assets/images/experience-page/atlas.png",
  //   desp: "AtlasHacks II is a 3-day virtual hackathon that aims to foster creativity within hackers all around the world.",
  //   href: "https://atlashacks2.devpost.com/",
  // },
  // {
  //   title: "NeoHacks",
  //   subtitle: "Judge",
  //   image: "assets/images/experience-page/neo.png",
  //   desp: "NeoHacks is an upcoming 48-hour hackathon taking place July 23-25, 2021 where hundreds of students from around the world will come together virtually to learn new skills, meet new friends, and build awesome projects. We provide beginner-friendly workshops, mentorship, fun games, and more.",
  //   href: "https://neohacks.org/",
  // },
  // {
  //   title: "Mission Inspired",
  //   subtitle: "Judge",
  //   image: "assets/images/experience-page/mission.png",
  //   desp: "InspireEd Hacks is a nationwide initiative organized by the student-for-student nonprofit, Mission InspirEd, challenging students ages 10-18 to synthesize their creativity and coding experience into a product beneficial to the educational community.",
  //   href: "https://www.missioninspired.org/hackathon",
  // },
  // {
  //   title: "Hack3",
  //   subtitle: "Judge",
  //   image: "assets/images/experience-page/hack3.png",
  //   desp: "Hack3 2021 is an upcoming global online hackathon that aims to enable high school students to learn computer science, with a broader message of (everyone can code) targeting underrepresented demographics to improve diversity and inclusion of individuals in the computer technology space.",
  //   href: "https://hack3.co/",
  // },
  // {
  //   title: "JITHack",
  //   subtitle: "Mentor",
  //   image: "assets/images/experience-page/jithack.png",
  //   desp: "JITHack is an upcoming virtual design and development hackathon organized by the students of Jyothy Institute of Technology, Bengaluru on June 26, 2021, where participants have 24 hours to build something incredible.",
  //   href: "https://jithack.netlify.app/",
  // },
  // {
  //   title: "Recess Hacks",
  //   subtitle: "Mentor",
  //   image: "assets/images/experience-page/recess.png",
  //   desp: "Recess Hacks is an upcoming hackathon for high school students in the Greater Toronto Area that strives to encourage innovation among high school students and get involved in technology.",
  //   href: "https://recesshacks.com/",
  // },
  // {
  //   title: "Citro Tech",
  //   subtitle: "Mentor",
  //   image: "assets/images/experience-page/citro.png",
  //   desp: "Citro Hacks 2021 is an upcoming all-inclusive online hackathon organized by Citro Tech, a student led organization dedicated to empowering minorities in the tech field</li>",
  //   href: "https://citro.tech/",
  // },
  // {
  //   title: "NHacks",
  //   subtitle: "Judge",
  //   image: "assets/images/experience-page/nhacks.png",
  //   desp: "NHacks VI was a hackathon that aimed to encourage students everywhere to develop skills in computer science by creating tangible products that they're proud of. It initially started as Michigan's largest high school hackathon.",
  //   href: "https://nhacks-vi.devpost.com/",
  // },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
