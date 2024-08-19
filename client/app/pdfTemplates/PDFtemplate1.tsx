import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

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

const PDFtemplate1: React.FC<{ resumeDetails: ResumeDeatilsFormData }> = ({resumeDetails}) => (
  <Document >
    <Page size="A4" >
      <View >
        <Text>{resumeDetails.firstName}</Text>
      </View>
      <View >
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);

export default PDFtemplate1;
