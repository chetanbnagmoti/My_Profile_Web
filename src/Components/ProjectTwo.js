import React from 'react'
import airport from "../accets/images/homepage.jpg";
import brand from "../accets/images/BrandPanle.PNG";

const projects = [
  {
    id: 1,
    title: "Binnys Jewellary Web-Site",
    skills: "React.js, Framer Motion, Three.js, Bootstrap",
    duration: "2024 Jan To Present",
    link: "https://binnysgroups.netlify.app/",
    description:
      "This website is developed for Binny's Jewelry, a company specializing in high-quality jewelry. The site showcases a wide range of jewelry items using modern web technologies.",
    imageUrl:
      "https://cfw42.rabbitloader.xyz/eyJjIjp0cnVlLCJoIjoiYnJpamRlc2lnbnN0dWRpby5jb20iLCJ2IjozMTMxNDg4NTM0LCJpIjoiNDllNjE3MTUtYjRhZC00OTA0LWZiYzktNjQyNzNlZDk2MzAwIn0/wp-content/uploads/2024/04/1-1.webp",
  },
  {
    id: 2,
    title: "Brand Panel for Restaurant",
    skills: "React.js, Node.js, Express.js, Material UI, MSG-91, Nodemailer, Bootstrap",
    duration: "2023 Aug To Present",
    link: "http://businessportal.saveeat.in/",
    description: "This dashboard is used by restaurants to manage their brand. It allows restaurants to add their products, manage choices, apply discounts, and more.",
    imageUrl: brand
  },
  {
    id: 3,
    title: "Pizza Delivery System",
    skills: "Node.js, React.js, Express.js, MongooDB, Socket.io, Nodemailer, RazorPay",
    duration: "June 2023 to Present",
    link: "https://pizzaappchetannagmoti.netlify.app/",
    description:
      "A convenient solution for ordering your favorite pizzas online. Enjoy quick delivery and delicious flavors right at your doorstep",
    imageUrl:
      "https://www.shutterstock.com/shutterstock/photos/1427946764/display_1500/stock-vector-pepperoni-pizza-ads-with-delicious-ingredients-on-chalkboard-background-in-d-illustration-1427946764.jpg", // Assuming airport is the variable holding the image URL
  },
  {
    id: 4,
    title: "Alumni Management System",
    skills: "Node.js, React.js, Express.js, MongooDB",
    duration: "June 2023 to Present",
    link: "https://aluminimanagementsystemchetannagmoti.netlify.app",
    description:
      "Streamline alumni relations with comprehensive features for communication, events, donations, and networking.",
    imageUrl:
      "https://itechindia.co/wp-content/uploads/2020/01/Blog-Image-2.png"
  },
  {
    id: 5,
    title: "Student Management System API",
    skills: "Spring Boot, Java, API",
    duration: "",
    link: "https://github.com/chetanbnagmoti/Students_CURD_API-",
    description:
      "Manage student data, grades, schedules, and more seamlessly. Enhance efficiency and organization in your institution with our solution",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMPU2Jj24Iqhj9GQgBTEdXXXv6FouJdkKcWqtlHfio5Ohbu-jEP0Xy5omv2ZcAzktfHFU&usqp=CAU",
  },
  {
    id: 6,
    title: "Calculator",
    skills: "JavaScript, HTML, CSS.",
    duration: "",
    link: "https://chetanbnagmoti.github.io/Calculator_HTML_CSS_JavaScript/",
    description:
      "Boost productivity with our efficient solution. Utilize it for streamlined tasks, enhancing workflow,maximizing results across various domains",
    imageUrl:
      "https://st2.depositphotos.com/39463116/46134/i/450/depositphotos_461343064-stock-photo-word-inscription-project-business-financial.jpg", // Assuming airport is the variable holding the image URL
  },
  {
    id: 7,
    title: "Weather_App",
    skills: "HTML, CSS, Bootstrap, and JavaScript. It leverages a third-party OpenWeatherMap API to provide real-time weather information to users.",
    duration: "Sep 2022 to Mar 2023",
    link: "https://chetanbnagmoti.github.io/Weather_App/",
    description:
      "Accurate forecasts, real-time updates, and intuitive design make it easy to plan your day, no matter where you are.",
    imageUrl:
      "https://st.depositphotos.com/1258191/57393/i/450/depositphotos_573937116-stock-photo-hand-holding-smartphone-weather-forecast.jpg", // Assuming airport is the variable holding the image URL
  },
  {
    id: 8,
    title: "Airline Reservation System",
    skills: "Spring Boot, My-SQL, HTML, CSS, React JS, Bootstrap, Email.js and Axios",
    duration: "Sep 2022 to Mar 2023",
    link: "https://github.com/chetanbnagmoti/CDAC-PROJECT-SEP-2022",
    description:
      "Book flights, manage reservations, and enjoy hassle-free journey arrangements, ensuring convenience and satisfaction for every passenger.",
    imageUrl: airport, // Assuming airport is the variable holding the image URL
  },
  // Add more projects as needed
];


const ProjectTwo = () => {
  return (
   <>
   <div className="col-lg-12 text-center resume mb-5">
            <h1 className="pt-5 pb-2">Projects</h1>
            <hr className="custom-hr" />
            <p>
              Below are the sample Data Analytics projects on Spring Boot, Java, API, Node.js, React.js, Express.js, Mongoo-Db, My-SQL, HTML, CSS.
            </p>
            <div className="container mt-5">
              <div className="row justify-content-center">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="col-lg-4 col-md-6 mb-3 d-flex justify-content-center"
                  >
                    <div
                      className="text-white bg-dark shadow-lg"
                      style={{ maxWidth: "100%" }}
                    >
                      <img
                        src={project.imageUrl}
                        className="card-img-top "
                        alt="..."
                        style={{ height: "200px" }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{project.title}</h5>
                       
                        <p className="card-text text-muted">
                          {project.description}
                        </p>
                        <a href={project.link} className="btn  btn-outline-warning" target="_blank">
                          Visit
                        </a>
                        
                         <p className="card-text text-muted text-left mt-2">Skill Used:- {project.skills}</p>
                     
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
   </div>
   
   </>
  )
}

export default ProjectTwo