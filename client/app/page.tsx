
import Image from "next/image";
import images from "../constants/images"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navaigation from "@/components/navigation/Navigation";

export default function Home() {
  return (

    <main className="">
      <Navaigation />
      <section className="flex flex-col h-screen items-center bg-emerald-200">
        <div className="text-4xl font-bold mt-4">Make your FREE resume</div>
        <div className="flex flex-col items-center flex-grow">
          <h1 className="">Get your job with ease</h1>
          <p className="">
            Use professional templates and follow the best 'resume rules'. Easy
            to use and made in minutes
          </p>
          <Button>
            <Link href="allTemplates">Create My Resume</Link>
          </Button>
          <p>22,165 resumes created today</p>
        </div>
        <div className="mt-auto">
          <Image src={images.mainResume} alt="" />
        </div>
      </section>

      <section>josdhaushdaui</section>
    </main>
  );
}
