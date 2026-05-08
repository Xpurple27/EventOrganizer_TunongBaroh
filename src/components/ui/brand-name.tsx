
import { cn } from "@/lib/utils";

interface BrandNameProps {
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  withSubtext?: boolean;
}

export function BrandName({ className, size = "md" }: BrandNameProps) {
  const sizeClasses = {
    xs: "text-[10px] md:text-xs",
    sm: "text-xs md:text-sm",
    md: "text-sm md:text-lg",
    lg: "text-lg md:text-3xl",
    xl: "text-3xl md:text-6xl",
    "2xl": "text-5xl md:text-7xl",
  };

  return (
    <div className={cn("flex items-center", className)}>
      <div className="flex items-baseline leading-none">
        <span 
          style={{ fontFamily: '"Berlin Sans FB", "Arial Rounded MT Bold", sans-serif' }} 
          className={cn("font-bold text-black lowercase", sizeClasses[size])}
        >
          tunong
        </span>
        <span 
          style={{ fontFamily: '"Comic Sans MS", "Comic Sans", cursive' }} 
          className={cn("font-bold text-[#FF0000] uppercase ml-0.5", sizeClasses[size])}
        >
          BARÔH
        </span>
      </div>
    </div>
  );
}
