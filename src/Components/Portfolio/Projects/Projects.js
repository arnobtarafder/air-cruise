// import React, { useEffect, useState } from "react";
// import { Container, Nav, Row } from "react-bootstrap";
// import AllProjects from "../fakeData/AllProjects";
// import "./../index.css";
// import SingleWork from "./SingleWork";

// const Portfolio = () => {
//     const [allWorks, setAllWorks] = useState([]);

//     useEffect(() => {
//         const featuredProjects = AllProjects.filter(
//             (item) => item.status === "featured"
//         );
//         setAllWorks(featuredProjects);
//     }, []);

//     const handleFilterBtnClick = (e) => {
//         const selectedProjects = AllProjects.filter(
//             (item) => item.category === e.target.value
//         );
//         setAllWorks(selectedProjects);
//     };

//     const handleAllBtnClick = (e) => {
//         setAllWorks(AllProjects);
//     };

//     return (
//         <section className="portfolio-container" name="portfolio" id="portfolio">
//             <div className="common pt-5" data-aos="fade-up">
//                 <h1 className="mainHeader mt-5">Projects I have Built</h1>
//                 <div className="commonBorder" />
//             </div>

//             <Container>
//                 <Row>
//                     {
//                         allWorks.map((work, index) => (
//                             <SingleWork work={work} key={index} />
//                         ))
//                     }
//                 </Row>
//             </Container>
//         </section>
//     );
// };

// export default Portfolio;
