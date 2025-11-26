// src/data/timeline.ts
import { TimelineItem } from "../types";
import hmgicsPic from "../images/hmgics_pic.jpg";
import cynapse from "../images/cynapse.jpg";
import unc from "../images/unc.png";
import hybridAi from "../images/hybridai.png";
import nus from "../images/nus.jpg";
import octava from "../images/octava.jpg";
import raffles from "../images/raffles.png";
import govtech from "../images/govtech.gif";
import ku from "../images/korea-university.png";

export const timeline: TimelineItem[] = [
  {
    name: "GovTech Singapore",
    timelineType: "work",
    title: "Software Engineer Intern",
    techStack:
      "Gen AI, Python, FastAPI, React, LLM APIs, CI/CD, Cloud Platforms, Document Processing",
    summaryPoints: [
      "Building Intelligent Project Proposal Assistant for Digital Governance Division",
      "Developing Gen AI-powered features with LLM APIs",
      "Creating production-grade full-stack application with React frontend and secure FastAPI backend",
    ],
    dateRange: "Jan 2026 - May 2026",
    image: govtech,
    isUpcoming: true,
  },
  {
    name: "Hyundai Motor Group Innovation Centre, Singapore",
    timelineType: "work",
    title: "AI Research Intern",
    techStack:
      "Python, TensorFlow, YOLOv11, OpenCV, ROS2, Kubernetes, Grounding DINO, MQ-Det",
    summaryPoints: [
      "Collaborated with NTU and A*STAR researchers on multimodal quality inspection for manual-assembly cells",
      "Built secure offline annotation workflow for head-mounted assembly videos using Python (Tkinter + OpenCV CSRT + Grounding DINO + MediaPipe), reducing labeling time by >5×",
      "Fine-tuned and benchmarked open-vocabulary object detectors (MQ-Det, Grounding DINO) against YOLOv11 baselines",
      "Automated robotic data capture for 3D surface inspection via ROS2, enabling repeatable gap/flush scanning",
      "Authored detailed training pipelines, labeling protocols, and experiment runbooks for air-gapped GPU environments",
    ],
    dateRange: "Jul 2025 - Dec 2025",
    image: hmgicsPic,
    isCurrent: true,
  },
  {
    name: "Cynapse, Singapore",
    timelineType: "work",
    title: "AI Software Engineer Intern",
    techStack:
      "Python, TensorFlow, YOLOv11, OpenCV, ONNX, Google Cloud Platform, Docker Compose",
    summaryPoints: [
      "Designed and implemented end-to-end machine learning pipelines for production deployment",
      "Pre-processed datasets, trained and fine-tuned classification models using TensorFlow and object detection models using YOLOv11",
      "Developed Python business logic to operationalize detections, ensuring alignment with client requirements",
      "Optimized existing pipeline by implementing batch processing with ONNX, reducing inference time by 20%",
      "Deployed and integrated models with user application using Google Cloud Platform and Docker Compose",
      "Followed Agile practices (daily stand-ups, weekly sprint reviews) and collaborated cross-functionally",
    ],
    dateRange: "Jan 2025 - Jun 2025",
    image: cynapse,
  },
  {
    name: "HybridAI, Singapore",
    timelineType: "work",
    title: "Backend Engineer Intern",
    techStack:
      "AWS Lambda, Next.js, Amazon RDS, DynamoDB, API Gateway, SQS, Amplify, Cognito, S3",
    summaryPoints: [
      "Developed the first iteration of a multi-tenant SaaS application for a startup company",
      "Engineered serverless pipelines using AWS Lambda to process client machine performance metrics",
      "Designed and built a Next.js frontend, progressing from wireframes to functional PoC prototypes based on client feedback",
      "Developed RESTful APIs using AWS API Gateway and SQS for event-driven workflows",
      "Designed database schemas and migration plans with ER diagrams to support evolving data structures",
      "Deployed and secured application using AWS Amplify, Cognito for authentication, and S3 for storage",
    ],
    dateRange: "Jun 2024 - Aug 2024",
    image: hybridAi,
  },
  {
    name: "Korea University, Seoul",
    timelineType: "education",
    title: "Winter Exchange Programme",
    techStack: "International Exchange, Business, Korean Culture",
    summaryPoints: [
      "Participating in Business coursework",
      "Engaging with international students and Korean academic environment",
    ],
    dateRange: "Dec 2025 - Jan 2026",
    image: ku,
    isUpcoming: true,
  },
  {
    name: "University of North Carolina, Chapel Hill",
    timelineType: "education",
    title: "Exchange Programme - Computing Department",
    techStack:
      "Machine Learning, Computer Vision, NLP, Sentiment Analysis, RNN, CNN, LSTM, DistilBERT, Python, PyTorch",
    summaryPoints: [
      "Completed semester exchange programme with Computing Department",
      "Relevant coursework: COMP562 (Introduction to Machine Learning), COMP590 (Introduction to Computer Vision)",
      "Projects: Sentiment Analysis on IMDB Reviews, Computer Vision applications with CNNs and object detection",
    ],
    dateRange: "Aug 2024 - Dec 2024",
    image: unc,
  },
  {
    name: "National University of Singapore",
    timelineType: "education",
    title: "Bachelor of Computing in Computer Science",
    techStack:
      "AI/ML, Computer Vision, NLP, Software Engineering, Data Structures, Algorithms, Full-Stack Development",
    summaryPoints: [
      "NUS Merit Scholarship Recipient - Computer Science major with AI specialisation",
      "Key Projects: Orbital (Algorithmic Trading), NLP Sarcasm Detection, Medical Grand Challenge, HealthHack",
      "Active participant in hackathons, Tembusu College Resident",
      "Relevant coursework: CS2103T (Software Engineering), CS2109S (AI & ML), CS4248 (NLP), CP2106 (Orbital)",
    ],
    dateRange: "Aug 2022 - May 2026",
    image: nus,
  },
  {
    name: "Octava Foundation, Singapore",
    timelineType: "work",
    title: "Crypto Analyst Intern",
    techStack:
      "PERN Stack (PostgreSQL, Express, React, Node.js), Web Scraping, Smart Contracts",
    summaryPoints: [
      "Collaborated with software team to develop automated webpage for DeFi analytics",
      "Built PERN stack application for retrieval, analysis, and display of predicted liquidity pool interest rates",
      "Leveraged developer APIs and scraped smart contracts to extract interest rates",
      "Used moving averages to forecast and identify optimal interest rates on decentralized exchanges",
    ],
    dateRange: "Mar 2022 - Jun 2022",
    image: octava,
  },
  {
    name: "Raffles Institution",
    timelineType: "education",
    title: "A-Levels - 90 Rank Points (7 Distinctions)",
    techStack: "Biology, Chemistry, Mathematics, Economics",
    summaryPoints: [
      "Graduated with 90 rank points and 7 distinctions (4 H2)",
      "Computer Science Society Chairman (2018-2019)",
    ],
    dateRange: "Jan 2014 - Dec 2019",
    image: raffles,
  },
];
