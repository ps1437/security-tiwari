import { RatingProps, Service } from "@/types";

const Works = [
  {
    name: "Tax Returns Filed",
    count: 234
  },
  {
    name: "Audits Completed",
    count: 56
  },
  {
    name: "Financial Statements Prepared",
    count: 123
  },
  {
    name: "Consultations Conducted",
    count: 98
  }
];


const WorkCulture = {
  description: "Established in 2011, TIWARIJI SECURITY SERVICES is a premier security agency based in Hyderabad, Telangana, India. Specializing in professional Bouncer Security Services, our expertise extends to a wide range of venues and events, catering to both National and International clients. With a focus on ensuring safety and security, our services are tailored to meet the specific needs of our clientele, including:",
  oneLineInfo: "Precision, Expertise, Personalized Attention",
  points: [
    { number: '-', description: "Offering security personnel for diverse venues/events: national/international events, clubs, discos, lounges, bars, hotels, road shows, corporate events, VIPs." },
    { number: '-', description: "Customized security solutions to suit the unique requirements of each client." },
    { number: '-', description: "Promoted by individuals with over 8 years of experience in bouncer security services." },
    { number: '-', description: "Comprehensive security arrangements to safeguard venues and ensure the safety of attendees." },
    { number: '-', description: "Dedicated focus on intelligence-led security measures to address potential risks effectively." }
  ]
};

const Services = [
  {
    id: 1,
    name: "Chief Security Officer Services",
    description: "High-level security management services provided by experienced professionals to oversee and coordinate all security operations, ensuring comprehensive protection for your organization."
  },
  {
    id: 2,
    name: "Security Officer Services",
    description: "Trained security personnel to enforce security protocols, conduct patrols, and respond to incidents, maintaining a safe and secure environment for your premises, assets, and personnel."
  },
  {
    id: 3,
    name: "Assistant Security Officer Services",
    description: "Support role assisting the security officer in implementing security measures, monitoring surveillance systems, and providing backup during security incidents."
  },
  {
    id: 4,
    name: "Security Supervisor Services",
    description: "Supervisory role responsible for overseeing security operations, managing security staff, and ensuring compliance with security policies and procedures."
  },
  {
    id: 5,
    name: "Head Guard Services",
    description: "Lead security personnel responsible for directing security teams, coordinating patrols, and providing guidance and support to security staff."
  },
  {
    id: 6,
    name: "Security Guard Services",
    description: "Professional security guards to protect your premises, assets, and personnel. Services include patrolling, access control, and emergency response."
  },
  {
    id: 7,
    name: "Lady Searcher Services",
    description: "Female security personnel trained in conducting searches of female individuals for enhanced security and privacy compliance."
  },
  {
    id: 8,
    name: "Bouncer & Valet Parking Services",
    description: "Experienced bouncers to ensure safety and order at entertainment venues such as bars, clubs, and concerts. Services include ID verification, crowd control, and conflict resolution, along with valet parking services."
  },
  {
    id: 9,
    name: "Valet Parking Services",
    description: "Professional valet parking services to provide convenience and security for your guests' vehicles, enhancing the overall customer experience."
  },
  // Add more services as needed
];



const ContactInfo = {
  name: "TIWARIJI SECURITY SERVICES",
  gst: "36AYJPT4784F1ZU",
  myName: "TIWARIJI SECURITY SERVICES",
  aboutMe: "Detail-oriented and results-driven Charter Accountant with over 5 years of extensive experience in financial analysis, reporting, and strategic planning. Adept at navigating complex financial landscapes and implementing sound accounting principles to drive organizational growth and profitability. Proven track record of streamlining processes, optimizing financial performance, and ensuring compliance with regulatory standards. Strong analytical skills combined with effective communication abilities, enabling the translation of financial data into actionable insights for stakeholders at all levels. Committed to delivering excellence and adding value through strategic financial management.",
  subTitle: "Ved Prakash & Pradeep Tiwari",
  address: "20-1-280/3, Pura Pool, Charminar, Hyderabad, Telangana, 500002",
  email: "tiwarijisecuritiesservices@gmail.com",
  mobileNumber: "+91 8074579809, 9908114214",
  myProfileUrl: "https://media.licdn.com/dms/image/C5603AQG96robP0be2Q/profile-displayphoto-shrink_400_400/0/1588928441889?e=1720051200&v=beta&t=TrnqLSPCWICyy2vE5DtE7PhPbMNqls95PupvQLYgAwE",
  linkedinLink: "https://www.linkedin.com/in/ca-vikas-kalyan-46b3b917b/",
  instagramLink: "https://www.instagram.com/example",
  coordinates: { lat: 17.370967510412534, log: 78.47758925481486 }
};

const RatingData: RatingProps[] = [
  {
    "name": "Praveen Soni",
    "service": "Chief Security Officer Services",
    "rating": 3,
    "description": "High-level security management services provided by experienced professionals to oversee and coordinate all security operations, ensuring comprehensive protection for your organization."
  },
  {
    "name": "Pradeep",
    "service": "Security Officer Services",
    "rating": 4,
    "description": "Trained security personnel to enforce security protocols, conduct patrols, and respond to incidents, maintaining a safe and secure environment for your premises, assets, and personnel."
  },
  {
    "name": "Kriti",
    "service": "Assistant Security Officer Services",
    "rating": 2,
    "description": "Support role assisting the security officer in implementing security measures, monitoring surveillance systems, and providing backup during security incidents."
  },
  {
    "name": "Nawaz",
    "service": "Security Supervisor Services",
    "rating": 4,
    "description": "Supervisory role responsible for overseeing security operations, managing security staff, and ensuring compliance with security policies and procedures."
  },
  {
    "name": "Rohan",
    "service": "Head Guard Services",
    "rating": 5,
    "description": "Lead security personnel responsible for directing security teams, coordinating patrols, and providing guidance and support to security staff."
  },
  {
    "name": "Amit",
    "service": "Security Guard Services",
    "rating": 3,
    "description": "Professional security guards to protect your premises, assets, and personnel. Services include patrolling, access control, and emergency response."
  },
  {
    "name": "Riya",
    "service": "Lady Searcher Services",
    "rating": 4,
    "description": "Female security personnel trained in conducting searches of female individuals for enhanced security and privacy compliance."
  },
  {
    "name": "Neha",
    "service": "Bouncer & Valet Parking Services",
    "rating": 2,
    "description": "Experienced bouncers to ensure safety and order at entertainment venues such as bars, clubs, and concerts. Services include ID verification, crowd control, and conflict resolution, along with valet parking services."
  },
  {
    "name": "Sanjay",
    "service": "Valet Parking Services",
    "rating": 5,
    "description": "Professional valet parking services to provide convenience and security for your guests' vehicles, enhancing the overall customer experience."
  }
]



export { WorkCulture, Works, Services, ContactInfo, RatingData };