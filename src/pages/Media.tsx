import { SEO } from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Calendar } from "lucide-react";

// Placeholder news articles
const newsArticles = [
  {
    id: 1,
    title: "Civil Society SA Launches Property Rights Campaign",
    description: "New petition aims to protect small property owners from arbitrary expropriation without compensation.",
    date: "2024-01-15",
    source: "News24",
    url: "#",
  },
  {
    id: 2,
    title: "Community Mobilizes for Safer Streets",
    description: "Thousands sign petition demanding accountable policing and better community safety measures.",
    date: "2024-01-10",
    source: "Daily Maverick",
    url: "#",
  },
  {
    id: 3,
    title: "Non-Racialism Campaign Gains Momentum",
    description: "Civil society groups unite to oppose divisive politics and promote equal treatment for all citizens.",
    date: "2024-01-05",
    source: "Mail & Guardian",
    url: "#",
  },
  {
    id: 4,
    title: "Service Delivery Protests Reach National Scale",
    description: "Citizens demand functioning water, electricity, and sanitation services from elected officials.",
    date: "2023-12-20",
    source: "The Citizen",
    url: "#",
  },
  {
    id: 5,
    title: "Civil Society SA Publishes Annual Impact Report",
    description: "Report highlights key victories and ongoing campaigns for accountability and service delivery.",
    date: "2023-12-15",
    source: "Business Day",
    url: "#",
  },
  {
    id: 6,
    title: "Petition Success: Local Government Responds to Water Crisis",
    description: "After 10,000 signatures, municipality commits to emergency water infrastructure repairs.",
    date: "2023-12-01",
    source: "IOL",
    url: "#",
  },
];

const Media = () => {
  return (
    <>
      <SEO 
        title="Media"
        description="Latest news and media coverage of Civil Society SA campaigns, petitions, and community actions."
        path="/media"
      />
      <div className="flex flex-col min-h-screen">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="mb-4">Media Coverage</h1>
            <p className="text-xl text-muted-foreground mb-8 md:mb-12">
              Stay informed about our campaigns and their impact through news articles and media coverage.
            </p>

            {/* News Articles Grid */}
            <div className="grid grid-cols-1 gap-6">
              {newsArticles.map((article) => (
                <Card key={article.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2 hover:text-primary transition-colors">
                          <a href={article.url} className="flex items-center gap-2">
                            {article.title}
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </CardTitle>
                        <CardDescription>{article.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(article.date).toLocaleDateString('en-ZA', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                      <span>•</span>
                      <span className="font-medium">{article.source}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Placeholder notice */}
            <div className="mt-12 p-6 bg-secondary rounded-lg">
              <p className="text-sm text-muted-foreground text-center">
                <strong className="text-foreground">Note:</strong> These are placeholder articles for demonstration purposes. 
                Real news coverage will be added as campaigns progress.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Media;
