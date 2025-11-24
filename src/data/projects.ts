// src/data/projects.ts
import { Project } from "../types";
import doge from "../images/doge.jpg";
import healthy from "../images/healthy-icon.png";
import trading from "../images/trading2.png";
import trading2 from "../images/trading.png";
import trading3 from "../images/trading3.png";
import homescreen from "../images/HomeScreen.png";
import recipes from "../images/Recipes.png";
import locations from "../images/Locations.png";
import medi1 from "../images/medi1.png";
import medi2 from "../images/medi2.png";
import medi3 from "../images/medi3.png";
import analysing from "../images/analysing.png";
export const projects: Project[] = [
  {
    title: "Attention Isn't Enough - NLP Sarcasm Detection (CS4248)",
    description:
      "Developed an NLP sarcasm-detection pipeline blending handcrafted linguistic features with attention-based LLMs to study interpretability vs performance. Conducted feature ablations and reproducible experiments in Python/Jupyter, publishing findings to GitHub. Final project for CS4248 (Natural Language Processing) at NUS.",
    techUsed:
      "Python, NLP, Transformers, Attention Mechanisms, Jupyter, Feature Engineering",
    image: {
      url: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
    },
    link: "https://github.com/migfoo02/cs4248-g30",
  },
  {
    title: "IMDB Sentiment Analysis - ML Benchmark",
    description:
      "Built a controlled benchmark for sentiment analysis of IMDB movie reviews, contrasting sequential models (RNN/CNN/CNN+LSTM) with a transformer (DistilBERT). DistilBERT achieved 88.95% accuracy, demonstrating the effectiveness of attention-based architectures. Completed as final project for COMP562 (Machine Learning) at UNC Chapel Hill.",
    techUsed: "Python, PyTorch, DistilBERT, Sentiment Analysis",
    image: {
      url: analysing,
    },
    link: "https://github.com/Sasmik23/ml-finals",
  },
  {
    title: "Trading Doggo - Orbital (CP2106)",
    description:
      "Developed a full-stack algorithmic trading website using Python, Flask, React and Postgres. Trading bot utilises Pandas DataFrames to perform analysis on price movements from Yahoo Finance, cross-checks with sentiment analysis from Twitter and executes trades by connecting to Interactive Brokers API, hosted on AWS EC2. Achieved Apollo 11 (Intermediate) level for NUS Orbital programme.",
    techUsed: "Python, Flask, React, PostgreSQL, Pandas, AWS EC2",
    image: { url: trading },
    images: [doge, trading, trading2, trading3],
    link: "https://bitbucket.org/sasmik23/trading-doggo/src/main",
  },
  {
    title: "HealthyEats - Medical Grand Challenge",
    description:
      "Developed an Android mobile application as a one-stop solution for diet management. Letter of intent signed by Fullerton Health and Singapore Nutrition and Dietetics Association. Built with React Native frontend and Next.js/Postgres backend, hosted on AWS Amplify.",
    techUsed: "React Native, Next.js, PostgreSQL, AWS Amplify",
    image: { url: healthy },
    images: [healthy, homescreen, recipes, locations],
    link: "https://github.com/Sasmik23/HealthyEats",
  },
  {
    title: "JavaFX Business Tracker - CS2103T",
    description:
      "Developed a brownfield software application that keeps track of transactions for small businesses, built on JavaFX. Programmed with a team of 5 following software engineering best practices including OOP design patterns, testing, and CI/CD. In charge of user documentation and UI/UX improvements.",
    techUsed: "Java, JavaFX, JUnit, OOP",
    image: {
      url: "https://raw.githubusercontent.com/AY2324S1-CS2103T-W11-1/tp/master/docs/images/Ui.png",
    },
    link: "https://github.com/Sasmik23/tp",
  },
  {
    title: "HealthHack PowerApp - Medical Hackathon",
    description:
      "Participated in a hackathon organised by YLL School of Medicine, developing a Microsoft PowerApp that allows users to upload blood tests and imaging reports. Using a document processor, the app extracts medical jargon and provides comprehensive yet layman explanations for each term, making healthcare more accessible.",
    techUsed: "Microsoft PowerApp, Document Processing, AI, Healthcare",
    image: { url: medi1 },
    images: [medi1, medi2, medi3],
    link: "https://youtu.be/4kaPQOYlM5E",
  },
  {
    title: "Term-inator - Chrome Extension",
    description:
      "Collaborated with a classmate to design a Google Chrome extension that summarises lengthy terms and conditions using Natural Language Processing (TF-IDF). Completed during Raffles Invent Programme in 2018, making legal documents more accessible and readable for everyday users.",
    techUsed: "JavaScript, Chrome Extensions API, NLP, TF-IDF, HTML/CSS",
    image: { url: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png" },
    link: "https://github.com/Bombbird2001/Term-inator",
  },
];
