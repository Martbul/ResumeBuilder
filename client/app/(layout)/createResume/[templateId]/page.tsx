"use client";

import PDFtemplate1 from "@/app/pdfTemplates/PDFtemplate1";
import PDFtemplate2 from "@/app/pdfTemplates/PDFtemplate2";
import PDFtemplate3 from "@/app/pdfTemplates/PDFtemplate3";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PDFViewer } from "@react-pdf/renderer";
import { useEffect, useState } from "react";

interface CreateResumeFormProps {
  params: {
    templateId: string;
  };
}

type ResumeDeatilsFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth?: string;
  professionalSummary?: string;
  city?: string;
  address?: string;
  employmentHistory?: string;
  education?: string;
  photo?: string;
  socialLinks?: Array<string>;
  skills?: Array<string>;
  age?: number;
};

const createResumeForm: React.FC<CreateResumeFormProps> = ({ params }) => {
  const { templateId } = params;
  const [resumeDetails, setResumeDetails] = useState<ResumeDeatilsFormData>({
    firstName: "John",
    lastName: "Doe",
    age: 20,
    photo: "gosouAeth@gmail.com",
    email: "",
    phone: "+359 888 571 991",
    city: "",
    address: "",
    dateOfBirth: "",
    professionalSummary: "",
    employmentHistory: "",
    education: "",
    socialLinks: [],
    skills: [],
  });

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setResumeDetails((prevDetails) => ({
      ...prevDetails,
      [id]: value,
    }));
  };

  return (
    <>
      <main className="flex h-screen">
        <section className="w-1/2">
          <div className="flex flex-wrap gap-4 justify-center my-10">
            <div className="w-full sm:w-1/2 lg:w-1/3">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="firstName">First Name</Label>
                <Input type="text" id="firstName" placeholder="John"    onChange={handleInputChange} />
              </div>
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/3">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="lastName">Last Name</Label>
                <Input type="test" id="lastName" placeholder="Doe"    onChange={handleInputChange} />
              </div>
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/3">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email-3">Email</Label>
                <Input type="email" id="email-3" placeholder="gosouAeth@gmail.com"   onChange={handleInputChange} />
              </div>
            </div>

          

            <div className="w-full sm:w-1/2 lg:w-1/3">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="phone">Phone</Label>
                <Input type="text" id="phone" placeholder="+359 888 571 991"    onChange={handleInputChange}/>
              </div>
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/3">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email-6">Email</Label>
                <Input type="email" id="email-6" placeholder="Email"    onChange={handleInputChange} />
              </div>
            </div>
              <div className="w-full sm:w-1/2 lg:w-1/3">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email-4">Email</Label>
                <Input type="email" id="email-4" placeholder="Email"    onChange={handleInputChange}/>
              </div>
            </div>
          </div>
        </section>

        <section className="w-1/2 bg-emerald-200 flex justify-center">
          
            <PDFViewer className="flex lg:w-2/3 md:w-1/3"  showToolbar={false}>
                    {/* <PDFtemplate1 resumeDetails={resumeDetails} /> */}
                    <PDFtemplate2 resumeDetails={resumeDetails} />
                    {/* <PDFtemplate3 resumeDetails={resumeDetails} /> */}
            </PDFViewer>
        </section>
      </main>
    </>
  );
};

export default createResumeForm;
