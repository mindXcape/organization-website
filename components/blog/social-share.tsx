"use client";

import { usePathname } from "next/navigation";
import { Twitter, Facebook, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SocialShare({ title }: { title: string }) {
  const pathname = usePathname();
  const url =
    typeof window !== "undefined" ? `${window.location.origin}${pathname}` : "";

  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    url
  )}&text=${encodeURIComponent(title)}`;
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    url
  )}`;
  const linkedinShareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
    url
  )}&title=${encodeURIComponent(title)}`;

  return (
    <div className="hidden lg:flex flex-col gap-2 fixed top-1/2 -translate-y-1/2 left-4 xl:left-16 z-40">
      <Button
        asChild
        variant="outline"
        size="icon"
        className="rounded-full bg-background/50 backdrop-blur-sm"
      >
        <a
          href={twitterShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Twitter"
        >
          <Twitter className="h-4 w-4" />
        </a>
      </Button>
      <Button
        asChild
        variant="outline"
        size="icon"
        className="rounded-full bg-background/50 backdrop-blur-sm"
      >
        <a
          href={facebookShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Facebook"
        >
          <Facebook className="h-4 w-4" />
        </a>
      </Button>
      <Button
        asChild
        variant="outline"
        size="icon"
        className="rounded-full bg-background/50 backdrop-blur-sm"
      >
        <a
          href={linkedinShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on LinkedIn"
        >
          <Linkedin className="h-4 w-4" />
        </a>
      </Button>
    </div>
  );
}
