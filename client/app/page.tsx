"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import images from "../constants/images";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navaigation from "@/components/navigation/Navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Laila, Lora } from "next/font/google";

const laila = Laila({
  weight: "700",
  subsets: ["latin"],
});
const lora = Lora({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="">
      <Navaigation />
      <section className="flex flex-col lg:h-screen items-center bg-emerald-200 px-4 pt-2">
        <div
          className={`text-3xl sm:text-4xl lg:text-5xl text-center mt-4 sm:mt-10 lg:mt-20 my-2 ${laila.className}`}
        >
          Make your FREE resume
        </div>
        <div className="flex flex-col items-center lg:flex-grow text-center">
          <p
            className={`text-sm sm:text-base lg:text-lg lg:my-4 ${lora.className}`}
          >
            Use professional templates and follow the best 'resume rules'. Easy
            to use and made in minutes
          </p>
        </div>
        <div className="mt-auto w-full flex flex-col items-center">
          <div className="flex flex-col items-center my-6 lg:my-10 gap-4 lg:gap-6">
            <Button className="px-4 py-3 text-base lg:text-lg w-full lg:p-7">
              <Link href="allTemplates" className="w-full text-center">
                Create My Resume
              </Link>
            </Button>
            <p className="text-xs sm:text-sm lg:text-base">
              22,165 resumes created today
            </p>
          </div>
          <motion.div
            className="relative w-full max-w-sm sm:max-w-md lg:max-w-2xl overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Image
              src={images.mainCV}
              alt="Resume example"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      <section className="bg-neutral-100">
        <div className="lg:p-40 flex flex-col items-center lg:gap-24 py-10">
          <div>
            <h1 className="lg:text-4xl lg:font-bold my-4 font-semibold text-xl">
              Frequently Asked Questions
            </h1>
          </div>
          <div className="lg:w-3/5">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="w-72 lg:w-full ">
                  Is it accessible?
                </AccordionTrigger>
                <AccordionContent className="w-72 lg:w-full ">
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="w-72 lg:w-full ">
                  How to customize my resume?
                </AccordionTrigger>
                <AccordionContent className="w-72 lg:w-full ">
                  Our resume templates are designed to adapt to your content and
                  look great across all of our designs. Learn more in this
                  article.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="w-72 lg:w-full ">
                  Is it animated?
                </AccordionTrigger>
                <AccordionContent className="w-72 lg:w-full ">
                  Yes. It's animated by default, but you can disable it if you
                  prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section className="bg-emerald-400">
        <div className="flex justify-center lg:p-40 lg:hidden p-8">
          <Image
            src={images.CV3Main}
            alt="3cv"
            className="min-w-72 max-w-md mx-16"
          />
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-center lg:justify-center lg:px-40 lg:p-40 lg:gap-28 p-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="flex flex-col">
              <h3 className="lg:text-sm text-xs lg:my-2">
                Start building your career
              </h3>
              <h1
                className={`lg:text-4xl lg:max-w-96 lg:min-w-96 text-xl lg:font-semibold ${laila.className}`}
              >
                Professional resumes for effective job interviews
              </h1>

              <p className={`lg:max-w-96 lg:min-w-80 my-4 ${lora.className}`}>
                A great job application leads to a good interview. An amazing
                resume is what makes it all possible. Start off strong with the
                hiring manager by creating a positive professional image. A job
                interview can be much easier if they have a favorable view of
                your resume and cover letter.
              </p>
              <div className="flex flex-row justify-center mt-4 lg:justify-start gap-6">
                <Button className="text-xs max-w-28 lg:max-w-72 lg:text-base">
                  Get Started Now
                </Button>
                <Button className=" text-xs max-w-28 lg:max-w-72 lg:text-base">
                  Resume Examples
                </Button>
              </div>
            </div>
          </motion.div>
          <div className="flex hidden lg:block">
            <Image src={images.CV3Main} alt="3cv" className="lg:max-w-xl" />
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col p-16 lg:p-40 items-center ">
          <h1 className="flex text-center text-2xl lg:text-6xl lg:max-w-2xl lg:font-semibold font-medium">
            Join over 39,576,000 users world wide
          </h1>
          <p className="lg:my-2 mb-8 lg:text-lg">Absolutely FREE</p>
          <Button className="lg:mt-16 lg:p-8 lg:text-lg">
            <Link href="allTemplates" className="w-full text-center">
              Create My Resume
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
