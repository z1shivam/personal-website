export interface postInfo {
  title: string;
  featuredImage: string;
  publishedDate: any;
  isPublished: boolean;
  author: string;
  slug: string;
  isPublic: boolean;
}

export interface postWithContent {
  title: string;
  featuredImage: string;
  publishedDate: any;
  author: string;
  slug: string;
  content: string;
}