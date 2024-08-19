
import Image from "next/image";
import images from "../constants/images"
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <section className="flex h-screen flex-col items-center mt-4 bg-emerald-200">
        <div className="">
            Make your FREE resume
        </div>
        <div className="flex flex-col items-center">
          <h1 className="">
                Get your job witth ease
          </h1>
          <p className="">
            Use proffesional templates and folow the best 'resume rules'. Easy to use and made in minutes
          </p>
        </div>
        <Button>
          <Link href="allTemplates">
            Create My Resume
          </Link>
       
        </Button>
        <p>22,165 resumes created today</p>
        <Image src={images.mainResume} alt="" />
      </section>

      <section>
        josdhaushdaui
      </section>
     
    </main>
  );
}
