import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AccordionProps {
  children: React.ReactNode;
  type: 'single' | 'multiple';
  collapsible?: boolean;
  className?: string;
}

interface AccordionItemProps {
  children: React.ReactNode;
  value: string;
  className?: string;
}

interface AccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
  isOpen?: boolean;
}

const Accordion = ({ children, className }: AccordionProps) => {
  return <div className={className}>{children}</div>;
};

const AccordionItem = ({ children, className }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn("border-b", className)}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          if (child.type === AccordionTrigger) {
            return React.cloneElement(child, { 
              onClick: () => setIsOpen(!isOpen),
              isOpen 
            } as React.ComponentProps<typeof AccordionTrigger>);
          }
          if (child.type === AccordionContent) {
            return React.cloneElement(child, { isOpen } as React.ComponentProps<typeof AccordionContent>);
          }
        }
        return child;
      })}
    </div>
  );
};

const AccordionTrigger = ({ children, className, onClick, isOpen }: AccordionTriggerProps & { isOpen?: boolean }) => {
  return (
    <div className="flex">
      <button
        className={cn(
          "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline",
          className
        )}
        onClick={onClick}
      >
        {children}
        <ChevronDown 
          className={cn(
            "h-4 w-4 shrink-0 transition-transform duration-200", 
            isOpen ? "rotate-180" : ""
          )} 
        />
      </button>
    </div>
  );
};

const AccordionContent = ({ children, className, isOpen }: AccordionContentProps) => {
  if (!isOpen) return null;

  return (
    <div className="overflow-hidden text-sm">
      <div className={cn("pb-4 pt-0", className)}>
        {children}
      </div>
    </div>
  );
};

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };