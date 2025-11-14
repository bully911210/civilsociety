import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CampaignCardProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
}

export const CampaignCard = ({ id, title, excerpt, image, imageAlt }: CampaignCardProps) => {
  return (
    <Link 
      to={`/campaigns/${id}`}
      className="group flex flex-col h-full bg-card rounded-lg overflow-hidden border border-border hover:border-primary transition-all hover:shadow-lg"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={imageAlt}
          width="400"
          height="300"
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-2 flex-1">
          {excerpt}
        </p>
        <div className="flex items-center text-primary font-semibold text-sm mt-auto">
          <span>Sign the Petition</span>
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
};

