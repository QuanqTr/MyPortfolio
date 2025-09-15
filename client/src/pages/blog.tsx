import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import GlassCard from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, Search } from "lucide-react";
import type { BlogPost } from "@shared/schema";

const categories = ["All Posts", "Web Development", "Design", "JavaScript", "Career", "Personal", "AI", "Mobile"];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All Posts");
  const [searchQuery, setSearchQuery] = useState("");

  const { data: posts = [], isLoading, error } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog/posts", selectedCategory],
  });

  const { data: featuredPosts = [] } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog/posts/featured"],
  });

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const formatDate = (date: Date | string) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (error) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="container mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-destructive mb-4">Error Loading Blog</h1>
            <p className="text-muted-foreground">Failed to load blog posts. Please try again later.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 px-6 gradient-bg">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 animate-pulse-slow">
              My Blog
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Sharing thoughts, experiences, and insights about web development, technology, and creative process
            </p>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 px-6 bg-gradient-to-br from-muted/30 to-secondary/10">
          <div className="container mx-auto max-w-6xl">
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 glass-card"
                data-testid="input-search"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "neumorphic" : "glass-card"}
                  data-testid={`button-category-${category.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPosts.length > 0 && (
          <section className="py-12 px-6">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-3xl font-bold text-center mb-12 text-gradient">Featured Article</h2>
              
              <GlassCard className="rounded-3xl overflow-hidden hover-3d">
                <div className="md:flex">
                  <div className="md:w-1/2 h-64 md:h-auto bg-gradient-to-br from-primary to-secondary relative">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute bottom-6 left-6">
                      <Badge className="bg-accent text-accent-foreground">Featured</Badge>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                        <User className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">Portfolio Author</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{formatDate(featuredPosts[0].createdAt)}</span>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{featuredPosts[0].title}</h3>
                    <p className="text-muted-foreground mb-6">{featuredPosts[0].excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        <Badge variant="secondary">{featuredPosts[0].category}</Badge>
                        {featuredPosts[0].tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="outline">{tag}</Badge>
                        ))}
                      </div>
                      <Link href={`/blog/${featuredPosts[0].id}`}>
                        <Button variant="link" className="text-primary p-0" data-testid="link-read-more-featured">
                          Read More →
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-12 px-6">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-gradient">Latest Articles</h2>
            
            {isLoading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="glass-card rounded-3xl overflow-hidden animate-pulse">
                    <div className="h-48 bg-muted"></div>
                    <div className="p-6 space-y-4">
                      <div className="h-4 bg-muted rounded w-3/4"></div>
                      <div className="h-4 bg-muted rounded w-1/2"></div>
                      <div className="space-y-2">
                        <div className="h-3 bg-muted rounded"></div>
                        <div className="h-3 bg-muted rounded w-5/6"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold mb-2">No articles found</h3>
                <p className="text-muted-foreground">
                  {searchQuery ? "Try adjusting your search terms" : "No articles available in this category"}
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <article key={post.id} className="glass-card rounded-3xl overflow-hidden hover-3d group">
                    <div className="h-48 bg-gradient-to-br from-secondary to-accent relative">
                      <div className="absolute bottom-4 left-4">
                        <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/20">
                          {post.category}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-secondary to-accent"></div>
                        <div>
                          <p className="text-sm font-semibold">Portfolio Author</p>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            <span>{formatDate(post.createdAt)}</span>
                          </div>
                        </div>
                      </div>
                      <h3 className="font-bold text-lg mb-3 line-clamp-2">{post.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex gap-1">
                          {post.tags.slice(0, 2).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                          ))}
                        </div>
                        <Link href={`/blog/${post.id}`}>
                          <Button variant="link" className="text-primary p-0 text-sm" data-testid={`link-read-more-${post.id}`}>
                            Read More →
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
