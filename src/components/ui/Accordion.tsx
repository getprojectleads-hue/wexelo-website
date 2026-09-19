'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ question, answer, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className={`border-b transition-colors duration-300 ${
      isOpen ? 'border-electric/30' : 'border-border'
    }`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-3.5 min-[390px]:py-4 md:py-5 px-1 min-[390px]:px-2 md:px-1 text-left group"
        aria-expanded={isOpen}
      >
        <span className={`font-heading font-semibold text-[14.5px] min-[390px]:text-base sm:text-lg pr-8 transition-colors duration-200 ${
          isOpen ? 'text-electric' : 'text-primary-text'
        }`}>
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className={`flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full transition-colors duration-200 ${
            isOpen ? 'bg-electric text-white' : 'bg-light-bg text-secondary-text group-hover:bg-electric/10 group-hover:text-electric'
          }`}
        >
          <Plus className="w-4 h-4" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-4 md:pb-5 px-1 min-[390px]:px-2 md:px-1 text-[13.5px] min-[390px]:text-[14.5px] md:text-base text-secondary-text leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface AccordionProps {
  items: { question: string; answer: string }[];
  className?: string;
}

export function Accordion({ items, className = '' }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={className}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}
