export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  cover: string;
  readingTime: string;
  contentHtml: string;
}

export interface BlogPostSummary {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  cover: string;
  readingTime: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  status: "In Progress" | "Completed" | "Coming Soon" | string;
  description: string;
  technology: string[];
  images: string[];
  github?: string;
  githubLabel?: string;
  demo?: string;
  documents?: string;
  documentsLabel?: string;
  collaborators?: string;
  featured: boolean;
  order: number;
  comingSoon?: boolean;
  comingSoonYear?: string;
  contentHtml: string;
}
