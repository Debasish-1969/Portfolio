AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Python for Data Science",
    cardImage: "assets/images/education-page/Data_Science.png",
    moocLink: "https://drive.google.com/file/d/1r_FgH5mmNtDeFx_sMyqrcZgr_W6lq7u-/view?usp=sharing",
  },
  {
    title: "Database Management System",
    cardImage: "assets/images/education-page/DBMS.png",
    moocLink: "https://drive.google.com/file/d/1vBMVdu62ZeLE5a7sy2FVdOmsAk5tNDCH/view?usp=sharing",
  },
  {
    title: "Software Engineering",
    cardImage: "assets/images/education-page/accenture.png",
    moocLink: "https://drive.google.com/file/d/1DCPBpmEWMZIYwvKN9JMxAtt-D2G6DXRU/view?usp=sharing",
  },
  {
    title: "Infosys Java foundation",
    cardImage: "assets/images/education-page/java_foundation.png",
    moocLink: "https://drive.google.com/file/d/1LASm_fIdW-h8ksUGtAhzNS0i7bNrZF7y/view?usp=sharing",
  },
  {
    title: "Java T point",
    cardImage: "assets/images/education-page/javaTpoint.png",
    moocLink: "https://drive.google.com/file/d/15-5lqLaFXi8D_ANyQlC1j3KiMzzy7X4D/view?usp=sharing",
  },
  {
    title: "Infosys nosql",
    cardImage: "assets/images/education-page/nosql.png",
    moocLink: "https://drive.google.com/file/d/1G7-5R-8sTMMmzA2qz0-GTsFeDQkbR9sG/view?usp=sharing",
  },
  {
    title: "Software Engineering & Agile Software Development ",
    cardImage: "assets/images/education-page/agile.png",
    moocLink: "https://drive.google.com/file/d/1V-I7CwHjtVrMwgr2LrkN_bdSWZI-T0qW/view?usp=sharing",
  },
  {
    title: "Accenture",
    cardImage: "assets/images/education-page/forage.png",
    moocLink: "https://moonshot.scaler.com/s/sl/yEB5YyHxYX",
  },
  {
    title: "Infosys DBMS-1",
    cardImage: "assets/images/education-page/dbms_1.png",
    moocLink:"https://drive.google.com/file/d/1BjxqU__aqC526wRFbcyt9l5n8WqZxl6v/view?usp=sharing",
  },
  {
    title: "Infosys DBMS-2",
    cardImage: "assets/images/education-page/dbms_2.png",
    moocLink: "https://drive.google.com/file/d/1nxNFMYQFiPIO6tRoM2bQxBMnqoxd2hwK/view?usp=sharing",
  },
  {
    title: "Microsoft-azure",
    cardImage: "assets/images/education-page/microsoft.png",
    moocLink: "https://drive.google.com/file/d/15ZNBASUaeOA6-nnsi6J-IG58OUJ21D_e/view?usp=sharing",
  },
  {
    title: "microsoft-power platform",
    cardImage: "assets/images/education-page/microsoft-power_platform.png",
    moocLink:
      "https://www.udacity.com/course/data-structures-and-algorithms-nanodegree--nd256",
  },
];

const experience = [
  {
    img: "assets/images/education-page/c1.png",
  },
  {
    img: "assets/images/education-page/c2.jpg",
  },
  {
    img: "assets/images/education-page/c3.png",
  },
  {
    img: "assets/images/education-page/c4.png",
  },
  {
    img: "assets/images/education-page/c5.jpg",
  },
];

let currentItem = 0;

const img = document.getElementById("image");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

window.addEventListener("DOMContentLoaded", function () {
  showExperience();
});

function showExperience() {
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
    const item = experience[currentItem];
    img.src = item.img;
    currentItem++;
  }, 3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
      (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

/* Badges*/

const bagdes = document.querySelector(".badges");
const badgesection = [
  {
    title: "Google Developer Essentials",
    image: "assets/images/education-page/badge1.png",
    description: "Earned May 20, 2020",
  },
  {
    title: "VM Migration",
    image: "assets/images/education-page/badge2.png",
    description: "Earned June 20, 2020",
  },
  {
    title: "G Suite Essentials",
    image: "assets/images/education-page/badge3.png",
    description: "Earned July 20, 2020",
  },
];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
      (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);

/* Timeline Section*/

$(function () {
  window.sr = ScrollReveal();

  if ($(window).width() < 768) {
    if ($(".timeline-content").hasClass("js--fadeInLeft")) {
      $(".timeline-content")
        .removeClass("js--fadeInLeft")
        .addClass("js--fadeInRight");
    }

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  } else {
    sr.reveal(".js--fadeInLeft", {
      origin: "left",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  }

  sr.reveal(".js--fadeInLeft", {
    origin: "left",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });

  sr.reveal(".js--fadeInRight", {
    origin: "right",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });
});
