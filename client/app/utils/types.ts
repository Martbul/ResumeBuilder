export type ResumeDeatilsFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth?: string;
  professionalSummary?: string;
  professionalSummaryTITLE: string;
  emplymentTITLE: string;
  socialLinksTITLE: string;
  languagesTITLE: string;
  skillsTITLE: string;
  educationTITLE: string;
  city?: string;
  address?: string;
  employmentHistory?: EmploymentHistory[];
  education?: EducationInterface[];
  photo?: File | null;
  socialLinks?: Array<string>;
  skills?: Array<string>;
  languages?: Array<string>;
  age?: number;
  imagePreviewUrl:string;
};

export interface EmploymentHistory {
  jobHistoryJobTitle: string;
  jobHistoryEmployer: string;
  jobHistoryStartAndEndYear?: string;
  jobHistoryCity?: string;
  jobHistoryDescription?: string;
}


export interface EducationInterface {
  educationSchoold: string;
  educationDegree: string;
  educationStartAndEndYear: string;
  educationCity: string;
  educationDescription: string;
}

export interface SvgProps extends React.SVGProps<SVGSVGElement> {
  transformOrigin?: string;
}
