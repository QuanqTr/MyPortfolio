import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import GlassCard from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";
import type { BlogPost } from "@shared/schema";

export default function BlogPreview() {
  const { data: featuredPosts = [], isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog/posts/featured"],
  });

  const { data: allPosts = [] } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog/posts"],
    select: (posts) => posts.slice(0, 3),
  });

  const formatDate = (date: Date | string) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const postsToShow = featuredPosts.length > 0 ? [...featuredPosts.slice(0, 1), ...allPosts.slice(0, 2)] : allPosts;

  if (isLoading) {
    return (
      <section id="blog" className="py-20 px-6 bg-gradient-to-br from-secondary/10 to-accent/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-gradient">Latest Blog Posts</h2>
            <div className="h-6 bg-muted rounded w-1/2 mx-auto animate-pulse"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, i) => (
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
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-20 px-6 bg-gradient-to-br from-secondary/10 to-accent/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-gradient">Latest Blog Posts</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sharing my thoughts, experiences, and insights about web development, technology, and creative process.
          </p>
        </div>
        
        {/* Blog Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button className="neumorphic px-6 py-3 rounded-xl font-semibold text-primary">
            All Posts
          </Button>
          <Button variant="outline" className="glass-card px-6 py-3 rounded-xl font-semibold hover:bg-muted transition-colors">
            Web Development
          </Button>
          <Button variant="outline" className="glass-card px-6 py-3 rounded-xl font-semibold hover:bg-muted transition-colors">
            Design
          </Button>
          <Button variant="outline" className="glass-card px-6 py-3 rounded-xl font-semibold hover:bg-muted transition-colors">
            Career
          </Button>
        </div>
        
        {/* Featured Blog Post */}
        {featuredPosts.length > 0 && (
          <GlassCard className="rounded-3xl overflow-hidden mb-12 hover-3d">
            <div className="md:flex">
              <div className="md:w-1/2 h-64 md:h-auto bg-gradient-to-br from-primary to-secondary relative">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-6 left-6 text-white">
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
                    <Button variant="link" className="text-primary p-0" data-testid="link-featured-post">
                      Read More →
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </GlassCard>
        )}
        
        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {postsToShow.slice(featuredPosts.length > 0 ? 1 : 0).map((post, index) => (
            <article key={post.id} className="glass-card rounded-3xl overflow-hidden hover-3d">
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
                <Link href={`/blog/${post.id}`}>
                  <Button variant="link" className="text-primary font-semibold text-sm p-0" data-testid={`link-blog-post-${post.id}`}>
                    Read More <ArrowRight className="h-3 w-3 ml-1" />
                  </Button>
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        {/* View All Posts Button */}
        <div className="text-center mt-12">
          <Link href="/blog">
            <Button className="neumorphic px-8 py-4 rounded-xl font-semibold text-primary hover-3d transition-all duration-300" data-testid="button-view-all-posts">
              View All Posts
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
