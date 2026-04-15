import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import AnimatedSection from "../components/AnimatedSection";
import { ArrowLeft, Calendar } from "lucide-react";
import { getNewsItem, newsItems } from "../lib/news";

export const Route = createFileRoute("/news/$slug")({
  head: ({ params }) => {
    const item = getNewsItem(params.slug);
    return {
      meta: [
        { title: item ? `${item.title} — Habitat for Humanity Barry County` : "News — Habitat Barry County" },
        { name: "description", content: item?.excerpt ?? "" },
        { property: "og:title", content: item?.title ?? "News" },
        { property: "og:description", content: item?.excerpt ?? "" },
      ],
    };
  },
  component: NewsArticlePage,
  notFoundComponent: () => (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="text-center">
        <h1 className="font-heading text-4xl font-bold text-foreground">Article not found</h1>
        <Link to="/" className="mt-4 inline-block text-primary hover:underline">Go Home</Link>
      </div>
    </div>
  ),
});

function NewsArticlePage() {
  const { slug } = Route.useParams();
  const item = getNewsItem(slug);

  if (!item) {
    throw notFound();
  }

  // Find adjacent articles for navigation
  const currentIndex = newsItems.findIndex((n) => n.slug === slug);
  const prevArticle = currentIndex < newsItems.length - 1 ? newsItems[currentIndex + 1] : null;
  const nextArticle = currentIndex > 0 ? newsItems[currentIndex - 1] : null;

  return (
    <>
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[350px] overflow-hidden">
        <img src={item.image} alt={item.title} className="h-full w-full object-cover" style={{ objectPosition: "center 30%" }} width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/10" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-4xl px-4 pb-12">
            <AnimatedSection>
              <Link to="/" className="mb-4 inline-flex items-center gap-1.5 text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
              <div className="flex items-center gap-2 text-primary-foreground/60">
                <Calendar className="h-4 w-4" />
                <time className="text-sm">{item.date}</time>
              </div>
              <h1 className="mt-2 font-heading text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl">{item.title}</h1>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              {item.body.split("\n\n").map((paragraph, i) => (
                <p key={i} className="mb-6 leading-relaxed">{paragraph}</p>
              ))}
            </div>
          </AnimatedSection>

          {/* Article navigation */}
          <AnimatedSection delay={0.1}>
            <div className="mt-16 grid gap-4 border-t border-border pt-8 sm:grid-cols-2">
              {prevArticle && (
                <Link
                  to="/news/$slug"
                  params={{ slug: prevArticle.slug }}
                  className="group rounded-xl border border-border p-5 transition-all hover:-translate-y-0.5 hover:shadow-brand"
                >
                  <span className="text-xs text-muted-foreground">← Older</span>
                  <h3 className="mt-1 font-heading font-semibold text-foreground group-hover:text-primary">{prevArticle.title}</h3>
                </Link>
              )}
              {nextArticle && (
                <Link
                  to="/news/$slug"
                  params={{ slug: nextArticle.slug }}
                  className="group rounded-xl border border-border p-5 text-right transition-all hover:-translate-y-0.5 hover:shadow-brand sm:col-start-2"
                >
                  <span className="text-xs text-muted-foreground">Newer →</span>
                  <h3 className="mt-1 font-heading font-semibold text-foreground group-hover:text-primary">{nextArticle.title}</h3>
                </Link>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
