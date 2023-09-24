import React from "react";
import { useState } from "react";
import "./Careers.css";
import CareerBanner from "../Careers/career-banner.jpg";
import Footer from "../Footer/Footer";
const Careers = () => {
  // const [open, setOpen] = React.useState(false);
  // const openPage = () => {
  //   setOpen(true);
  // };
  // const closePage = () => {
  //   setOpen(false);
  // };
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted!");
  };

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const [open, setOpen] = React.useState(false);
  const openPage = () => {
    setOpen(true);
  };
  const closePage = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* section one */}
      <div className="career-container">
        <div
          className="img-career-container"
          style={{
            backgroundImage: `url(${CareerBanner})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            paddingTop: "42%",
            position: "relative",
            width: "100%",
          }}
        >
          <p id="bannerTextcareer">
            {" "}
            Join our mission to spread
            <span
              style={{
                color: "#00bfa5",
                fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
              }}
            >
              &nbsp; smiles
            </span>
          </p>
        </div>
      </div>
      {/* section two */}

      <div className="description-of-careers">
        <p className="des_pera">
          At Sukriti, we value social impact above all. We are a team of young,
          motivated people who share laughs, stories, ideas, and visions. Our
          culture is a rich blend of both the social enthusiasm of an NGO and
          the strong work ethic of a modern multinational. If you are as pumped
          up as we are to bring a social revolution, and to use your know-how to
          create a lasting impact on real lives, then we welcome you to be a
          part of our team.
        </p>
      </div>

      {/* section three */}
      <div className="crau_heading">
        <p className="crau_p">We’re looking for &nbsp; :</p>
      </div>

      {/* section four */}

      <div className="designators">
        {/* <ul className="ul_of_designators">
          <li className="li_of_designators">
            <p className="p_of_designators">Electronics CAD Engineer</p>
          </li>
          <li className="li_of_designators">
            <p className="p_of_designators">Chief Architect</p>
          </li>
          <li className="li_of_designators">
            <p className="p_of_designators">
              Embedded Hardware Design Engineer
            </p>
          </li>
          <li className="li_of_designators">
            <p className="p_of_designators">Embedded Firmware Engineer</p>
          </li>
          <li className="li_of_designators">
            <p className="p_of_designators">Embedded Design engineer</p>
          </li>
          <li className="li_of_designators">
            <p className="p_of_designators">After-Sales Engineer</p>
          </li>
          <li className="li_of_designators">
            <p className="p_of_designators">Project Manager</p>
          </li>
          <li className="li_of_designators">
            <p className="p_of_designators">Site Supervisor/Engineer</p>
          </li>
          <li className="li_of_designators">
            <p className="p_of_designators">Formwork Engineer</p>
          </li>
        </ul> */}
           <div className="tab-container">
          <ul className="tab-list">
            <li
              className={`tab-item ${activeTab === 0 ? "active" : ""}`}
              onClick={() => handleTabClick(0)}
            >
              <p className="p_of_designators">Electronics CAD Engineer</p>
            </li>
            <li
              className={`tab-item ${activeTab === 1 ? "active" : ""}`}
              onClick={() => handleTabClick(1)}
            >
              <p className="p_of_designators">Chief Architect</p>
            </li>
            <li
              className={`tab-item ${activeTab === 2 ? "active" : ""}`}
              onClick={() => handleTabClick(2)}
            >
              <p className="p_of_designators">
                Embedded Hardware Design Engineer
              </p>
            </li>
            <li
              className={`tab-item ${activeTab === 3 ? "active" : ""}`}
              onClick={() => handleTabClick(3)}
            >
              <p className="p_of_designators">Embedded Firmware Engineer</p>
            </li>
            <li
              className={`tab-item ${activeTab === 4 ? "active" : ""}`}
              onClick={() => handleTabClick(4)}
            >
              <p className="p_of_designators">Embedded Design engineer</p>
            </li>

            <li
              className={`tab-item ${activeTab === 5 ? "active" : ""}`}
              onClick={() => handleTabClick(5)}
            >
              <p className="p_of_designators">After-Sales Engineer</p>
            </li>
            <li
              className={`tab-item ${activeTab === 6 ? "active" : ""}`}
              onClick={() => handleTabClick(6)}
            >
              <p className="p_of_designators">Project Manager</p>
            </li>
            <li
              className={`tab-item ${activeTab === 7 ? "active" : ""}`}
              onClick={() => handleTabClick(7)}
            >
              <p className="p_of_designators">Site Supervisor/Engineer</p>
            </li>
            <li
              className={`tab-item ${activeTab === 8 ? "active" : ""}`}
              onClick={() => handleTabClick(8)}
            >
              <p className="p_of_designators">Formwork Engineer</p>
            </li>
          </ul>

          <button className="scroll-button scroll-left"></button>
          <button className="scroll-button scroll-right"></button>
           </div>

        <div>
        <div className="tab-content">
          {/* part one */}
          <div className={`tab-panel ${activeTab === 0 ? "active" : ""}`}> 

          <div className="engineers">
            <p className="resp_duties_h">Job Summary</p>
            <p className="resp_duties_h">Responsibilities and Duties</p>
            <p className="resp_duties_h">
              Person would be responsible for one or more of the following:
            </p>
            <ol type="number" className="resp_duties_pera">
              <li>Schematic capture in the tool</li>
              <li>CAD layout</li>
              <li>QA/QC/functional testing</li>
              <li>PCB assembling and rework</li>
              <li>Lab inventory management</li>
              <li>Assistance in component procurement</li>
            </ol>

            <p className="resp_duties_h">
              Required Experience, Skills and Qualifications
            </p>
            <ul className="resp_duties_pera">
              <li>Experience in field of schematics design and layout.</li>
              <li>
                Well versed with component reading and component creation in
                tool.
              </li>
              <li>
                Familiar with usage of various LAB instruments like soldering
                station, multimeter etc.
              </li>
              <li>Able to read the schematics.</li>
              <li>Able to work on OrCAD17 or higher or any other tool.</li>
              <li>Experience on MS-Office.</li>
              <li>
                Familiarity in understanding and executing various test
                documents.
              </li>
              <li>
                Experience in soldering, de-soldering and other PCB rework
                activities.
              </li>
              <li>
                Must be able to read the datasheet of given components and
                utilise it when needed.
              </li>
              <li>
                Candidate must have a knack to use his/her technical knowledge
                to give it back to society.
              </li>
              <li>
                Candidates must be open to work with communities to get feedback
                on product features so that products are best fit for social
                upliftment.
              </li>
              <li>
                Must have the ability to work closely with different teams to
                see end-to-end implementation of features/products.
              </li>
              <li>Candidates must be open to travel to remote locations.</li>
              <li>
                Analytical reasoning and fact-based brainstorming capabilities
                will be highly preferred.
              </li>
            </ul>
            <p className="resp_duties_add">
              Job Type: Full-time
              <br />
              Experience: 1-3 yrs
              <br />
              Mode of selection: assignment + F2F interviews
              <br />
              Location: Gurgaon
              <br />
              Please feel free to reach out in case of more information/any
              queries.
            </p>
          </div>
         
          </div>
          {/* part two */}
          <div className={`tab-panel ${activeTab === 1 ? "active" : ""}`}>
          <div className="engineers">
            <p className="resp_duties_h">
              Job Summary
            </p>
            <p className="resp_duties_h">Responsibilities and Duties</p>
            <p className="resp_duties_h"> Person would be responsible for one or more of the following:</p>
            <p className="resp_duties_summ">
              The primary job would be to lead the architectural division of the
              company. Work will be a mix of architectural and graphic
              designing. You will be required to work on planning and designing
              of public toilet and sewage treatment plants along with various
              ponds and water bodies rejuvenation project.{" "}
            </p>

            <p  className="resp_duties_h">
             Required Experience, Skills and Qualifications
            </p>
            <ul type="disc"  className="resp_duties_summ">
              <li>Proficient with software like:</li>
              <ul type="none">
                <li>AutoCAD</li>
                <li>SketchUp</li>
                <li>Lumion (Renders & Walkthrough)</li>
                <li>Photoshop/Illustrator</li>
                <li>After effects</li>
                <li>Adobe Premiere Pro</li>
              </ul>
              <li>
                Candidate must have a knack to use his/her technical knowledge
                to give it back to society.
              </li>
              <li>
                Candidate must be open to work with communities to get feedback
                on product features so that products are best fit for social
                upliftment.
              </li>
              <li>
                Must have the ability to work closely with different teams to
                see end-to-end implementation of features/products.
              </li>
              <li>Candidate must be open to travel to remote locations.</li>
              <li>
                Must have a diverse design portfolio that showcases
                understanding of human-centered design and good design aesthetic
              </li>
              <li>
                Must have real curiosity for user experience and crafting
                products that delight.
              </li>
              <li>
                Candidate must have the ability to work closely with different
                teams to see end-to-end implementation of features/products
              </li>
            </ul>
            <p className="resp_duties_add">
              <br />
              Job Type: Full-time
              <br />
              Experience: 1-3 yrs
              <br />
              Location: Gurgaon
              <br /><br/>
              Please feel free to reach out in case of more information/any
              queries.
            </p>
          </div> 
          </div>
          {/* part three */}
          <div className={`tab-panel ${activeTab === 2 ? "active" : ""}`}>
          <div className="engineers">
            <p className="resp_duties_h">
              Job Summary
            </p>
            <p className="resp_duties_h">
              Responsibilities and Duties
            </p>
            <p className="resp_duties_h">
             
                Person would be responsible for one or more of the following:
              
            </p>
            <ol type="number" className="resp_duties_pera">
              <li>Circuit-Designing for the given task</li>
              <li>Detailed hardware testing</li>
              <li>QA/QC testing of HW</li>
              <li>Schematic capture in the tool</li>
              <li>CAD layout</li>
            </ol>

            <p className="resp_duties_h">
             Required Experience, Skills and Qualifications
            </p>
            <ul type="disc" className="resp_duties_pera">
              <li>
                Experience in field of embedded system designing. Any experience
                in sanitation sector would be highly preferred. Freshers with
                exceptional skillsets could also be considered.
              </li>
              <li>
                Strong fundamentals of electronics (Digital and analog) are
                must.
              </li>
              <li>Well versed with circuit designing and HW debugging</li>
              <li>Able to read the schematics.</li>
              <li>
                Analog and Digital Circuit designing: familiarity with
                micro-controllers, memories, communication interfaces, op-amps,
                comparators, relays, inductors and capacitors, Handling EMI and
                Noise issues associated with circuits.
              </li>
              <li>
                Familiar with usage of various LAB instruments like CRO,
                multimeter etc.
              </li>
              <li>
                Understanding of Ethernet, wifi-modules will be preferred.
              </li>
              <li>
                Understanding of scientific methodologies of experimentation,
                data-gathering and interpretation and hypothesis.
              </li>
              <li>
                Understanding of basic architecture, debugging of sensors.
              </li>
              <li>Able to read the schematics and debug and design HW.</li>
              <li>Able to work on OrCAD17 or higher or any other tool.</li>
              <li>Experience on MS-Office.</li>
              <li>
                Candidate must have a knack to use his/her technical knowledge
                to give it back to society.
              </li>
              <li>
                Candidates must be open to work with communities to get feedback
                on product features so that products are best fit for social
                upliftment.
              </li>
              <li>Candidates must be open to travel to needy communities.</li>
              <li>
                Open to work in open startup culture and give his/her 100%.
              </li>
              <li>
                Analytical reasoning and fact-based brainstorming capabilities
                will be highly preferred.
              </li>
              <li>
                Technical problem-solving skills using a systematic approach.
              </li>
            </ul>
            <p  className="resp_duties_add">
              Job Type: Full-time
              <br />
              Experience: 1-4 yrs
              <br />
              Location: Gurgaon
              <br />
              Please feel free to reach out in case of more information/any
              queries.
            </p>
          </div>
          </div>
          {/* part four */}
          <div className={`tab-panel ${activeTab === 3 ? "active" : ""}`}>
          <div className="engineers">
            <p className="resp_duties_h">
              Job Summary
            </p>
            <p className="resp_duties_h">
              Responsibilities and Duties
            </p>
            <p className="resp_duties_h">Person would be responsible for one or more of the following:</p>
            <ol type="number" className="resp_duties_pera">
              <li>Circuit-Designing for the given task</li>
              <li>Detailed hardware testing.</li>
              <li>QA/QC testing of HW</li>
              <li>Software testing and development</li>
              <li>Field calibration, supervision and commissioning.</li>
            </ol>

            <p className="resp_duties_h">
             Required Experience, Skills and Qualifications
            </p>
            <p className="resp_duties_h">
             Technical Skills Needed:
            </p>
            <ul type="disc" className="resp_duties_pera">
              <li>
                Experience in field of embedded system designing. Any experience
                in sanitation sector would be highly preferred.{" "}
              </li>
              <li>
                Strong fundamentals of electronics (Digital and analog) are
                must.
              </li>
              <li>Well versed with circuit designing and HW debugging</li>
              <li>
                Analog and Digital Circuit designing: familiarity with
                micro-controllers, memories, communication interfaces, op-amps,
                comparators, relays, inductors and capacitors, Handling EMI and
                Noise issues associated with circuits.
              </li>
              <li>Able to work on OrCAD17 or higher or any other tool.</li>
              <li>
                Familiar with usage of various LAB instruments like CRO,
                multimeter etc.
              </li>
              <li>Experienced in embedded-C coding, memory allocations.</li>
              <li>
                Experience with any RTOS designing preferably with FreeRTOS at
                least with Semaphores, SW Timers, synchronisation and event
                handlings, task handling and prioritization.
              </li>
              <li>
                Understanding of micro-controller architecture, programming and
                debugging methodologies, interrupt-handling.
              </li>
              <li>
                Experience with any of the IDEs and debuggers for ARM
                architecture.
              </li>
              <li>
                Basic understanding of assembly programing of ARM architecture.
              </li>
              <li>
                Understanding of basic peripherals like UART, CAN, I2C, Timers,
                Counters, PWMs, ADCs, DAC.
              </li>
              <li>
                Understanding of Ethernet, wifi-modules will be preferred.
              </li>
              <li>
                Understanding of scientific methodologies of experimentation,
                data-gathering and interpretation and hypothesis.
              </li>
              <li>
                Understanding of basic architecture, debugging of sensors.
              </li>
              <li>
                Experience/knowledge in IoT devices (sensor, gateway, cloud)
                handling.
              </li>
              <li>Able to read the schematics and debug and design HW.</li>
              <li>Able to work on OrCAD17 or higher.</li>
              <li>Experience on MS-Office.</li>
            </ul>
            <p className="resp_duties_h">
              General Skills Needed:
            </p>
            <ul className="resp_duties_pera">
              <li>
                Candidate must have a knack to use his/her technical knowledge
                to give it back to society.
              </li>
              <li>
                Candidates must be open to work with communities to get feedback
                on product features so that products are best fit for social
                upliftment.
              </li>
              <li>Candidates must be open to travel to needy communities.</li>
              <li>
                Open to work in open startup culture and give his/her 100%.
              </li>
              <li>
                Analytical reasoning and fact-based brainstorming capabilities
                will be highly preferred.
              </li>
              <li>
                Technical problem-solving skills using a systematic approach.
              </li>
              <li>
                Ability to communicate ideas and flows through sketches and
                wireframes.
              </li>
              <li>Real curiosity for user experience and delight</li>
              <li>
                Ability to work closely with different teams to see end-to-end
                implementation of features/products
              </li>
            </ul>
            <p  className="resp_duties_add">
              <br />
              Job Type: Full-time
              <br />
              Experience: 1-4 yrs
              <br />
              Mode of selection: assignment + F2F interviews
              <br />
              Location: Gurgaon
              <br />
              Please feel free to reach out in case of more information/any
              queries.
            </p>
          </div>
          </div>
          {/* part five */}
          <div className={`tab-panel ${activeTab === 4 ? "active" : ""}`}>
          <div className="engineers">
            <p className="resp_duties_h">
             Job Summary
            </p>
            <p className="resp_duties_h">
              Responsibilities and Duties
            </p>
            <p className="resp_duties_h"> Person would be responsible for one or more of the following:</p>
            <ol type="number" className="resp_duties_pera" >
              <li>Circuit-Designing for the given task</li>
              <li>Detailed hardware testing.</li>
              <li>QA/QC testing of HW</li>
              <li>Software testing and development</li>
              <li>Field calibration, supervision and commissioning.</li>
            </ol>

            <p className="resp_duties_h">
              Required Experience, Skills and Qualifications
            </p>
            <p className="resp_duties_h">
             Technical Skills Needed:
            </p>
            <ul type="disc" className="resp_duties_pera">
              <li>
                Experience of 1-4 years in field of embedded system designing.
                Any experience in sanitation sector would be highly preferred.
                Freshers with exceptional skillsets could also be considered.
              </li>
              <li>
                Strong fundamentals of electronics (Digital and analog) are
                must.
              </li>
              <li>Well versed with circuit designing and HW debugging</li>
              <li>
                Analog and Digital Circuit designing: familiarity with
                micro-controllers, memories, communication interfaces, op-amps,
                comparators, relays, inductors and capacitors, Handling EMI and
                Noise issues associated with circuits.
              </li>

              <li>
                Familiar with usage of various LAB instruments like CRO,
                multimeter etc.
              </li>
              <li>Experienced in embedded-C coding, memory allocations.</li>
              <li>
                Experience with any RTOS designing preferably with FreeRTOS at
                least with Semaphores, SW Timers, synchronisation and event
                handlings, task handling and prioritization.
              </li>
              <li>
                Understanding of micro-controller architecture, programming and
                debugging methodologies, interrupt-handling.
              </li>
              <li>
                Experience with any of the IDEs and debuggers for ARM
                architecture.
              </li>
              <li>
                Basic understanding of assembly programing of ARM architecture.
              </li>
              <li>
                Understanding of basic peripherals like UART, CAN, I2C, Timers,
                Counters, PWMs, ADCs, DAC.
              </li>
              <li>
                Understanding of Ethernet, wifi-modules will be preferred.
              </li>
              <li>
                Understanding of scientific methodologies of experimentation,
                data-gathering and interpretation and hypothesis.
              </li>
              <li>
                Understanding of basic architecture, debugging of sensors.
              </li>
              <li>
                Experience/knowledge in IoT devices (sensor, gateway, cloud)
                handling.
              </li>
              <li>Able to read the schematics and debug and design HW.</li>
              <li>Able to work on OrCAD17 or higher.</li>
              <li>Experience on MS-Office.</li>
            </ul>
            <p className="resp_duties_h" >
             General Skills Needed:
            </p>
            <ul className="resp_duties_pera">
              <li>
                Candidate must have a knack to use his/her technical knowledge
                to give it back to society.
              </li>
              <li>
                Candidates must be open to work with communities to get feedback
                on product features so that products are best fit for social
                upliftment.
              </li>
              <li>Candidates must be open to travel to remote locations.</li>
              <li>
                Open to work in open startup culture and give his/her 100%.
              </li>
              <li>
                Analytical reasoning and fact-based brainstorming capabilities
                will be highly preferred.
              </li>
              <li>
                Technical problem-solving skills using a systematic approach.
              </li>
              <li>
                Ability to communicate ideas and flows through sketches and
                wireframes.
              </li>
              <li>Real curiosity for user experience and delight</li>
              <li>
                Ability to work closely with different teams to see end-to-end
                implementation of features/products
              </li>
            </ul>
            <p className="resp_duties_add">
              <br />
              Job Type: Full-time
              <br />
              Experience: 1-4 yrs
              <br />
              Mode of selection: assignment + F2F interviews
              <br />
              Location: Gurgaon
              <br />
              Please feel free to reach out in case of more information/any
              queries.
            </p>
          </div>
          </div>
          {/* part six */}
          <div className={`tab-panel ${activeTab === 5 ? "active" : ""}`}>
          <div className="engineers">
            <p className="resp_duties_h">
              Job Summary
            </p>
            <p className="resp_duties_summ">
              Once the product is installed in the field, we intend to monitor
              the performance of the system on the field. Also, consumers/users
              might face issues <br/>while the system is being field tested.
              After-sales engineer has an important role to play to successfully
              handle the grievances reported by consumer<br/> and provide resolution
              on the spot.
            </p>
            <p  className="resp_duties_h">
              Responsibilities and Duties
            </p>
            <p  className="resp_duties_h">
                Person would be responsible for one or more of the following:

            </p>
            <ol type="number" className="resp_duties_pera">
              <li>Analysing the post-sales performance of the system.</li>
              <li>
                Visiting client site to debug the issue reported by consumer.
              </li>
              <li>Satisfactorily handling consumer grievances.</li>
              <li>
                Preparing the detailed report of the visit, issues faced by the
                client and resolution taken.
              </li>
              <li>Understanding of the system and its components.</li>
              <li>Testing the system on-field after grievance handling.</li>
              <li>
                Detailed capturing of data from the systems already installed
                on-field.
              </li>
            </ol>

            <p  className="resp_duties_h">
           Required Experience, Skills and Qualifications
            </p>
            <ul type="disc"  className="resp_duties_pera">
              <li>
                Experience in field of embedded system testing. Any experience
                in sanitation sector would be highly preferred.{" "}
              </li>
              <li>
                Experience in field of embedded system testing. Any experience
                in sanitation sector would be highly preferred.{" "}
              </li>
              <li>Well versed with circuit designing and HW debugging</li>
              <li>
                Understanding of basic architecture, debugging of sensors.
              </li>
              <li>
                Experience/knowledge in IoT devices (sensor, gateway, cloud)
                handling.
              </li>
              <li>Able to read the schematics and debug and design HW.</li>
              <li>Experience on MS-Office.</li>
            </ul>
            <p className="resp_duties_h">
             General Skills Needed:
            </p>
            <ul className="resp_duties_pera">
              <li>
                Candidate must have a knack to use his/her technical knowledge
                to give it back to society.
              </li>
              <li>
                Candidates must be open to work with communities to get feedback
                on product features so that products are best fit for social
                upliftment.
              </li>
              <li>Candidates must be open to travel to remote locations.</li>
              <li>
                Candidates must find associated with the cause and mission of
                the company.
              </li>
              <li>
                Open to work in open startup culture and give his/her 100%.
              </li>
              <li>
                Analytical reasoning and fact-based brainstorming capabilities
                will be highly preferred.
              </li>
              <li>
                Technical problem-solving skills using a systematic approach.
              </li>
              <li>Real curiosity for user experience and delight</li>
              <li>
                Ability to work closely with different teams to see end-to-end
                implementation of features/products
              </li>
            </ul>

            <p className="resp_duties_add">
              <br />
              Job Type: Full-time
              <br />
              Experience: 0-3 yrs
              <br />
              Mode of selection: assignment + F2F interviews
              <br />
              Location: Gurgaon
              <br />
              Please feel free to reach out in case of more information/any
              queries.
            </p>
          </div>
          </div>
          {/* part seven */}
          <div className={`tab-panel ${activeTab === 6 ? "active" : ""}`}>
          <div className="engineers">
            <p className="resp_duties_h">
             Job Summary
            </p>
            <p className="resp_duties_h">
              Responsibilities and Duties
            </p>
            <p className="resp_duties_h">
             
                Person would be responsible for one or more of the following:
             
            </p>
            <ol type="number"  className="resp_duties_pera">
              <li>
                Project execution and delivery starting from the site
                demarcations till handover to the respective clients
              </li>
              <li>
                Site survey, Feasibility analysis and valuable inputs while
                proposal is in drafting phase
              </li>
              <li>Cost estimation of the projects</li>
              <li>
                Planning of execution, Co-ordination with architects /
                consultants, understanding of construction drawings, execution,
                BBS, monitoring, progress checking, safety, quality control,
                bill checking and payment
              </li>
              <li>BOQ for upcoming/ongoing project</li>
              <li>
                Material availability/ inhouse fabrication/ customised parts and
                their dispatch to sites timely
              </li>
              <li>Finalization of layout as per site conditions</li>
              <li>
                Construction supervision including safety, quality control and
                schedule management from client / owner side
              </li>
              <li>Softwares like Auto-Cad, SAP, Lumion/Sketch up etc.</li>
              <li>Vendor management and follow up</li>
              <li>
                Presentations to government bodies/ communication during project
                execution
              </li>
            </ol>

            <p className="resp_duties_h">
              Required Experience, Skills and Qualifications
            </p>
            <ul  className="resp_duties_pera">
              <li>
                B.Tech/B.E in Civil Engineering from prestigious Engineering
                college
              </li>

              <li>Good knowledge about Civil Engineering</li>

              <li>Good managerial skills</li>
              <li>Good communication skills in Hindi and English both</li>

              <li>
                Candidates who have done PG-MBA/ Construction Management
                professional course along with technical degree, would be
                preferred
              </li>
              <li>
                A person would be preferred if he has worked on aluminium
                formwork in high rise residential/commercial building
              </li>
            </ul>
            <p className="resp_duties_add">
              <br />
              Job Type: Full-time
              <br />
              Experience: 8 yrs
              <br />
              Mode of selection: assignment + F2F interviews
              <br />
              Location: Gurgaon
              <br />
              Please feel free to reach out in case of more information/any
              queries.
            </p>
          </div>
          </div>
          {/* part eight */}
          <div className={`tab-panel ${activeTab === 7 ? "active" : ""}`}>
          <div className="engineers">
           <p className="resp_duties_h">
              Job Summary
            </p>
            <p className="resp_duties_h">
              Responsibilities and Duties
            </p>
            <p className="resp_duties_h">
          
                Person would be responsible for one or more of the following:
        
            </p>
            <ol type="number"  className="resp_duties_pera">
              <li>Managing parts of construction projects</li>

              <li>Overseeing building work</li>

              <li>Undertaking surveys</li>

              <li>Setting out sites and organising facilities</li>

              <li>
                Checking technical designs and drawings to ensure that they are
                followed correctly
              </li>

              <li>Supervising contracted staff</li>

              <li>
                Ensuring projects meet agreed specifications, budgets or
                timescales
              </li>

              <li>
                Liaising with clients, subcontractors and other professional
                staff, especially quantity surveyors and the overall project
                manager
              </li>

              <li>Providing technical advice and solving problems on site</li>

              <li>Preparing site reports and filling in other paperwork</li>

              <li>
                Liaising with quantity surveyors about the ordering and
                negotiating the price of materials
              </li>

              <li>
                Ensuring that health and safety and sustainability policies and
                legislation are adhered to
              </li>
            </ol>

            <p className="resp_duties_h">
              Required Experience, Skills and Qualifications
            </p>
            <ul type="disc"  className="resp_duties_pera">
              <li>ITI Diploma/B.tech in Civil Engineering</li>
              <li>Field experience in construction</li>
              <li>Proficient with Hindi & English both</li>
              <li>Basic understanding of drawing, cost estimation etc.</li>
              <li>Good negotiation skills</li>
              <li>Comfortable with frequent travelling</li>
              <li>Adaptable to site conditions and locations</li>
            </ul>
            <p className="resp_duties_add">
              <br />
              Job Type: Full-time
              <br />
              Experience: 7 yrs
              <br />
              Mode of selection: assignment + F2F interviews
              <br />
              Location: Gurgaon
              <br />
              Please feel free to reach out in case of more information/any
              queries.
            </p>
          </div>
          </div>
          {/* part nine */}
          <div className={`tab-panel ${activeTab === 8 ? "active" : ""}`}>
          <div className="engineers">
            <p className="resp_duties_h">
              Job Summary
            </p>
            <p className="resp_duties_h">
              Responsibilities and Duties
            </p>
            <p className="resp_duties_h">Person would be responsible for one or more of the following:</p>
            <ol type="number" className="resp_duties_pera">
              <li>
                Work with the project team to develop cost effective shoring,
                reshoring and formwork systems for concrete structures.
              </li>
              <li>
                Design formwork systems for walls, columns, pilasters and
                climbing formwork systems.
              </li>
              <li>
                Design shoring and reshoring systems for elevated slabs and
                beams.
              </li>
              <li>
                Manage design process and provide direction to drafting staff.
              </li>
              <li>
                Assist Project Engineers with drafting RFI’s when required.
              </li>
              <li>Manage submittal process.</li>
              <li>
                Assists in forecasting material needs for formwork, shoring and
                reshoring.
              </li>
              <li>
                Our design system and process requires that the design engineer
                perform some drafting duties and drawing review in AutoCAD.<br/> A
                general working knowledge of AutoCAD is helpful, but not
                required; we will provide training.
              </li>
            </ol>

            <p className="resp_duties_h">
            Required Experience, Skills and Qualifications
            </p>
            <ul type="disc" className="resp_duties_pera">
              <li>
                B.Tech/B.E in Civil Engineering from prestigious Engineering
                college
              </li>

              <li>Good knowledge about Civil Engineering</li>

              <li>
                A person would be preferred if he has worked on aluminium
                formwork in high rise residential/commercial building
              </li>
            </ul>
            <p className="resp_duties_add">
              <br />
              Job Type: Full-time
              <br />
              Experience: 5 yrs(Minimum)
              <br />
              Mode of selection: assignment + F2F interviews
              <br />
              Location: Gurgaon
              <br />
              Please feel free to reach out in case of more information/any
              queries.
            </p>
          </div>
          </div>
        </div>
        </div>
      </div>
      {/* section five  */}
      <div className="btn-of-careers">
        <button
          onClick={openPage}
          type="button"
          className="apply_button"
          style={{ display: "block", padding: 30, marginLeft: "10%" }}
        >
          {" "}
          APPLY NOW
        </button>

        {open && (
          <div
            // style={{
            //   width: "50%",
            //   position: "absolute",
            //   marginLeft: "29%",
            //   marginTop: "-52%",
            //   backgroundColor: "white",
            // }}
            className="modal_content"
          >
            <div>
              <div className="modal_header">
              <h4>DETAILS</h4>
              </div>
              <button
                type="button"
                className="close_icon"
                onClick={closePage}
                data-dismiss="modal"
              >
                &times;
              </button>
            </div>
            <form action="Career.jsx" id="application-form" method="post">
              <div className="form-start">
                <div className="first_row_modal"
                  // style={{
                  //   display: "flex",
                  //   marginLeft: "10%",
                  //   marginTop: "10%",
                  // }}
                >
                  <div>
                    <label className="na_me" style={{ marginTop: "10%" }}>
                      First name
                    </label>
                    <input
                      type="text"
                      name="fname"
                      placeholder="name"
                      className="input_p"
                    />
                  </div>
                  <div>
                    <label className="na_me">Last name</label>
                    <input
                      type="text"
                      name="lname"
                      placeholder="last_name"
                      className="input_p"
                    />
                  </div>
                </div>

                <div className="first_row_modal"
                  // style={{
                  //   display: "flex",
                  //   marginLeft: "10%",
                  //   marginTop: "10%",
                  // }}
                >
                  <div>
                    
                      <label className="na_me">Email</label>
                      <input
                        type="text"
                        name="email"
                        placeholder="email"
                        className="input_p"
                      />
                   
                  </div>
                  <div>
                    <label className="na_me">Mobile No.</label>
                    <input
                      type="text"
                      name="mobile"
                      className="input_p"
                      placeholder="number"
                    />
                  </div>
                </div>
                <div className="form_check"
                style={{ marginTop: "10%" }} 
                >
                  <label className="na_me">Upload Resume</label>
                  <input type="file" name="fileToUpload" />
                

                <input type="hidden" name="postappliedfor"></input>
                </div>

              </div>

              <div>
                <button type="submit" className="submit_button">
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        )}
      </div>

      {/* section six */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Careers;
