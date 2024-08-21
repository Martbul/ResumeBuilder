"use client";

import PDFtemplate1 from "@/app/pdfTemplates/PDFtemplate1";
import PDFtemplate2 from "@/app/pdfTemplates/PDFtemplate2";
import PDFtemplate3 from "@/app/pdfTemplates/PDFtemplate3";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { pdf } from "@react-pdf/renderer";
import { useState, useCallback, useEffect } from "react";
import debounce from "lodash.debounce";
import type {
  ResumeDeatilsFormData,
  EducationInterface,
  EmploymentHistory,
} from "@/app/utils/types";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import { saveAs } from "file-saver";
import {
  EducationHatIcon,
  WorkSuitCaseIcon,
  SummaryIcon,
  LinksIcon,
  SkillsStarIcon,
  LanguageIcon,
} from "@/app/utils/svg";
import PDFtemplate5 from "@/app/pdfTemplates/PDFtemplate5";
import PDFtemplate4 from "@/app/pdfTemplates/PDFtemplate4";
import PDFtemplate6 from "@/app/pdfTemplates/PDFtemplate6";
import PDFtemplate7 from "@/app/pdfTemplates/PDFtemplate7";

interface CreateResumeFormProps {
  params: {
    templateId: string;
  };
}

const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  {
    ssr: false,
  }
);

