import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { SEO } from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <SEO 
        title="404 - Page Not Found"
        description="The page you are looking for does not exist."
        path={location.pathname}
      />
      <div className="flex flex-col min-h-screen">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 max-w-2xl text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-6 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="inline-flex items-center justify-center px-6 py-2 bg-primary text-primary-foreground hover:bg-primary-dark rounded-md font-semibold transition-colors">
          Return to Home
        </a>
      </div>
    </div>
    </>
  );
};

export default NotFound;
