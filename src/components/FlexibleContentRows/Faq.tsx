import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default function Faq() {
  const faqs = [
    {
      value: "item-1",
      question: "Question?",
      answer: "Answer.",
    },
    {
      value: "item-2",
      question: "Question?",
      answer: "Answer.",
    },
    {
      value: "item-3",
      question: "Question?",
      answer: "Answer.",
    },
  ];

  return (
    <>
      <div className="bg-purple-50">
        <div className="w-full flex justify-center">
          <div className="w-4/5 border-2 border-x-0 border-b-0 border-t-purple-700"></div>
        </div>
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-purple-700 tracking-wide uppercase">
              Pricing
            </h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Take control of your team.
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              Start building for free, then add a site plan to go live. Account
              plans unlock additional features.
            </p>

            <Accordion type="single" collapsible>
              {faqs.map((faq) => {
                return (
                  <div key={faq.value}>
                    <AccordionItem
                      value={faq.value}
                      className={
                        "border border-x-0 border-t-0 border-b-gray-600"
                      }
                    >
                      <AccordionTrigger className={"text-gray-500"}>
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className={"text-gray-500"}>
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </div>
                );
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}
