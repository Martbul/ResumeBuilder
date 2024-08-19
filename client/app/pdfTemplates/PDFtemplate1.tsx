import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

import type { ResumeDeatilsFormData } from "@/app/utils/types";

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
