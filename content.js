/*
  CONTENT OF THE WEBSITE: this is the only file you need to edit.

  HOW TO UPDATE
  - Each line is one item. To add something, copy a line, paste it where you want it, and change the text.
  - In PROJECTS, EARLIER, PUBLICATIONS and TEACHING the parts of a line are separated by the | character.
  - Lines starting with # are notes and are ignored.
  - The page expects two files next to it: photo.jpg (your portrait) and cv.pdf (your CV for the Download CV button).
  - To add a link inside any text, write [text](https://address).
  - Do NOT use the ` character (backtick) inside the text. Leave the ` at the start and end of each block as they are.
*/

const CONTENT = {

// Year from which collaborations are coloured as "recent" on the map
mapSince: 2020,

// date | name | description | funder and role. Optional: add [PRISMA](https://...) at the end of the last column to link the project page.
projects: `
2026 – 2029 | ESTELA | intelligent workspace orchestrating productivity, performance and compliance in business processes | Junta de Andalucía. Principal investigator, with Adela del Río Ortega.
2023 – 2027 | TAPIOCA | hybrid intelligence for advanced support of business process compliance (PID2022-140221NB-I00) | Spanish Ministry of Science and Innovation. Principal investigator.
2022 – 2025 | [STATUS](https://www.status-compliance.com) | multi-domain compliance management system based on mashups (PDC2022-133521-I00) | Proof-of-concept project, Spanish Ministry of Science and Innovation. Principal investigator.
2019 – 2022 | CONFLEX | context-aware resource management in flexible process-oriented organisations (RTI2018-100763-J-I00) | Spanish Ministry of Science, Innovation and Universities. Principal investigator.
2017 – 2019 | [PRAIS](https://ai.wu.ac.at/prais-project/) | process- and resource-aware information systems (FWF Elise Richter) | Austrian Science Fund, Elise Richter programme. Principal investigator, WU Vienna.
`,

// name | web address (leave empty if none) | one-line description
tools: `
STATUS | https://www.status-compliance.com | Compliance monitoring system for business processes across domains, based on mashups.
VISCoPro | https://github.com/msurbano/VISCoPro | Prototype for the interactive handling of collections of directly-follows graphs: filtering, grouping, abstraction and pattern-based querying.
PPINOT | https://github.com/isa-group/ppinot | Definition and automated analysis of process performance indicators.
CRISTAL | https://www.isa.us.es/cristal/ | System for resource management in business processes, based on the Resource Assignment Language (RAL).
`,

// year | award | where or why
awards: `
2022 | Best Student Paper Award | BPM 2022
2022 | Best Demo Award | ICSOC 2022
2022 | Best work in progress | JCIS 2022
2022 | Third best paper of the Seville School of Computer Engineering |
2020 | Habilitation | WU Vienna, equivalent to the Spanish accreditation for full professor
2019 | Second best paper | CIbSE 2019
2019 | Research excellence awards | WU Vienna: for the PRAIS project and for articles in Enterprise Information Systems and ACM TMIS
2017 | Research excellence award | WU Vienna: for an article in Decision Support Systems
2016 | Research excellence award | WU Vienna: for an article in Information Systems
2015 | Research excellence award | WU Vienna: for the SHAPE project
Spain | Two six-year research periods recognised (sexenios) |
`,

// title | where and when | optional links, for example [DOI](https://doi.org/...) [PDF](https://...) [Code](https://github.com/...)
publications: `
Interactive creation, visualization, and exploration of process model collections | Software and Systems Modeling, 2026
A mashup-based framework for business process compliance checking | IEEE Transactions on Services Computing, 2022 | [DOI](https://doi.org/10.1109/TSC.2020.3001292)
Analyzing how process mining reports answer time performance questions | BPM 2022, Best Student Paper Award
Benchmarking Answer Set Programming systems for resource allocation in business processes | Expert Systems with Applications, 2022
The RALph miner for automated discovery and verification of resource-aware process models | Software and Systems Modeling, 2020 | [DOI](https://doi.org/10.1007/s10270-020-00820-7)
Blockchains for Business Process Management: challenges and opportunities | ACM Transactions on Management Information Systems, 2018 | [DOI](https://doi.org/10.1145/3183367)
Mining team compositions for collaborative work in business processes | Software and Systems Modeling, 2018 | [DOI](https://doi.org/10.1007/s10270-016-0567-4)
A framework for efficiently mining the organisational perspective of business processes | Decision Support Systems, 2016 | [DOI](https://doi.org/10.1016/j.dss.2016.06.012)
Specification and automated design-time analysis of the business process human resource perspective | Information Systems, 2015 | [DOI](https://doi.org/10.1016/j.is.2015.03.002)
`,

// label | text
teaching: `
Current courses | 2026–27 at the University of Seville: Information Systems Management, Process and Service Management, Requirements Engineering, and Software Engineering and Professional Practice.
International teaching | Bachelor’s and master’s courses at WU Vienna and UNIR, at St Petersburg University (Erasmus+), and a guest course in Ecuador (UCE/UTA).
Supervision | One doctoral thesis completed at WU Vienna (2022, with Axel Polleres) and three more co-supervised, two at Seville and one with Barbara Weber at the University of St Gallen. I have also supervised over a dozen bachelor’s and master’s theses at WU Vienna and UNIR, seven of them with industry partners.
Teaching innovation | Self-assessing test suites as lab exams, built with Spring Boot and GitHub (JENUI 2023).
# Add your current courses at Seville here, for example:
# Current courses | Name of course (degree), name of course (master’s).
`,

// ## starts a block with a title. A normal line is its paragraph. Lines starting with "- " go in a collapsible list.
service: `
## Community leadership
Program Committee Chair of BPM 2025 and General Chair of CAiSE 2027. Member of evaluation panels of the European Science Foundation and the Spanish State Research Agency, and of the AI4BIS joint research group on applied AI for business information systems (Ulysseus alliance).

## Organisation
Workshops, demo sessions and conference tracks at the main venues of the field.
- Workshop on Resource Management in Business Processes (ReMa) at BPM: Rio de Janeiro 2016, Barcelona 2017.
- Workshop on Resource Management in Service-Oriented Computing (RMSOC) at ICSOC: Paris 2014, Goa 2015.
- BPM Demos 2016 (Rio de Janeiro) and ER Forum and Demos 2017 (Valencia).
- QUATIC track on Quality Aspects in Business Processes (2018, 2019) and CBI track on Data Analytics (2017).

## Research stays
University of Trento (2010, 2011), Cupenya in Amsterdam (2016, 2017, RISE-BPM) and UNIRIO in Rio de Janeiro (2018).
`
};
