import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { eq, desc } from 'drizzle-orm';
import { users, blogPosts, contactMessages } from '@shared/schema';
import type { User, InsertUser, BlogPost, InsertBlogPost, ContactMessage, InsertContactMessage } from '@shared/schema';
import { randomUUID } from 'crypto';
import type { IStorage } from './storage';

export class DatabaseStorage implements IStorage {
  private db: ReturnType<typeof drizzle>;

  constructor(databaseUrl: string) {
    const sql = neon(databaseUrl);
    this.db = drizzle(sql);
  }

  async getUser(id: string): Promise<User | undefined> {
    try {
      const result = await this.db.select().from(users).where(eq(users.id, id)).limit(1);
      return result[0];
    } catch (error) {
      console.error('Error getting user:', error);
      return undefined;
    }
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    try {
      const result = await this.db.select().from(users).where(eq(users.username, username)).limit(1);
      return result[0];
    } catch (error) {
      console.error('Error getting user by username:', error);
      return undefined;
    }
  }

  async createUser(user: InsertUser): Promise<User> {
    try {
      const newUser = {
        ...user,
        id: randomUUID(),
      };
      const result = await this.db.insert(users).values(newUser).returning();
      return result[0];
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    try {
      return await this.db.select().from(blogPosts).orderBy(desc(blogPosts.createdAt));
    } catch (error) {
      console.error('Error getting blog posts:', error);
      return [];
    }
  }

  async getBlogPost(id: string): Promise<BlogPost | undefined> {
    try {
      const result = await this.db.select().from(blogPosts).where(eq(blogPosts.id, id)).limit(1);
      return result[0];
    } catch (error) {
      console.error('Error getting blog post:', error);
      return undefined;
    }
  }

  async getFeaturedBlogPosts(): Promise<BlogPost[]> {
    try {
      return await this.db.select().from(blogPosts).where(eq(blogPosts.featured, true)).orderBy(desc(blogPosts.createdAt));
    } catch (error) {
      console.error('Error getting featured blog posts:', error);
      return [];
    }
  }

  async getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
    try {
      return await this.db.select().from(blogPosts).where(eq(blogPosts.category, category)).orderBy(desc(blogPosts.createdAt));
    } catch (error) {
      console.error('Error getting blog posts by category:', error);
      return [];
    }
  }

  async createBlogPost(post: InsertBlogPost): Promise<BlogPost> {
    try {
      const newPost = {
        ...post,
        id: randomUUID(),
        tags: post.tags || [],
        featured: post.featured || false,
        published: post.published || false,
      };
      const result = await this.db.insert(blogPosts).values(newPost).returning();
      return result[0];
    } catch (error) {
      console.error('Error creating blog post:', error);
      throw error;
    }
  }

  async updateBlogPost(id: string, post: Partial<InsertBlogPost>): Promise<BlogPost | undefined> {
    try {
      await this.db.update(blogPosts).set(post).where(eq(blogPosts.id, id));
      return await this.getBlogPost(id);
    } catch (error) {
      console.error('Error updating blog post:', error);
      return undefined;
    }
  }

  async deleteBlogPost(id: string): Promise<boolean> {
    try {
      const result = await this.db.delete(blogPosts).where(eq(blogPosts.id, id));
      return true;
    } catch (error) {
      console.error('Error deleting blog post:', error);
      return false;
    }
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    try {
      return await this.db.select().from(contactMessages).orderBy(desc(contactMessages.createdAt));
    } catch (error) {
      console.error('Error getting contact messages:', error);
      return [];
    }
  }

  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    try {
      const newMessage = {
        ...message,
        id: randomUUID(),
      };
      const result = await this.db.insert(contactMessages).values(newMessage).returning();
      return result[0];
    } catch (error) {
      console.error('Error creating contact message:', error);
      throw error;
    }
  }
}