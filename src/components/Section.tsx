import React, { ReactNode } from "react";

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
  titleClassName = "text-2xl font-bold mb-4 dark:text-white",
  contentClassName = "space-y-4",
}) => {
  return (
    <section id={id} className={`py-8 ${className}`}>
      {title ? (
        <div className="container mx-auto px-4 w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
          <h2 className={titleClassName}>{title}</h2>
          <div className={contentClassName}>{children}</div>
        </div>
      ) : (
        children
      )}
    </section>
  );
};

export default Section;
