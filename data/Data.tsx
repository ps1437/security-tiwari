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
const currentYear = new Date().getFullYear();
const startYear = 2011;
const experienceYears = currentYear - startYear;

const WorkCulture = {
  description: "Established in 2011, TIWARIJI SECURITY SERVICES is a leading security agency based in Hyderabad, Telangana, India. We specialize in professional Bouncer Security Services, offering top-tier protection for a variety of venues and events. Serving both National and International clients, our tailored services are designed to meet the unique security needs of each client, ensuring a safe and secure environment.",
  oneLineInfo: "Precision, Expertise, Personalized Attention",
 
  points: [
    { "number": "-", "description": "Security for diverse venues/events: national events, clubs, bars, hotels, corporate events, VIPs." },
    { "number": "-", "description": "Tailored security solutions for client-specific needs." },
    { "number": "-", "description": `${experienceYears}+ years of experience in bouncer security services.` },
    { "number": "-", "description": "Comprehensive venue safety and attendee protection." },
    { "number": "-", "description": "Intelligence-driven measures to mitigate risks." }
  ]
   
};

const Services = [
  {
    id: 1,
    name: "Chief Security Officer Services",
    description: "High-level security management services provided by experienced professionals to oversee and coordinate all security operations, ensuring comprehensive protection for your organization."
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
    name: "Bouncer's",
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
  address: "21-4-908, Charmahal Petla Burz, Hussaini Alam, Hyderabad, Telangana 500064",
  email: "tiwarijisecuritiesservices@gmail.com",
  mobileNumber: "+91 9908114214, 8686284902",
  myProfileUrl: "https://media.licdn.com/dms/image/C5603AQG96robP0be2Q/profile-displayphoto-shrink_400_400/0/1588928441889?e=1720051200&v=beta&t=TrnqLSPCWICyy2vE5DtE7PhPbMNqls95PupvQLYgAwE",
  instagramLink: "https://www.instagram.com/tiwarijisecurityservices?igsh=MXdwNHo3bTJlbXl3Zw==",
  coordinates: { lat: 17.364360, log: 78.465980 }
};
const RatingData: RatingProps[] = [
  {
    "name": "Arun",
    "service": "Security Guard Services",
    "rating": 5,
    "description": "The security guard services from TiwariJi Security Services were exceptional. The guards were highly vigilant and handled all situations with professionalism. Their presence made us feel secure at all times."
  },
  {
    "name": "Maya",
    "service": "Female Security Guard Services",
    "rating": 4,
    "description": "The female security guards provided by TiwariJi Security Services were excellent. They were respectful and thorough, ensuring both security and privacy for everyone involved. A bit more training could further enhance their service."
  },
  {
    "name": "Rajesh",
    "service": "Bouncer Services",
    "rating": 4.5,
    "description": "TiwariJi Security Services' bouncers were top-notch. They managed crowd control and handled difficult situations with great skill. Their professionalism was evident, making the venue safer and more organized."
  },
  {
    "name": "Neeta",
    "service": "Valet Parking Services",
    "rating": 4,
    "description": "The valet parking services from TiwariJi Security Services were very good. The attendants were courteous and efficient, making the parking experience smooth for all our guests."
  },
  {
    "name": "Vikram",
    "service": "Chief Security Officer Services",
    "rating": 5,
    "description": "The Chief Security Officer services provided by TiwariJi Security Services were outstanding. The officer's strategic oversight and management ensured that all security operations were handled effectively and efficiently."
  },
  {
    "name": "Aisha",
    "service": "Security Guard Services",
    "rating": 4.5,
    "description": "TiwariJi Security Services’ security guards were impressive. They were always alert and handled every situation with a high level of professionalism. Their presence greatly contributed to the overall safety."
  },
  {
    "name": "Ravi",
    "service": "Female Security Guard Services",
    "rating": 4,
    "description": "The female security guards from TiwariJi Security Services provided excellent service. They were attentive and respectful, ensuring that all security measures were in place and that everyone felt comfortable."
  },
  {
    "name": "Pooja",
    "service": "Bouncer Services",
    "rating": 4,
    "description": "The bouncers from TiwariJi Security Services did a great job managing the crowd and maintaining order. Their proactive approach and professionalism were key in creating a secure environment."
  },
  {
    "name": "Karan",
    "service": "Valet Parking Services",
    "rating": 5,
    "description": "TiwariJi Security Services offered exceptional valet parking. The service was smooth and efficient, and the attendants were very professional, enhancing the overall guest experience."
  },
  {
    "name": "Simran",
    "service": "Chief Security Officer Services",
    "rating": 4.5,
    "description": "The Chief Security Officer services by TiwariJi Security Services were highly effective. The officer managed the security operations with great expertise and ensured all safety protocols were followed."
  }
]





export { WorkCulture, Works, Services, ContactInfo, RatingData };
