import { Facebook, Twitter, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SocialShareProps {
  campaignId: string;
  campaignName: string;
}

export const SocialShare = ({ campaignId, campaignName }: SocialShareProps) => {
  const url = `https://civilsocietysa.org/campaigns/${campaignId}`;
  const text = `I signed the ${campaignName} petition`;

  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    x: `https://x.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`,
  };

  return (
    <div className="bg-secondary p-6 rounded-lg">
      <h3 className="text-lg font-bold mb-4">Share this petition</h3>
      <p className="text-muted-foreground mb-4">Help amplify this cause by sharing with your network.</p>
      <div className="flex flex-wrap gap-3">
        <Button
          asChild
          variant="outline"
          size="sm"
          className="flex-1 min-w-[140px]"
        >
          <a href={shareUrls.facebook} target="_blank" rel="noopener noreferrer">
            <Facebook className="mr-2 h-4 w-4" />
            Facebook
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          size="sm"
          className="flex-1 min-w-[140px]"
        >
          <a href={shareUrls.x} target="_blank" rel="noopener noreferrer">
            <Twitter className="mr-2 h-4 w-4" />
            X
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          size="sm"
          className="flex-1 min-w-[140px]"
        >
          <a href={shareUrls.whatsapp} target="_blank" rel="noopener noreferrer">
            <Share2 className="mr-2 h-4 w-4" />
            WhatsApp
          </a>
        </Button>
      </div>
    </div>
  );
};
