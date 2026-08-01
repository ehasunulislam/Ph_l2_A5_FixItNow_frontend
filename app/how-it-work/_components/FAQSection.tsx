import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    value: "pricing",
    question: "How much does it cost to use FixItNow?",
    answer:
      "FixItNow is free to browse. You only pay for the services you book with transparent pricing and no hidden fees.",
  },
  {
    value: "payment",
    question: "When does the technician get paid?",
    answer:
      "The technician receives payment after the service has been successfully completed and confirmed by the customer.",
  },
  {
    value: "quality",
    question: "What if I'm not happy with the work?",
    answer:
      "If you're not satisfied, contact our support team. We'll work with both parties to find a fair resolution.",
  },
  {
    value: "verification",
    question: "Are the technicians background checked?",
    answer:
      "Yes. Every technician goes through identity verification and profile review before joining FixItNow.",
  },
];

export default function FAQSection() {
  return (
    <section className="bg-[#1E1E1E] py-24">
      <div className="mx-auto max-w-4xl px-6">
        {/* Badge */}
        <div className="mb-3 flex justify-center">
          <span className="rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-red-400">
            FAQ
          </span>
        </div>

        {/* Heading */}
        <h2 className="mb-12 text-center text-4xl font-bold tracking-tight text-white">
          Questions, answered
        </h2>

        {/* Accordion */}
        <Accordion
          defaultValue={["pricing"]}
          className="space-y-4"
        >
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.value}
              value={faq.value}
              className="rounded-2xl border border-white/10 bg-[#252525] px-6 transition-all duration-300 hover:border-white/20"
            >
              <AccordionTrigger className="py-5 text-left text-base font-medium text-white">
                {faq.question}
              </AccordionTrigger>

              <AccordionContent className="pb-5 text-sm leading-7 text-gray-400">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}