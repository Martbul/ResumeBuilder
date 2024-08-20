import Image from "next/image";
import images from "@/constants/images";
import Link from "next/link";

const allTemplates = () => {
  
  return (
    <>
      <div>
        <div className="flex flex-col items-center my-10">
          <h1 className="text-4xl my-4">Find the perfect template</h1>
          <p className="my-4">
            Each templates follows the best practisec you need to get hired.
            Just show your true skills and potential
          </p>
        </div>

        <div className="flex justify-evenly my-8 border-b border-gray-300">
          <p>All templates</p>
          <p>Simple</p>
          <p>Creative</p>
          <p>Modern</p>
        </div>

        <div className="flex flex-row flex-wrap lg:mx-72 justify-evenly">
          <Link href="createResume/1" className="lg:my-12">
            <div className="bg-neutral-200 w-full sm:w-auto p-2">
              <div className="max-w-xs mx-auto">
                {/* Removed w-full on the div */}
                <Image
                  src={images.template1}
                  alt="t1"
                  className="w-full h-auto object-contain hover:opacity-80"
                />
              </div>
            </div>
          </Link>

          <Link href="createResume/2" className="lg:my-12">
            <div className="bg-neutral-200 w-full sm:w-auto p-2">
              <div className="max-w-xs mx-auto">
                <Image
                  src={images.template2}
                  alt="t2"
                  className="w-full h-auto object-contain hover:opacity-80"
                />
              </div>
            </div>
          </Link>

          <Link href="createResume/3" className="lg:my-12">
            <div className="bg-neutral-200 w-full sm:w-auto p-2">
              <div className="max-w-xs mx-auto">
                <Image
                  src={images.template3}
                  alt="t3"
                  className="w-full h-auto object-contain hover:opacity-80"
                />
              </div>
            </div>
          </Link>
          <Link href="createResume/4" className="lg:my-12">
            <div className="bg-neutral-200 w-full sm:w-auto p-2">
              <div className="max-w-xs mx-auto">
                <Image
                  src={images.template3}
                  alt="t3"
                  className="w-full h-auto object-contain hover:opacity-80"
                />
              </div>
            </div>
          </Link>
          <Link href="createResume/5" className="lg:my-12">
            <div className="bg-neutral-200 w-full sm:w-auto p-2">
              <div className="max-w-xs mx-auto">
                <Image
                  src={images.template5}
                  alt="t3"
                  className="w-full h-auto object-contain hover:opacity-80"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default allTemplates;
