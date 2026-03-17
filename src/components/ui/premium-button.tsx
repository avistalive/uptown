"use client";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface PremiumButtonProps {
  text: string;
  onClick?: () => void;
  href?: string;
  className?: string;
  icon?: React.ReactNode;
  variant?: "primary" | "secondary" | "white";
}

const PremiumButton = ({
  text,
  onClick,
  href,
  className,
  variant = "primary",
  icon,
}: PremiumButtonProps) => {
  const baseClasses = cn(
    "group relative flex items-center justify-center rounded-full py-1.5 px-6 transition-all duration-500 ease-out overflow-hidden shadow-xl hover:shadow-2xl",
    variant === "primary" && "bg-midnight text-white border border-white/10",
    variant === "secondary" && "bg-transparent text-midnight border border-midnight/30 hover:bg-midnight/10",
    variant === "white" && "bg-white text-midnight border border-midnight/10",
    className
  );

  const RobustButtonBody = () => (
    <div className="flex items-center gap-3">
      {/* Icon on left - Hidden initially */}
      <div className={cn(
        "absolute left-1.5 w-8 h-8 rounded-full flex items-center justify-center opacity-0 -translate-x-full group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-in-out group-hover:rotate-45",
        variant === "white" ? "bg-midnight" : "bg-white"
      )}>
        {icon || <ArrowUpRight size={16} className={variant === "white" ? "text-white" : "text-midnight"} />}
      </div>
      
      {/* Text in middle - Moves right */}
      <span className="text-sm font-medium transition-transform duration-500 ease-in-out group-hover:translate-x-5">
        {text}
      </span>

      {/* Icon on right - Hidden on hover */}
      <div className={cn(
        "w-8 h-8 rounded-full flex items-center justify-center group-hover:opacity-0 group-hover:translate-x-full transition-all duration-500 ease-in-out",
        variant === "white" ? "bg-midnight/10" : "bg-white/20"
      )}>
        {icon || <ArrowUpRight size={16} className={variant === "white" ? "text-midnight" : "text-white"} />}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        <RobustButtonBody />
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      <RobustButtonBody />
    </button>
  );
};

export default PremiumButton;
