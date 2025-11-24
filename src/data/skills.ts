// src/data/skills.ts
import { Skill } from "../types";

export const skills: Skill[] = [
  // AI/ML & Computer Vision
  {
    name: "Python",
    category: "AI/ML",
    description:
      "Primary language for AI/ML development, data processing, and automation",
    icon: "FaPython",
  },
  {
    name: "TensorFlow",
    category: "AI/ML",
    description:
      "Deep learning framework for training and deploying neural networks",
    icon: "SiTensorflow",
  },
  {
    name: "PyTorch",
    category: "AI/ML",
    description:
      "Building and fine-tuning models for computer vision and NLP tasks",
    icon: "SiPytorch",
  },
  {
    name: "Computer Vision",
    category: "AI/ML",
    description:
      "Computer vision pipelines, image processing, and video analysis",
    icon: "SiOpencv",
  },
  {
    name: "NLP",
    category: "AI/ML",
    description:
      "Transformers, BERT, sentiment analysis, and sarcasm detection",
    icon: "FaBrain",
  },

  // Frontend Technologies
  {
    name: "React",
    category: "Frontend",
    description:
      "Building dynamic user interfaces with hooks, context, and modern patterns",
    icon: "FaReact",
  },
  {
    name: "Next.js",
    category: "Frontend",
    description:
      "Server-side rendering, static generation, and full-stack React applications",
    icon: "FaReact",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    description:
      "Type-safe JavaScript development for better code quality and maintainability",
    icon: "SiTypescript",
  },
  {
    name: "React Native",
    category: "Frontend",
    description: "Cross-platform mobile app development for iOS and Android",
    icon: "FaReact",
  },

  // Backend Technologies
  {
    name: "Node.js",
    category: "Backend",
    description:
      "Server-side JavaScript, REST APIs, and microservices architecture",
    icon: "FaNodeJs",
  },
  {
    name: "Flask",
    category: "Backend",
    description: "Python web framework for building APIs and web applications",
    icon: "FaPython",
  },
  {
    name: "Express.js",
    category: "Backend",
    description: "Fast, unopinionated web framework for Node.js applications",
    icon: "FaNodeJs",
  },

  // Database Technologies
  {
    name: "PostgreSQL",
    category: "Database",
    description:
      "Advanced relational database with complex queries and data integrity",
    icon: "SiPostgresql",
  },
  {
    name: "DynamoDB",
    category: "Database",
    description: "AWS managed NoSQL database for high-performance applications",
    icon: "FaAws",
  },
  {
    name: "Amazon RDS",
    category: "Database",
    description: "Managed relational database service for cloud applications",
    icon: "FaAws",
  },

  // Cloud & DevOps
  {
    name: "AWS",
    category: "DevOps",
    description: "Lambda, S3, EC2, API Gateway, SQS, Cognito, and Amplify",
    icon: "FaAws",
  },
  {
    name: "Docker",
    category: "DevOps",
    description: "Containerization for ML models and application deployment",
    icon: "FaDocker",
  },
  {
    name: "Kubernetes",
    category: "DevOps",
    description: "Container orchestration for GPU clusters and ML workloads",
    icon: "SiKubernetes",
  },

  // Tools & Version Control
  {
    name: "Git",
    category: "Tools",
    description:
      "Version control, branching strategies, and collaborative development",
    icon: "FaGitAlt",
  },
  {
    name: "CI/CD",
    category: "DevOps",
    description: "Automated testing, building, and deployment pipelines",
    icon: "SiGithub",
  },
];
