"use client";

import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import BackButton from "./back-button";
import Header from "./header";
import Social from "./social";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

import { motion } from "framer-motion";

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: CardWrapperProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-[420px]"
    >
      <Card className="shadow-lg border border-midnight/5 bg-white rounded-3xl overflow-hidden px-2 sm:px-4">
        <CardHeader className="pt-8 px-6">
          <Header label={headerLabel} />
        </CardHeader>
        <CardContent className="px-6 pb-2">
          {children}
        </CardContent>
        {showSocial && (
          <CardFooter className="px-6">
            <Social />
          </CardFooter>
        )}
        <CardFooter className="px-6 pb-8 flex flex-col items-center">
          <BackButton label={backButtonLabel} href={backButtonHref} />
        </CardFooter>
      </Card>
    </motion.div>
  );
};
