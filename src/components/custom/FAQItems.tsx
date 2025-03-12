import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";
import React from "react";

const FAQItems = () => {
  return (
    <>
      {faqs.map((faq, idx) => (
        <AccordionItem
          value={`faq-${idx}`}
          className="border backdrop-blur-md bg-white/5 px-8 rounded-lg"
          key={idx}
        >
          <AccordionTrigger className="font-semibold text-start">
            {faq.title}
          </AccordionTrigger>
          <AccordionContent className="">{faq.content}</AccordionContent>
        </AccordionItem>
      ))}
    </>
  );
};

export default FAQItems;

const faqs = [
  {
    title: "Is it accessible?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et atque soluta aliquid modi quibusdam libero similique, dicta amet dolorem eum fuga minus! Doloremque architecto eaque excepturi voluptates doloribus nulla maiores?",
  },
  {
    title: "How do I use it?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et atque soluta aliquid modi quibusdam libero similique, dicta amet dolorem eum fuga minus! Doloremque architecto eaque excepturi voluptates doloribus nulla maiores?",
  },
  {
    title: "Is it open source?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et atque soluta aliquid modi quibusdam libero similique, dicta amet dolorem eum fuga minus! Doloremque architecto eaque excepturi voluptates doloribus nulla maiores?",
  },
  {
    title: "What is the license?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et atque soluta aliquid modi quibusdam libero similique, dicta amet dolorem eum fuga minus! Doloremque architecto eaque excepturi voluptates doloribus nulla maiores?",
  },
  {
    title: "Can I use it in a commercial project?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et atque soluta aliquid modi quibusdam libero similique, dicta amet dolorem eum fuga minus! Doloremque architecto eaque excepturi voluptates doloribus nulla maiores?",
  },
];
