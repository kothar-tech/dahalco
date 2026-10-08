import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

type LogoProps = {
  /** "white" turns the blue wordmark white for dark backgrounds. */
  variant?: "colour" | "white";
  className?: string;
  priority?: boolean;
};

// The one place the logo is rendered. The file is public/images/logo-original.png.
export default function Logo({
  variant = "colour",
  className = "",
  priority = false,
}: LogoProps) {
  return (
    <Image
      src="/images/logo-original.png"
      alt={`${siteConfig.name}, ${siteConfig.shortTagline}`}
      width={511}
      height={184}
      priority={priority}
      unoptimized
      className={`w-auto ${variant === "white" ? "brightness-0 invert" : ""} ${className}`}
    />
  );
}
