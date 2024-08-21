import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "@/app/utils/svg";


export default function Navaigation() {
   return (
     <header className="flex h-14 items-center bg-white px-4 text-white shadow-md lg:px-36 lg:h-16">
       <Sheet>
         <SheetTrigger asChild>
           <Button variant="ghost" size="icon" className="lg:hidden">
             <MenuIcon className="h-6 w-6" />
             <span className="sr-only">Toggle navigation menu</span>
           </Button>
         </SheetTrigger>
         <SheetContent side="left" className="max-w-36">
           <div className="flex flex-col gap-4 ">
             <Link
               href="#"
               className="flex items-center justify-center"
               prefetch={false}
             >
               {/* <PoduimLogoIcon className="h-8 w-8" /> */}
               <span className="sr-only">Acme Inc</span>
             </Link>
             <nav className="flex flex-col gap-2 text-gray-900">
               <Link
                 href="/allTemplates"
                 className="text-sm font-medium underline-offset-4 hover:underline"
                 prefetch={false}
               >
                 Resume
               </Link>
               <Link
                 href="#"
                 className="text-sm font-medium underline-offset-4 hover:underline"
                 prefetch={false}
               >
                 Cover Letter
               </Link>
               <Link
                 href="#"
                 className="text-sm font-medium underline-offset-4 hover:underline"
                 prefetch={false}
               >
                 Blog
               </Link>
               <Link
                 href="#"
                 className="text-sm font-medium underline-offset-4 hover:underline"
                 prefetch={false}
               >
                 FAQ
               </Link>
             </nav>
           </div>
         </SheetContent>
       </Sheet>
       <div className="flex flex-1 items-center justify-center lg:justify-between">
         <Link
           href="#"
           className="flex items-center justify-center"
           prefetch={false}
         >
           {/* <PoduimLogoIcon className="h-8 w-8" /> */}
           <span className="sr-only">Acme Inc</span>
         </Link>
         <nav className="hidden items-center gap-4 lg:flex text-gray-900">
           <Link
             href="#"
             className="text-sm font-medium underline-offset-4 hover:underline"
             prefetch={false}
           >
             Resume
           </Link>
           <Link
             href="#"
             className="text-sm font-medium underline-offset-4 hover:underline"
             prefetch={false}
           >
             Cover Letter
           </Link>
           <Link
             href="#"
             className="text-sm font-medium underline-offset-4 hover:underline"
             prefetch={false}
           >
             Blog
           </Link>
           <Link
             href="#"
             className="text-sm font-medium underline-offset-4 hover:underline"
             prefetch={false}
           >
             FAQ
           </Link>
         </nav>
       </div>
     </header>
   );
}
