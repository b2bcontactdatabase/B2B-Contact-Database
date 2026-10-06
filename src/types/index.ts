export interface B2BContact {
  id: string;
  fullName: string;
  jobTitle: string;
  seniority: 'C-Suite' | 'VP' | 'Director' | 'Manager' | 'Lead';
  department: 'Sales & Revenue' | 'Marketing' | 'Engineering & IT' | 'Finance & Operations' | 'Human Resources' | 'Product';
  companyName: string;
  industry: 'Enterprise Software' | 'Healthcare & MedTech' | 'Financial Services' | 'Manufacturing & OEM' | 'Logistics & Supply' | 'Professional Services';
  location: string;
  country: string;
  companySize: string;
  revenue: string;
  email: string;
  directPhone: string;
  linkedinUrl: string;
  technologies: string[];
  verificationScore: number;
  lastVerifiedDate: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  keyFeatures: string[];
  idealFor: string;
  deliverables: string;
  accuracyRate: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  description: string;
  recordCount: string;
  keyPersonas: string[];
  commonTechStacks: string[];
  sampleCompanies: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: 'Outbound Strategy' | 'Data Hygiene' | 'ABM & Sales Tech' | 'Compliance & Privacy' | 'Pipeline Benchmarks';
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedDate: string;
  readTime: string;
  excerpt: string;
  content: string[];
  keyTakeaways: string[];
  featuredImage?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Data Quality' | 'Compliance' | 'Integration' | 'Pricing';
}

export interface PricingPlan {
  id: string;
  name: string;
  tier: string;
  price: string;
  cadence: string;
  leadVolume: string;
  description: string;
  features: string[];
  highlight?: boolean;
  ctaText: string;
}
