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
  skillsTITLE: string;
  educationTITLE: string;
  city?: string;
  address?: string;
  employmentHistory?: Array<object>;
  education?: Array<object>;
  photo?: string;
  socialLinks?: Array<string>;
  skills?: Array<string>;
  age?: number;
};

export interface SvgProps extends React.SVGProps<SVGSVGElement> {
  transformOrigin?: string;
}
