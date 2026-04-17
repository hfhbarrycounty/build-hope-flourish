import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-heading text-7xl font-bold text-primary">404</h1>
        <h2 className="mt-4 font-heading text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">The page you're looking for doesn't exist.</p>
        <div className="mt-6">
          <a href="/" className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-brand">Go Home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Habitat for Humanity Barry County" },
      { name: "description", content: "Building homes, communities and hope in Barry County, Michigan since 1989." },
      { property: "og:title", content: "Habitat for Humanity Barry County" },
      { property: "og:description", content: "Building homes, communities and hope in Barry County, Michigan since 1989." },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Habitat for Humanity Barry County" },
      { name: "twitter:description", content: "Building homes, communities and hope in Barry County, Michigan since 1989." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/284f1d98-cd24-4122-9b8e-a3290a46aa41/id-preview-16c189d8--2761e6c8-72bc-4f85-ac0a-f2d6a53b2865.lovable.app-1776450992990.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/284f1d98-cd24-4122-9b8e-a3290a46aa41/id-preview-16c189d8--2761e6c8-72bc-4f85-ac0a-f2d6a53b2865.lovable.app-1776450992990.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
