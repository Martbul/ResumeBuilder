"use client";

import PDFtemplate1 from "@/app/pdfTemplates/PDFtemplate1";
import PDFtemplate2 from "@/app/pdfTemplates/PDFtemplate2";
import PDFtemplate3 from "@/app/pdfTemplates/PDFtemplate3";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PDFDownloadLink, pdf } from "@react-pdf/renderer"; 
import { useState, useCallback } from "react";
import debounce from "lodash.debounce";
import type { ResumeDeatilsFormData } from "@/app/utils/types";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";


interface CreateResumeFormProps {
  params: {
    templateId: string;
  };
}
const PDFViewer = dynamic(() => import("@react-pdf/renderer").then(mod => mod.PDFViewer), {
  ssr: false
});

const createResumeForm: React.FC<CreateResumeFormProps> = ({ params }) => {
  const { templateId } = params
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
    professionalSummaryTITLE: "Professional Summary",
    emplymentTITLE: "Employment History",
    socialLinksTITLE: "Social Links",
    skillsTITLE: "Skills",
    employmentHistory: "",
    education: "",
    socialLinks: [],
    skills: [],
  });

  const handleInputChange = useCallback(
    debounce((id: string, value: string) => {
      setResumeDetails((prevDetails) => ({
        ...prevDetails,
        [id]: value,
      }));
    }, 700),
    []
  );

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    handleInputChange(id, value);
  };
  const downloadTemplate = (templateId: string) => {
    switch (templateId) {
      case "1":
        return <PDFtemplate1 resumeDetails={resumeDetails} />;
      case "2":
        return <PDFtemplate2 resumeDetails={resumeDetails} />;
      case "3":
        return <PDFtemplate3 resumeDetails={resumeDetails} />;
    
    }
  };

  const handleDownloadPDF = async () => {
    try {
      const doc = downloadTemplate(templateId);
      const blob = await pdf(doc).toBlob();

      saveAs(blob, "resume.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };
  return (
    <>
      <main className="flex h-screen">
        <section className="w-1/2 px-36">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 my-10">
            <div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  type="text"
                  id="firstName"
                  placeholder="John"
                  onChange={onChange}
                />
              </div>
            </div>

            <div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  type="text"
                  id="lastName"
                  placeholder="Doe"
                  onChange={onChange}
                />
              </div>
            </div>

            <div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="gosouAeth@gmail.com"
                  onChange={onChange}
                />
              </div>
            </div>

            <div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  type="text"
                  id="phone"
                  placeholder="+359 888 571 991"
                  onChange={onChange}
                />
              </div>
            </div>

            <div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="city">City</Label>
                <Input
                  type="text"
                  id="city"
                  placeholder="New York"
                  onChange={onChange}
                />
              </div>
            </div>

            <div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="address">Address</Label>
                <Input
                  type="text"
                  id="address"
                  placeholder="123 Main St"
                  onChange={onChange}
                />
              </div>
            </div>
          </div>

          {/* Professional Summary Section */}
          <div className="my-8">
            <h2 className="text-lg font-semibold"> <Input
              type="text"
              id="professionalSummaryTITLE"
              onChange={onChange}
              className="lg:h-12 border-none"
              defaultValue={resumeDetails.professionalSummaryTITLE}
            /></h2>
            <p className="mb-2">
              Write 2-4 short, energetic sentences about your achievements and motivation.
            </p>
            <Input
              type="text"
              id="professionalSummary"
              placeholder="Experienced writer with a record of..."
              onChange={onChange}
              className="lg:h-24"
            />
          </div>

          {/* Employment History Section */}
          <div className="my-8">
          <h2 className="text-lg font-semibold"> <Input
              type="text"
              id="emplymentTITLE"
              onChange={onChange}
              className="lg:h-12 border-none"
              defaultValue={resumeDetails.emplymentTITLE}
            /></h2>
            <p className="mb-2">
              Mention the role and what you did. List your key achievements.
            </p>
            <Input
              type="text"
              id="employmentHistory"
              placeholder="Previous role and responsibilities"
              onChange={onChange}
              className="lg:h-24"
            />
          </div>

          {/* Social Links Section */}
          <div className="my-8">
         <h2 className="text-lg font-semibold"> <Input
              type="text"
              id="socialLinksTITLE"
              onChange={onChange}
              className="lg:h-12 border-none"
              defaultValue={resumeDetails.socialLinksTITLE}
            /></h2>
            <p className="mb-2">
              Add links to your social profiles or personal website.
            </p>
            <Input
              type="text"
              id="socialLinks"
              placeholder="LinkedIn, GitHub, etc."
              onChange={onChange}
            />
          </div>

          {/* Skills Section */}
          <div className="my-8">
             <h2 className="text-lg font-semibold"> <Input
              type="text"
              id="skillsTITLE"
              onChange={onChange}
              className="lg:h-12 border-none"
              defaultValue={resumeDetails.skillsTITLE}
            /></h2>
            <p className="mb-2">
              List your most important professional skills.
            </p>import { saveAs } from 'file-saver';
import { saveAs } from 'file-saver';


            <Input
              type="text"
              id="skills"
              placeholder="Skill 1, Skill 2, etc."
              onChange={onChange}
            />
          </div>
          <div>
            <Button onClick={handleDownloadPDF}>Download PDF</Button>
          </div>
        </section>

        <section className="w-1/2 bg-emerald-200 flex justify-center">
              <PDFViewer className="flex lg:w-2/3 md:w-1/3" showToolbar={false}>
                 {renderTemplate(templateId,resumeDetails)}
          </PDFViewer>
        </section>
      </main>
    </>
  );
};


const renderTemplate = (templateId:string, resumeDetails:ResumeDeatilsFormData) =>{
   if(templateId == "1"){
      return (<PDFtemplate1 resumeDetails={resumeDetails} /> )
   }else if(templateId=="2"){
      return (<PDFtemplate2 resumeDetails={resumeDetails} /> )

   }else if(templateId=="3"){
      return (<PDFtemplate3 resumeDetails={resumeDetails} /> )

   }
}
export default createResumeForm;
