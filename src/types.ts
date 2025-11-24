// types.ts

export interface ProfileBanner {
  backgroundImage: { url: string };
  headline: string;
  resumeLink: {
    url: string;
  };
  linkedinLink: string;
  profileSummary: string;
}

export interface WorkPermit {
  visaStatus: string;
  expiryDate?: Date;
  summary?: string;
  additionalInfo?: string;
}

export interface TimelineItem {
  timelineType: "work" | "education";
  name: string;
  title: string;
  techStack: string;
  summaryPoints: string[];
  dateRange: string;
  image?: string; // Optional image for the timeline item
}

export interface Project {
  title: string;
  description: string;
  techUsed: string;
  image: { url: string };
  images?: string[]; // Multiple images for carousel
  link?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  issuedDate: string;
  link: string;
  iconName: string;
}

export interface ContactMe {
  profilePicture: { url: string };
  name: string;
  title: string;
  summary: string;
  companyUniversity: string;
  linkedinLink: string;
  email: string;
  phoneNumber: string;
}

export interface Skill {
  name: string;
  category: string;
  description: string;
  icon: string;
}

export interface Drama {
  title: string;
  description: string;
  role: string;
  productionCompany: string;
  year: string;
  language: "Tamil" | "English";
  image: { url: string };
  bannerImage?: { url: string }; // Optional larger banner image for hero/header
  venue: string;
  director: string;
  galleryImages?: string[]; // Optional array for additional gallery images
  galleryCaptions?: string[]; // Optional captions for gallery images (must match galleryImages length)
  videoLink?: string; // Optional link to video/recording
}
