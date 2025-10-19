import React from "react";

const experienceDetails = [
  {
    id: 1,
    year: "Jun 2023 – Present",
    position: "Senior Full Stack Developer (Team Lead)",
    companyInfo: {
      companyName: "Binny’s Jewellery Private Limited",
      companyDetails: `Binny’s Jewellery Private Limited specializes in crafting bespoke jewellery pieces tailored to each customer’s unique style and preferences. From elegant designs to personalized creations, we bring your jewellery dreams to life with precision and artistry.`,
      workingDetails: [
        {
          info: 1,
          details: `Developed a scalable B2B product using React.js and Node.js, building clean, reusable components while ensuring optimal
                     performance and scalability.`,
        },
        {
          info: 2,
          details: `Implemented role-based authentication and authorization in the backend using Node.js and JWT tokens, securing APIs and
                     enforcing security best practices to protect user data.`,
        },
        {
          info: 3,
          details: `Optimized state management using React Hooks and Context API to reduce re-renders and improve efficiency.`,
        },
        {
          info: 4,
          details: `Enhanced front-end performance with code splitting, lazy loading, and bundle size reduction to improve software
                     reliability.`,
        },
      ],
      projectInCompany: [
        {
          project: 1,
          title: "Binny’s Vision Dashboard",
          projectLink: `https://vision.binnys.app`,
        },
        {
          project: 3,
          title: "Binny’s Select Portal",
          projectLink: `https://select.binnys.app`,
        },
        {
          project: 5,
          title: "Binny’s Create Portal",
          projectLink: `https://create.binnys.app`,
        },
        {
          project: 4,
          title: "My Binny’s App",
          projectLink: `https://play.google.com/store/apps/details?id=com.binnysapp.mybinnys&pcampaignid=web_share`,
        },
        {
          project: 2,
          title: "Binny’s Scan Application",
          projectLink: `https://play.google.com/store/apps/details?id=com.binnysapp.binnysscan&pcampaignid=web_share`,
        },
      ],
      companyWebSiteLink: `https://binnysjewellery.com/`,
      tileCompnayLink: "Company Link",
    },
    skills: `REST APIs · JavaScript · Express.js · Object-Oriented Programming (OOP) · HTML · Moongo-DB · Node.js · React.js · Postomn`,
  },
  {
    id: 2,
    year: "Jun 2022 – May 2023",
    position: "Junior MERN Full Stack Developer",
    companyInfo: {
      companyName: "Save-Eat Foods Private Limited",
      companyDetails: `At SaveEat, we share a common goal of 🌱 creating a zero food waste India. Together, we can benefit the 🍴 customers, the 🍽️ restaurants, and the 🌍 planet. Let's join hands 👫 for a better future.`,
      workingDetails: [
        {
          info: 1,
          details: `Developed a comprehensive BrandPanel system tailored for restaurant owners, facilitating efficient management of branding assets and strategies.`,
        },
        {
          info: 2,
          details: `Engineered an intuitive Admin Panel empowering company officials to oversee all aspects of restaurant operations seamlessly.`,
        },
        {
          info: 3,
          details: `Successfully crafted a website for Binnys Jewelry, a subsidiary of Save Eat, ensuring an engaging online presence and seamless user experience.`,
        },
        {
          info: 4,
          details: `Provided robust backend support for the Save Eat user application, collaborating closely with React Native developers to integrate seamlessly functioning APIs.`,
        },
      ],
      projectInCompany: [
        // {
        //   project: 1,
        //   title: "Brand Panle",
        //   projectLink: `http://businessportal.saveeat.in/`,
        // },
        // {
        //   project: 2,
        //   title: "Binnys Jewellary",
        //   projectLink: `https://binnysjewellery.com/`,
        // },
      ],
      companyWebSiteLink: `https://saveeat.in/`,
      tileCompnayLink: "Company Link",
    },
    skills: `REST APIs · JavaScript · Express.js · Object-Oriented Programming (OOP) · HTML · Moongo-DB · Node.js · React.js · Postomn`,
  },
  {
    id: 3,
    year: "Jun 2020 – April 2023",
    position: "Full Stack Developer",
    companyInfo: {
      companyName: "Freelance | Self Employed",
      companyDetails: `Worked as a freelance software developer specializing in Core Java, Advanced Java, MySQL Database, 
        JavaScript, RESTful API, Postman, React.js, TypeScript, .NET Core, ASP.NET Core, ADO.NET, and Node.js.`,
      workingDetails: [
        {
          info: 1,
          details: `Resolved technical issues promptly to ensure high-quality project delivery.`,
        },
        {
          info: 2,
          details: `Developed scalable applications using Core Java, Advanced Java, and MySQL Database.`,
        },
        {
          info: 3,
          details: `Created interactive user interfaces using JavaScript and React.js.`,
        },
        {
          info: 4,
          details: `Designed and implemented RESTful APIs, ensuring seamless communication between systems.`,
        },
        {
          info: 5,
          details: `Conducted API testing and documentation using Postman.`,
        },
        {
          info: 6,
          details: `Collaborated with clients to gather requirements and deliver customized solutions.`,
        },
        {
          info: 7,
          details: `Utilized TypeScript for enhanced code quality and maintainability.`,
        },
        {
          info: 8,
          details: `Built server-side applications and APIs with Node.js.`,
        },
        {
          info: 9,
          details: `Resolved technical issues promptly to ensure high-quality project delivery.`,
        },
      ],
      projectInCompany: [
        {
          project: 1,
          projectLink: `Project-1 Link`,
        },
        {
          project: 2,
          projectLink: `Project-2 Link`,
        },
      ],
      companyWebSiteLink: `https://chetanbnagmoti.github.io/My_Profile_Web/`,
      tileCompnayLink: "Company Link",
    },
    skills: `Spring Boot · ASP.NET MVC · REST APIs · C# · Java · JavaScript · Express.js · Object-Oriented Programming (OOP) · HTML · MySQL · Node.js · React.js · Maven`,
  },
];

