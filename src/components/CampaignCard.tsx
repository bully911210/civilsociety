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
      className="group flex flex-col h-full bg-card rounded-xl overflow-hidden border border-border hover:border-primary transition-all hover:shadow-lg"
      style={{ 
        width: '100%',
        maxWidth: '340px',
        margin: '0 auto',
        borderRadius: '12px'
      }}
    >
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={imageAlt}
          width="340"
          height="191"
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex flex-col flex-1 p-8">
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors" style={{ marginTop: '16px' }}>
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-2 flex-1 text-base" style={{ marginBottom: '12px' }}>
          {excerpt}
        </p>
        <div className="flex items-center text-primary font-semibold text-sm" style={{ marginTop: '24px' }}>
          <span>Sign the Petition</span>
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
};

