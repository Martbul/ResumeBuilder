"use client"
import Image from "next/image";
import images from "@/constants/images";
import Link from "next/link";
import Navaigation from "@/components/navigation/Navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const allTemplates = () => {
    const templateVariants = {
      hidden: { opacity: 0, y: -140 },
      visible: { opacity: 1, y: 0 }, 
    };
  return (
    <>
      <Navaigation />

      <div>
        <div className="flex flex-col items-center mx-6 text-center my-8 lg:my-24 lg:mt-16">
          <h1 className="lg:text-4xl text-2xl font-semibold mt-8  lg:font-bold lg:my-4">
            Find the perfect template
          </h1>
          <p className="my-4">
            Each templates follows the best practisec you need to get hired.
            Just show your true skills and potential
          </p>
        </div>

        <div className="flex justify-evenly lg:mx-72 lg:my-8 mb-12 border-b border-gray-300">
          <Button className="bg-transparent lg:text-xl lg:font-bold text-neutral-500 hover:text-black hover:bg-transparent">
            <Link href="">All templates</Link>
          </Button>
          <Button className="bg-transparent lg:text-xl lg:font-bold text-neutral-500 hover:text-black hover:bg-transparent">
            <Link href="">Simple</Link>
          </Button>
          <Button className="bg-transparent lg:text-xl lg:font-bold text-neutral-500 hover:text-black hover:bg-transparent">
            <Link href="">Creative</Link>
          </Button>
          <Button className="bg-transparent lg:text-xl lg:font-bold text-neutral-500 hover:text-black hover:bg-transparent">
            <Link href="">Modern</Link>
          </Button>
        </div>

        <div className="flex flex-row flex-wrap lg:mx-64 justify-evenly">
          {[1, 2, 3, 4, 5, 6, 7].map((id, index) => (
            <motion.div
              key={id}
              className="lg:my-12"
              variants={templateVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Link href={`createResume/${id}`}>
                <div className="bg-neutral-200 w-full sm:w-auto my-4 p-2 lg:m-4 lg:p-4">
                  <div className="max-w-sm mx-auto">
                    <Image
                      src={images[`template${id}`]}
                      // src={images[]}
                      alt={`t${id}`}
                      className="w-full h-auto object-contain hover:opacity-80"
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default allTemplates;