const Experiencs = () => {
  return (
    <>
      <div className="col-lg-12 text-center resume mb-5">
        <h1 className="pt-5 pb-2">Experience</h1>
        <hr className="custom-hr" />
        <div className="container mt-5">
          <div className="row justify-content-center">
            {experienceDetails &&
              experienceDetails.map((experienc) => (
                <div
                  key={experienc.id + experienc.companyInfo.companyName}
                  className="col-lg-6 col-md-12 mb-3"
                >
                  <div
                    className="card text-white bg-dark shadow-lg"
                    style={{ maxWidth: "100%" }}
                  >
                    <div className="card-body ">
                      <h3 className="card-title text-left">{experienc.year}</h3>
                      <h4 className="card-subtitle mb-2 text-warning text-left">
                        {experienc.position}
                      </h4>
                      <h6 className="card-subtitle mb-2 text-muted text-left">
                        {experienc.companyInfo.companyName}
                      </h6>
                      <p className="card-text text-left text-secondary ">
                        {experienc.companyInfo.companyDetails}
                      </p>
                      <div className=" text-muted text-left">
                        <ul className="">
                          {experienc.companyInfo.workingDetails.map(
                            (work, index) => (
                              <li key={work.info + index * 2} className="">
                                {work.details}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                      <div class=" text-left d-flex flex-column">
                        {experienc.companyInfo.projectInCompany.map(
                          (projectLink, index) => (
                            <a
                              key={`${
                                projectLink.project +
                                projectLink.projectLink +
                                index
                              }`}
                              href={`${projectLink.projectLink}`}
                              class="text-warning"
                              target="_blank"
                            >
                              {projectLink.title}
                            </a>
                          )
                        )}
                        <a
                          href={`${experienc.companyInfo.companyWebSiteLink}`}
                          class="text-info"
                          target="_blank"
                        >
                          {experienc.companyInfo.tileCompnayLink}
                        </a>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="text-warning">** Skills Build **</div>
                      <div className="text-success text-left">
                        {experienc.skills}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Experiencs;
