-- Migration: Initial schema
-- Created: 2024-12-17

-- Users table
CREATE TABLE IF NOT EXISTS users (
    id VARCHAR PRIMARY KEY DEFAULT gen_random_uuid(),
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
);

-- Blog posts table  
CREATE TABLE IF NOT EXISTS blog_posts (
    id VARCHAR PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    excerpt TEXT NOT NULL,
    category TEXT NOT NULL,
    tags TEXT[] NOT NULL DEFAULT '{}',
    featured BOOLEAN NOT NULL DEFAULT false,
    published BOOLEAN NOT NULL DEFAULT false,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

-- Contact messages table
CREATE TABLE IF NOT EXISTS contact_messages (
    id VARCHAR PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

-- Insert sample blog posts
INSERT INTO blog_posts (id, title, content, excerpt, category, tags, featured, published, created_at, updated_at) VALUES 
(
    '135fc1bc-04a6-4d59-87b8-4267c9cd3391',
    'The Art of Modern Web Development',
    'Exploring the latest trends and techniques in web development, from responsive design to progressive web applications. This comprehensive guide covers everything you need to know about creating modern, efficient, and user-friendly websites.',
    'A comprehensive guide to modern web development practices and trends.',
    'Web Development',
    ARRAY['JavaScript', 'React', 'CSS', 'HTML'],
    true,
    true,
    '2024-01-15 00:00:00',
    '2024-01-15 00:00:00'
),
(
    '8f9b2e5c-7a4d-4b3e-9c1f-2a6b8d4e7f9c',
    'Mastering User Experience Design',
    'User experience design is crucial for creating products that not only look great but also provide meaningful and relevant experiences to users. Learn the principles, processes, and tools that make for exceptional UX design.',
    'Essential principles and practices for creating exceptional user experiences.',
    'UX Design',
    ARRAY['UX', 'Design', 'Figma', 'Prototyping'],
    false,
    true,
    '2024-01-10 00:00:00',
    '2024-01-10 00:00:00'
) ON CONFLICT (id) DO NOTHING;