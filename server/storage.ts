import { type User, type InsertUser, type BlogPost, type InsertBlogPost, type ContactMessage, type InsertContactMessage } from "@shared/schema";
import { randomUUID } from "crypto";
import { DatabaseStorage } from "./database-storage";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(id: string): Promise<BlogPost | undefined>;
  getFeaturedBlogPosts(): Promise<BlogPost[]>;
  getBlogPostsByCategory(category: string): Promise<BlogPost[]>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  updateBlogPost(id: string, post: Partial<InsertBlogPost>): Promise<BlogPost | undefined>;
  deleteBlogPost(id: string): Promise<boolean>;
  
  getContactMessages(): Promise<ContactMessage[]>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private blogPosts: Map<string, BlogPost>;
  private contactMessages: Map<string, ContactMessage>;

  constructor() {
    this.users = new Map();
    this.blogPosts = new Map();
    this.contactMessages = new Map();
    
    // Initialize with sample blog posts
    this.initializeSampleData();
  }

  private initializeSampleData() {
    const samplePosts: BlogPost[] = [
      {
        id: randomUUID(),
        title: "The Future of Web Development: Trends to Watch in 2024",
        content: "Exploring the emerging technologies and frameworks that will shape the web development landscape in the coming year. From AI integration to new JavaScript frameworks, the web development world is constantly evolving...",
        excerpt: "Exploring the emerging technologies and frameworks that will shape the web development landscape in the coming year. From AI integration to new JavaScript frameworks...",
        category: "Web Development",
        tags: ["JavaScript", "AI", "Future", "Technology"],
        featured: true,
        published: true,
        createdAt: new Date("2023-12-15"),
        updatedAt: new Date("2023-12-15"),
      },
      {
        id: randomUUID(),
        title: "Mastering CSS Grid: Advanced Layout Techniques",
        content: "Deep dive into CSS Grid's most powerful features and how to create complex, responsive layouts with ease. Learn advanced techniques that will transform your web design workflow...",
        excerpt: "Deep dive into CSS Grid's most powerful features and how to create complex, responsive layouts...",
        category: "Design",
        tags: ["CSS", "Grid", "Layout", "Design"],
        featured: false,
        published: true,
        createdAt: new Date("2023-12-10"),
        updatedAt: new Date("2023-12-10"),
      },
      {
        id: randomUUID(),
        title: "React 18 Features That Will Change Your Development",
        content: "Exploring the new concurrent features, automatic batching, and Suspense improvements that make React 18 a game-changer for modern web development...",
        excerpt: "Exploring the new concurrent features, automatic batching, and Suspense improvements...",
        category: "JavaScript",
        tags: ["React", "React 18", "Frontend", "JavaScript"],
        featured: false,
        published: true,
        createdAt: new Date("2023-12-05"),
        updatedAt: new Date("2023-12-05"),
      },
      {
        id: randomUUID(),
        title: "From Junior to Senior: My 5-Year Journey",
        content: "Sharing the lessons learned, challenges faced, and skills developed during my career growth from a junior developer to a senior role...",
        excerpt: "Sharing the lessons learned, challenges faced, and skills developed during my career growth...",
        category: "Career",
        tags: ["Career", "Growth", "Experience", "Learning"],
        featured: false,
        published: true,
        createdAt: new Date("2023-11-28"),
        updatedAt: new Date("2023-11-28"),
      },
      {
        id: randomUUID(),
        title: "Building a Successful Remote Development Team",
        content: "Insights into creating effective communication, managing projects, and fostering team culture in a remote development environment...",
        excerpt: "Insights into creating effective communication, managing projects, and fostering team culture...",
        category: "Personal",
        tags: ["Remote Work", "Team", "Management", "Culture"],
        featured: false,
        published: true,
        createdAt: new Date("2023-11-20"),
        updatedAt: new Date("2023-11-20"),
      },
      {
        id: randomUUID(),
        title: "Integrating AI in Web Development: Practical Guide",
        content: "How to leverage AI APIs and machine learning models to enhance user experience and automate development tasks in your web applications...",
        excerpt: "How to leverage AI APIs and machine learning models to enhance user experience...",
        category: "AI",
        tags: ["AI", "Machine Learning", "APIs", "Automation"],
        featured: false,
        published: true,
        createdAt: new Date("2023-11-15"),
        updatedAt: new Date("2023-11-15"),
      },
    ];

    samplePosts.forEach(post => {
      this.blogPosts.set(post.id, post);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values())
      .filter(post => post.published)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  async getBlogPost(id: string): Promise<BlogPost | undefined> {
    const post = this.blogPosts.get(id);
    return post?.published ? post : undefined;
  }

  async getFeaturedBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values())
      .filter(post => post.published && post.featured)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  async getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values())
      .filter(post => post.published && (category === "All Posts" || post.category === category))
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const id = randomUUID();
    const now = new Date();
    const post: BlogPost = { 
      ...insertPost, 
      id, 
      tags: insertPost.tags || [],
      featured: insertPost.featured || false,
      published: insertPost.published || false,
      createdAt: now, 
      updatedAt: now 
    };
    this.blogPosts.set(id, post);
    return post;
  }

  async updateBlogPost(id: string, updateData: Partial<InsertBlogPost>): Promise<BlogPost | undefined> {
    const existingPost = this.blogPosts.get(id);
    if (!existingPost) return undefined;

    const updatedPost: BlogPost = {
      ...existingPost,
      ...updateData,
      updatedAt: new Date(),
    };
    this.blogPosts.set(id, updatedPost);
    return updatedPost;
  }

  async deleteBlogPost(id: string): Promise<boolean> {
    return this.blogPosts.delete(id);
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values())
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = randomUUID();
    const message: ContactMessage = { 
      ...insertMessage, 
      id, 
      createdAt: new Date() 
    };
    this.contactMessages.set(id, message);
    return message;
  }
}

// Create storage instance based on environment
function createStorage(): IStorage {
  if (process.env.DATABASE_URL && process.env.DATABASE_URL !== 'file:./sqlite.db') {
    console.log('Using PostgreSQL database storage');
    return new DatabaseStorage(process.env.DATABASE_URL);
  } else {
    console.log('Using in-memory storage');
    return new MemStorage();
  }
}

export const storage = createStorage();
