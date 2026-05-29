import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  title?: string;
  children: ReactNode;
  className?: string;
  titleClassName?: string;
  contentClassName?: string;
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  children,
  className = "",
  titleClassName = "section-label",
  contentClassName = "",
}) => {
  return (
    <section id={id} className={cn("section-block", className)}>
      {title ? (
        <>
          <h2 className={titleClassName}>{title}</h2>
          <div className={cn(contentClassName)}>{children}</div>
        </>
      ) : (
        children
      )}
    </section>
  );
};

export default Section;
