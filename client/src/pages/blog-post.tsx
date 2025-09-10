import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "wouter";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ScrollProgress from "@/components/ui/scroll-progress";
import GlassCard from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react";
import type { BlogPost } from "@shared/schema";

export default function BlogPost() {
  const { id } = useParams();

  const { data: post, isLoading, error } = useQuery<BlogPost>({
    queryKey: ["/api/blog/posts", id],
  });

  const { data: relatedPosts = [] } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog/posts"],
    select: (posts) => posts.filter(p => p.id !== id).slice(0, 3),
  });

  const formatDate = (date: Date | string) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const estimateReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <ScrollProgress />
        <Header />
        <main className="container mx-auto px-6 py-20 max-w-4xl">
          <div className="animate-pulse space-y-8">
            <div className="h-8 bg-muted rounded w-1/4"></div>
            <div className="h-12 bg-muted rounded w-3/4"></div>
            <div className="h-6 bg-muted rounded w-1/2"></div>
            <div className="h-64 bg-muted rounded"></div>
            <div className="space-y-4">
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="h-4 bg-muted rounded"></div>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="container mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-destructive mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-6">The article you're looking for doesn't exist or has been removed.</p>
            <Link href="/blog">
              <Button data-testid="button-back-to-blog">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Header />
      
      <main>
        {/* Article Header */}
        <section className="py-20 px-6 bg-gradient-to-br from-muted/30 to-secondary/10">
          <div className="container mx-auto max-w-4xl">
            <Link href="/blog">
              <Button variant="outline" className="mb-8 glass-card" data-testid="button-back-to-blog">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
            
            <div className="text-center">
              <Badge className="mb-4 bg-primary text-primary-foreground">{post.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-black mb-6 text-gradient">
                {post.title}
              </h1>
              
              <div className="flex items-center justify-center gap-6 text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>Portfolio Author</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(post.createdAt)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{estimateReadingTime(post.content)} min read</span>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-2 mb-8">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline">{tag}</Badge>
                ))}
              </div>
              
              <Button variant="outline" className="glass-card" data-testid="button-share">
                <Share2 className="h-4 w-4 mr-2" />
                Share Article
              </Button>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12 px-6">
          <div className="container mx-auto max-w-4xl">
            <GlassCard className="p-8 md:p-12 rounded-3xl">
              {/* Featured Image Placeholder */}
              <div className="h-64 md:h-96 bg-gradient-to-br from-primary to-secondary rounded-2xl mb-8 relative">
                <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/20">
                    Featured Image
                  </Badge>
                </div>
              </div>
              
              {/* Article Body */}
              <div className="prose prose-lg max-w-none">
                <div className="text-lg leading-relaxed whitespace-pre-line">
                  {post.content}
                </div>
              </div>
              
              {/* Article Footer */}
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Published on</p>
                    <p className="font-semibold">{formatDate(post.createdAt)}</p>
                  </div>
                  <Button variant="outline" className="glass-card" data-testid="button-share-footer">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share Article
                  </Button>
                </div>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <section className="py-12 px-6 bg-gradient-to-br from-secondary/10 to-accent/10">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-3xl font-bold text-center mb-12 text-gradient">Related Articles</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <article key={relatedPost.id} className="glass-card rounded-3xl overflow-hidden hover-3d">
                    <div className="h-48 bg-gradient-to-br from-accent to-primary relative">
                      <div className="absolute bottom-4 left-4">
                        <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/20">
                          {relatedPost.category}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-lg mb-3 line-clamp-2">{relatedPost.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{relatedPost.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          <span>{formatDate(relatedPost.createdAt)}</span>
                        </div>
                        <Link href={`/blog/${relatedPost.id}`}>
                          <Button variant="link" className="text-primary p-0 text-sm" data-testid={`link-related-${relatedPost.id}`}>
                            Read More →
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      
      <Footer />
    </div>
  );
}
