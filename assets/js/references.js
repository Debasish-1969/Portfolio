/*Reference Details Table*/
// Changes made 10/1/2021:
// Added reviewphoto1 - reviewphoto5 in assets/references-page
// Changed names and descriptions of references
const referenceTable = document.querySelector(".pain");

const references = [
  {
    sl1: 1,
    name1 : "Rishi Chaudhari",
        designation1 : "Ex - ML Intern, RDSO(Research Design and Standards Organisation)",
        image1 : "assets/images/references-page/rishi.png",
        message1 : "Debasish is a conscientious individual, his problem-solving skills and a keen interest in learning new skillsets are remarkable. His hardworking nature and team-building abilities make him different from others.",
        

        sl2:2,
        name2 : "Anshul Kaushal",
        designation2 : "ACM IKDD Uplink Intern, IIT Jodhpur", 
        image2: "assets/images/references-page/anshul.png",
        message2 : "Debasish has the best grasping skills I have seen in a new developer. I got to know him through a hackathon, and he made an exceptional growth during the competition. He made some incredible contributions and has good experience with Open Source.",
        
        
    },

    {
        sl1:3,
        name1 : "Shreyas",
        designation1 : "Ex-Trainee at TCIL-IT, Chandigarh",
        image1 : "assets/images/references-page/shreyas.png",
        message1 : "Debasish and I worked together during a hackathon and the thing that surprised me the most about him was his knowledge of fundamentals. He offered sincere help to the team throughout the competition. He is an impressive problem solver who is able to address complex issues strategically and confidently.",
        

        sl2:4,
        name2 : "Akash Kumar",
        designation2 : "Financial Analyst - AAKA Enterprises",
        image2 : "assets/images/references-page/akash.png",
        message2 : "Debasish and I have worked on several projects. Apart from technical skills, he also has good soft skills. He has good experience with debugging and has excellent leadership qualities",
  },
];

AOS.init();
const fillData = () => {
  let output = "";

  references.forEach(
    ({
      sl1,
      image1,
      name1,
      designation1,
      message1,
      absbox_for_linkedin1,
      sl2,
      image2,
      name2,
      designation2,
      message2,
      absbox_for_linkedin2,
    }) =>
      (output += `<tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image1}" class="rImg"></td>
                <td class = "referenceTitleName">
                    <div>
                        <span class="imgResponsive">
                            <img src="${image1}" class="imgRes">
                        </span>
                    </div>
                    <img src="https://img.icons8.com/fluency/48/000000/quote-left.png"/>
                    <a href="#0" class="paperTitle"> ${name1} </a> 
                    <div> ${designation1} </div> <div class="rConferences">  
                        <div class="referenceY">${message1}</div>
                    </div>  
                </td>
            </tr> 
            
            <tr data-aos="zoom-in-left"> 
                       
                        <td class = "referenceTitleName">
                            <div>
                                <span class="imgResponsive">
                                    <img src="${image2}" class="imgRes">
                                </span>
                            </div>
                            <img src="https://img.icons8.com/fluency/48/000000/quote-left.png"/>
                            <a href="#0" class="paperTitle">${name2} </a> 
                            <div> ${designation2} </div> <div class="rConferences">
                                <div class="referenceY">${message2}</div>
                            </div>
                
                            
                            
                           
                        </td>
                        <td class="imgCol"><img src="${image2}" class="rImg1"></td>
                    </tr>`)
  );
  referenceTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