const createResumeForm: React.FC<CreateResumeFormProps> = ({ params }) => {
  const { templateId } = params;

  useEffect(() => {
    if (templateId === "1") {
         setForRender((prevState) => ({
           ...prevState,
           firstNameRender: true,
           lastNameRender: true,
           ageRender: true,
           photoRender: false,
           emailRender: true,
           phoneRender: true,
           cityRender: false,
           addressRender: false,
           dateOfBirthRender: true,
           professionalSummaryRender: true,
           professionalSummaryTITLERender: true,
           emplymentTITLERender: true,
           socialLinksTITLERender: true,
           skillsTITLERender: true,
           languagesTITLERender: true,
           educationTITLERender: true,
           employmentHistoryRender: true,
           educationRender: true,
           socialLinksRender: true,
           skillsRender: true,
           languagesRender: false,
         }));
    } else if (templateId === "2") {
      setForRender((prevState) => ({
        ...prevState,
        firstNameRender: true,
        lastNameRender: true,
        ageRender: true,
        photoRender: false,
        emailRender: true,
        phoneRender: true,
        cityRender: true,
        addressRender: true,
        dateOfBirthRender: true,
        professionalSummaryRender: true,
        professionalSummaryTITLERender: true,
        emplymentTITLERender: true,
        socialLinksTITLERender: true,
        skillsTITLERender: true,
        languagesTITLERender: true,
        educationTITLERender: true,
        employmentHistoryRender: true,
        educationRender: true,
        socialLinksRender: true,
        skillsRender: true,
        languagesRender: false,
      }));
    } else if (templateId === "3") {
    } else if (templateId === "4") {
       setForRender((prevState) => ({
         ...prevState,
         firstNameRender: true,
         lastNameRender: true,
         ageRender: true,
         photoRender: true,
         emailRender: true,
         phoneRender: true,
         cityRender: true,
         addressRender: true,
         dateOfBirthRender: true,
         professionalSummaryRender: true,
         professionalSummaryTITLERender: true,
         emplymentTITLERender: true,
         socialLinksTITLERender: true,
         skillsTITLERender: true,
         languagesTITLERender: true,
         educationTITLERender: true,
         employmentHistoryRender: true,
         educationRender: true,
         socialLinksRender: true,
         skillsRender: true,
         languagesRender: true,
       }));
    } else if (templateId === "5") {
      setForRender((prevState) => ({
        ...prevState,
        firstNameRender: true,
        lastNameRender: true,
        ageRender: true,
        photoRender: true,
        emailRender: true,
        phoneRender: true,
        cityRender: true,
        addressRender: true,
        dateOfBirthRender: true,
        professionalSummaryRender: true,
        professionalSummaryTITLERender: true,
        emplymentTITLERender: true,
        socialLinksTITLERender: true,
        skillsTITLERender: true,
        languagesTITLERender: true,
        educationTITLERender: true,
        employmentHistoryRender: true,
        educationRender: true,
        socialLinksRender: true,
        skillsRender: true,
        languagesRender: true,
      }));
    } else if (templateId === "6") {
       setForRender((prevState) => ({
         ...prevState,
         firstNameRender: true,
         lastNameRender: true,
         ageRender: true,
         photoRender: true,
         emailRender: true,
         phoneRender: true,
         cityRender: true,
         addressRender: true,
         dateOfBirthRender: true,
         professionalSummaryRender: true,
         professionalSummaryTITLERender: true,
         emplymentTITLERender: true,
         socialLinksTITLERender: true,
         skillsTITLERender: true,
         languagesTITLERender: true,
         educationTITLERender: true,
         employmentHistoryRender: true,
         educationRender: true,
         socialLinksRender: true,
         skillsRender: true,
         languagesRender: true,
       }));
    }
    else if (templateId === "7") {
       setForRender((prevState) => ({
         ...prevState,
         firstNameRender: true,
         lastNameRender: true,
         ageRender: false,
         photoRender: true,
         emailRender: true,
         phoneRender: true,
         cityRender: false,
         addressRender: false,
         dateOfBirthRender: true,
         professionalSummaryRender: true,
         professionalSummaryTITLERender: true,
         emplymentTITLERender: true,
         socialLinksTITLERender: true,
         skillsTITLERender: true,
         languagesTITLERender: true,
         educationTITLERender: true,
         employmentHistoryRender: true,
         educationRender: true,
         socialLinksRender: true,
         skillsRender: true,
         languagesRender: false,
       }));
    }
  }, [templateId]);
  const [resumeDetails, setResumeDetails] = useState<ResumeDeatilsFormData>({
    firstName: "John",
    lastName: "Doe",
    age: 20,
    photo: null,
    email: "",
    phone: "",
    city: "",
    address: "",
    dateOfBirth: "",
    professionalSummary: "",
    professionalSummaryTITLE: "Professional Summary",
    emplymentTITLE: "Employment History",
    socialLinksTITLE: "Social Links",
    skillsTITLE: "Skills",
    educationTITLE: "Education",
    languagesTITLE: "Languages",
    employmentHistory: [],
    education: [],
    socialLinks: [],
    skills: [],
    languages: [],
    imagePreviewUrl:"",
  });

  const [forRender, setForRender] = useState({
    firstNameRender: false,
    lastNameRender: false,
    ageRender: false,
    photoRender: false,
    emailRender: false,
    phoneRender: false,
    cityRender: false,
    addressRender: false,
    dateOfBirthRender: false,
    professionalSummaryRender: false,
    professionalSummaryTITLERender: false,
    emplymentTITLERender: false,
    socialLinksTITLERender: false,
    skillsTITLERender: false,
    languagesTITLERender: false,
    educationTITLERender: false,
    employmentHistoryRender: false,
    educationRender: false,
    socialLinksRender: false,
    skillsRender: false,
    languagesRender: false,
  });

  const handleInputChange = useCallback(
    debounce((id: string, value: string, files?: FileList, index?: number) => {
      setResumeDetails((prevDetails) => {
        if (id === "picture" && files && files.length > 0) {
          const file = files[0];
          const imageUrl = URL.createObjectURL(file);

          return {
            ...prevDetails,
            photo: file, 
            imagePreviewUrl: imageUrl,
          };
        }
        if (id === "socialLinks" || id === "skills" || id === "languages") {
          const stringArray = value.split(",").map((item) => item.trim());
          return {
            ...prevDetails,
            [id]: stringArray,
          };
        }

        if (
          id === "jobHistoryJobTitle" ||
          id === "jobHistoryEmployer" ||
          id == "jobHistoryStartAndEndYear" ||
          id == "jobHistoryCity" ||
          id == "jobHistoryDescription"
        ) {
          return {
            ...prevDetails,
            employmentHistory: prevDetails.employmentHistory.map((item, i) => {
              if (i === index) {
                return {
                  ...item,
                  [id]: value,
                };
              }
              return item;
            }),
          };
        }

        if (
          id === "educationSchoold" ||
          id === "educationDegree" ||
          id == "educationStartAndEndYear" ||
          id == "educationCity" ||
          id == "educationDescription"
        ) {
          return {
            ...prevDetails,
            education: prevDetails.education.map((item, i) => {
              if (i === index) {
                return {
                  ...item,
                  [id]: value,
                };
              }
              return item;
            }),
          };
        }

        return {
          ...prevDetails,
          [id]: value,
        };
      });
    }, 500),
    []
  );

 const onChange = (e: React.ChangeEvent<HTMLInputElement>, index?: number) => {
   const { id, value, files } = e.target;

     handleInputChange(id, value,files, index);
 
 };

  const downloadTemplate = (templateId: string) => {
    switch (templateId) {
      case "1":
        return <PDFtemplate1 resumeDetails={resumeDetails} />;
      case "2":
        return <PDFtemplate2 resumeDetails={resumeDetails} />;
      case "3":
        return <PDFtemplate3 resumeDetails={resumeDetails} />;
      case "4":
        return <PDFtemplate4 resumeDetails={resumeDetails} />;
      case "5":
        return <PDFtemplate5 resumeDetails={resumeDetails} />;
      case "6":
        return <PDFtemplate6 resumeDetails={resumeDetails} />;
      case "7":
        return <PDFtemplate7 resumeDetails={resumeDetails} />;
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

  const addNewEmplymentHistory = () => {
    const newEmpltyEmpoymentObj = {
      jobHistoryJobTitle: "",
      jobHistoryEmployer: "",
      jobHistoryStartAndEndYear: "",
      jobHistoryCity: "",
      jobHistoryDescription: "",
    };

    setResumeDetails((prevDetails) => {
      return {
        ...prevDetails,
        employmentHistory: [
          ...(prevDetails.employmentHistory as EmploymentHistory[]),
          newEmpltyEmpoymentObj,
        ],
      };
    });
  };

  const addNewEducation = () => {
    const newEmpltyEducationObj = {
      educationSchoold: "",
      educationDegree: "",
      educationStartAndEndYear: "",
      educationCity: "",
      educationDescription: "",
    };

    setResumeDetails((prevDetails) => {
      return {
        ...prevDetails,
        education: [
          ...(prevDetails.education as EducationInterface[]),
          newEmpltyEducationObj,
        ],
      };
    });
  };

  return (
    <>
      <main className="flex lg:flex-row h-screen flex-col">
        <section className="lg:w-1/2 lg:px-36 px-20 lg:overflow-y-auto no-scrollbar">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 my-10">
            {forRender.firstNameRender && (
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
            )}
            {forRender.lastNameRender && (
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
            )}

            {forRender.emailRender && (
              <div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="johnDoe@gmail.com"
                    onChange={onChange}
                  />
                </div>
              </div>
            )}

            {forRender.phoneRender && (
              <div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    type="text"
                    id="phone"
                    placeholder="+359 888571991"
                    onChange={onChange}
                  />
                </div>
              </div>
            )}
            {forRender.cityRender && (
              <div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <div className="flex flex-row items-center gap-1">
                    <Label htmlFor="city">City</Label>
                    <p className="text-sm text-zinc-500">{`(optional)`}</p>
                  </div>
                  <Input
                    type="text"
                    id="city"
                    placeholder="New York"
                    onChange={onChange}
                  />
                </div>
              </div>
            )}

            {forRender.addressRender && (
              <div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <div className="flex flex-row items-center gap-1">
                    <Label htmlFor="address">Address</Label>
                    <p className="text-sm text-zinc-500">{`(optional)`}</p>
                  </div>
                  <Input
                    type="text"
                    id="address"
                    placeholder="123 Main St"
                    onChange={onChange}
                  />
                </div>
              </div>
            )}

            {forRender.photoRender && (
              <div className="col-span-full flex justify-center">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="picture">Picture</Label>
                  <Input id="picture" type="file" onChange={onChange} />

                  {resumeDetails.imagePreviewUrl && (
                    <div className="mt-4">
                      <img
                        src={resumeDetails.imagePreviewUrl}
                        alt="Selected Preview"
                        className="h-32 w-32 object-cover rounded-full"
                      />
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {forRender.professionalSummaryRender && (
            <div className="my-8">
              <div className="flex items-center">
                <SummaryIcon className="w-6 h-6" />
                <h2 className="text-lg font-semibold">
                  {" "}
                  <Input
                    type="text"
                    id="professionalSummaryTITLE"
                    onChange={onChange}
                    className="lg:text-lg  lg:h-12 border-none focus:outline-none"
                    defaultValue={resumeDetails.professionalSummaryTITLE}
                  />
                </h2>
              </div>

              <p className="mb-2">
                Write 2-4 short, energetic sentences about your achievements and
                motivation.
              </p>
              <Input
                type="text"
                id="professionalSummary"
                placeholder="Experienced writer with a record of..."
                onChange={onChange}
                className="lg:h-24"
              />
            </div>
          )}

          {forRender.employmentHistoryRender && (
            <div className="my-8">
              <div className="flex items-center">
                <WorkSuitCaseIcon className="w-6 h-6" />
                <h2 className="text-lg font-semibold">
                  {" "}
                  <Input
                    type="text"
                    id="emplymentTITLE"
                    onChange={onChange}
                    className="lg:text-lg lg:h-12 border-none focus:outline-none"
                    defaultValue={resumeDetails.emplymentTITLE}
                  />
                </h2>
              </div>

              <p className="mb-2">
                Mention the role and what you did. List your key achievements.
              </p>

              <div>
                {resumeDetails?.employmentHistory?.length > 0 &&
                  resumeDetails.employmentHistory?.map((eHistory, index) => {
                    return (
                      <div
                        key={index}
                        className="bg-neutral-100 p-6 rounded-xl my-4"
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                          <div>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                              <Label htmlFor="jobHistoryJobTitle">
                                Job Title
                              </Label>
                              <Input
                                type="text"
                                id="jobHistoryJobTitle"
                                placeholder="Manager"
                                onChange={(e) => onChange(e, index)}
                              />
                            </div>
                          </div>

                          <div>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                              <Label htmlFor="jobHistoryEmployer">
                                Employer
                              </Label>
                              <Input
                                type="text"
                                id="jobHistoryEmployer"
                                placeholder="Google"
                                onChange={(e) => onChange(e, index)}
                              />
                            </div>
                          </div>

                          <div>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                              <div className="flex flex-row items-center gap-1">
                                <Label htmlFor="jobHistoryStartAndEndYear">
                                  Start & End Year
                                </Label>
                                <p className="text-sm text-zinc-500">{`(optional)`}</p>
                              </div>
                              <Input
                                type="email"
                                id="jobHistoryStartAndEndYear"
                                placeholder="2020 - 2024"
                                onChange={(e) => onChange(e, index)}
                              />
                            </div>
                          </div>

                          <div>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                              <div className="flex flex-row items-center gap-1">
                                <Label htmlFor="jobHistoryCity">City</Label>
                                <p className="text-sm text-zinc-500">{`(optional)`}</p>
                              </div>
                              <Input
                                type="email"
                                id="jobHistoryCity"
                                placeholder="New York"
                                onChange={(e) => onChange(e, index)}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="mt-4">
                          <div className="grid w-full items-center ">
                            <div className="flex flex-row items-center gap-1">
                              <Label htmlFor="jobHistoryDescription">
                                Description
                              </Label>
                              <p className="text-sm text-zinc-500">{`(optional)`}</p>
                            </div>
                            <Input
                              type="text"
                              id="jobHistoryDescription"
                              placeholder="Improved the yearly reveneu by 30% by implementing..."
                              className="w-full lg:h-24"
                              onChange={(e) => onChange(e, index)}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>

              <Button className="text-sm my-4" onClick={addNewEmplymentHistory}>
                + Add employment
              </Button>
            </div>
          )}

          {forRender.educationRender && (
            <div className="my-8">
              <div className="flex items-center">
                <EducationHatIcon className="w-8 h-8" />
                <h2 className="text-lg font-semibold">
                  <Input
                    type="text"
                    id="educationTITLE"
                    onChange={onChange}
                    className="lg:text-lg lg:h-12 border-none focus:outline-none"
                    defaultValue={resumeDetails.educationTITLE}
                  />
                </h2>
              </div>

              <p className="mb-2">
                Mention the role and what you did. List your key achievements.
              </p>

              <div>
                {resumeDetails?.education?.length > 0 &&
                  resumeDetails.education?.map((education, index) => {
                    return (
                      <div
                        key={index}
                        className="bg-neutral-100 p-6 rounded-xl my-4"
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                          <div>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                              <Label htmlFor="educationSchoold">School</Label>
                              <Input
                                type="text"
                                id="educationSchoold"
                                placeholder="Harvard"
                                onChange={(e) => onChange(e, index)}
                              />
                            </div>
                          </div>

                          <div>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                              <Label htmlFor="educationDegree">Degree</Label>
                              <Input
                                type="text"
                                id="educationDegree"
                                placeholder="Computer Science"
                                onChange={(e) => onChange(e, index)}
                              />
                            </div>
                          </div>

                          <div>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                              <Label htmlFor="educationStartAndEndYear">
                                Start & End Year
                              </Label>
                              <Input
                                type="email"
                                id="educationStartAndEndYear"
                                placeholder="2020 - 2024"
                                onChange={(e) => onChange(e, index)}
                              />
                            </div>
                          </div>

                          <div>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                              <div className="flex flex-row items-center gap-1">
                                <Label htmlFor="educationCity">City</Label>
                                <p className="text-sm text-zinc-500">{`(optional)`}</p>
                              </div>
                              <Input
                                type="email"
                                id="educationCity"
                                placeholder="Massachusetts"
                                onChange={(e) => onChange(e, index)}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="mt-4">
                          <div className="grid w-full items-center ">
                          

                            <div className="flex flex-row items-center gap-1">
                              <Label htmlFor="educationDescription">
                                Description
                              </Label>
                              <p className="text-sm text-zinc-500">{`(optional)`}</p>
                            </div>
                            <Input
                              type="text"
                              id="educationDescription"
                              placeholder="Improved the yearly reveneu by 30% by implementing..."
                              className="w-full lg:h-24"
                              onChange={(e) => onChange(e, index)}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>

              <Button className="text-sm my-4" onClick={addNewEducation}>
                + Add education
              </Button>
            </div>
          )}

          {forRender.socialLinksRender && (
            <div className="my-8">
              <div className="flex flex-row items-center">
                <LinksIcon className="w-6 h-6" />

                <h2 className="text-lg font-semibold">
                  {" "}
                  <Input
                    type="text"
                    id="socialLinksTITLE"
                    onChange={onChange}
                    className="lg:text-lg lg:h-12 border-none focus:outline-none"
                    defaultValue={resumeDetails.socialLinksTITLE}
                  />
                </h2>
              </div>

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
          )}

          {forRender.skillsRender && (
            <div className="my-8">
              <div className="flex flex-row items-center">
                <SkillsStarIcon className="w-8 h-8" />

                <h2 className="text-lg font-semibold">
                  {" "}
                  <Input
                    type="text"
                    id="skillsTITLE"
                    onChange={onChange}
                    className="lg:text-lg lg:h-12 border-none  focus:outline-none "
                    defaultValue={resumeDetails.skillsTITLE}
                  />
                </h2>
              </div>

              <p className="mb-2">
                List your most important professional skills.
              </p>

              <Input
                type="text"
                id="skills"
                placeholder="Skill 1, Skill 2, etc."
                onChange={onChange}
              />
            </div>
          )}

          {forRender.languagesRender && (
            <div className="my-8">
              <div className="flex flex-row items-center">
                <LanguageIcon className="w-9 h-9" />

                <h2 className="text-lg font-semibold">
                  {" "}
                  <Input
                    type="text"
                    id="languagesTITLE"
                    onChange={onChange}
                    className="lg:text-lg lg:h-12 border-none  focus:outline-none "
                    defaultValue={resumeDetails.languagesTITLE}
                  />
                </h2>
              </div>

              <p className="mb-2">Languages Spoken</p>

              <Input
                type="text"
                id="languages"
                placeholder="German, spanish, french..."
                onChange={onChange}
              />
            </div>
          )}

          <div className="mb-8 flex justify-end">
            <Button onClick={handleDownloadPDF}>Download CV</Button>
          </div>
        </section>

        
        {/* /!! if you cannot fix the rendering of the resume for mobile -> make a button for resume preview */}
        <section className="lg:w-1/2  bg-emerald-200 flex justify-center">
          <PDFViewer className="flex  lg:w-2/3 md:w-1/3" showToolbar={false}>
            {renderTemplate(templateId, resumeDetails)}
          </PDFViewer>
        </section>
      </main>
    </>
  );
};

const renderTemplate = (
  templateId: string,
  resumeDetails: ResumeDeatilsFormData
) => {
  if (templateId == "1") {
    return <PDFtemplate1 resumeDetails={resumeDetails} />;
  } else if (templateId == "2") {
    return <PDFtemplate2 resumeDetails={resumeDetails} />;
  } else if (templateId == "3") {
    return <PDFtemplate3 resumeDetails={resumeDetails} />;
  } else if (templateId == "4") {
    return <PDFtemplate4 resumeDetails={resumeDetails} />;
  } else if (templateId == "5") {
    return <PDFtemplate5 resumeDetails={resumeDetails} />;
  }
   else if (templateId == "6") {
    return <PDFtemplate6 resumeDetails={resumeDetails} />;
  }
  else if (templateId == "7") {
    return <PDFtemplate7 resumeDetails={resumeDetails} />;
  }
};
export default createResumeForm;
