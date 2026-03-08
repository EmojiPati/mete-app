export type Locale = "en" | "ja";

export interface ServiceItem {
  title: string;
  description: string;
}

export interface ServiceDetailItem {
  title: string;
  paragraphs: string[];
  disclaimer?: string;
  listTitle?: string;
  listItems?: string[];
}

export interface CompanyInfoItem {
  label: string;
  value?: string;
  list?: string[];
}

export interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
}

export interface LegalItem {
  label: string;
  value: string;
}

export interface Translations {
  nav: {
    home: string;
    services: string;
    about: string;
    blog: string;
    contact: string;
  };
  hero: {
    subtitle: string;
    title: string;
    description: string;
    longDescription: string;
    servicesBtn: string;
    contactBtn: string;
  };
  companyIntro: {
    p1: string;
    p2: string;
    disclaimer: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: ServiceItem[];
  };
  serviceDetails: {
    title: string;
    items: ServiceDetailItem[];
  };
  companyProfile: {
    title: string;
    quote: string;
    info: CompanyInfoItem[];
  };
  healthInfo: {
    title: string;
    description: string;
    disclaimer: string;
    comingSoon: string;
    posts: BlogPost[];
  };
  contact: {
    title: string;
    description: string;
    lineLabel: string;
    lineQrAlt: string;
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      subjectPlaceholder: string;
      messagePlaceholder: string;
      submit: string;
    };
  };
  footer: {
    description: string;
    quickLinks: string;
    contactTitle: string;
    address1: string;
    address2: string;
    legalTitle: string;
    legal: LegalItem[];
    copyright: string;
  };
}
