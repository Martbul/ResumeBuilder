import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Link,
} from "@react-pdf/renderer";

import type { ResumeDeatilsFormData } from "@/app/utils/types";

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: "#ffffff",
    fontFamily: "Helvetica",
  },
  container: {
    flexDirection: "row",
  },
  leftColumn: {
    width: "35%",
    backgroundColor: "#2c3e50",
    padding: 15,
    color: "#ffffff",
  },
  rightColumn: {
    width: "65%",
    padding: 15,
  },
  profileImage: {
    borderRadius: "50%",
    width: 100,
    height: 100,
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2c3e50",
  },
  title: {
    fontSize: 14,
    marginBottom: 20,
    color: "#2c3e50",
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#2c3e50",
  },
  sectionContent: {
    fontSize: 10,
    marginBottom: 10,
  },
  contactItem: {
    fontSize: 10,
    marginBottom: 5,
    color: "#ffffff",
  },
  listItem: {
    fontSize: 10,
    marginBottom: 5,
    color: "#ffffff",
  },
  skillBarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  skillBarLabel: {
    fontSize: 10,
    color: "#2c3e50",
  },
  skillBar: {
    width: "60%",
    height: 5,
    backgroundColor: "#d1d5db",
  },
  skillLevel: {
    height: 5,
    backgroundColor: "#2c3e50",
  },
});

const PDFtemplate3: React.FC<{ resumeDetails: ResumeDeatilsFormData }> = ({
  resumeDetails,
}) => {
  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.container}>

          <View style={styles.leftColumn}>
            <Image
              style={styles.profileImage}
              src={resumeDetails.imagePreviewUrl || "https://i0.wp.com/www.stignatius.co.uk/wp-content/uploads/2020/10/default-user-icon.jpg?fit=415%2C415&ssl=1"
              }
            />
            <Text style={styles.contactItem}>{resumeDetails.phone}</Text>
            <Text style={styles.contactItem}>{resumeDetails.email}</Text>
            <Text style={styles.contactItem}>
              {resumeDetails.address}, {resumeDetails.city}
            </Text>

            <Text style={[styles.sectionTitle, { marginTop: 20 }]}>
              {resumeDetails.languagesTITLE}
            </Text>
            {resumeDetails.languages?.map((language, index) =>{
              return (


            <Text key={index} style={styles.listItem}>• {language}</Text>
              )
            })}

{resumeDetails.skillsTITLE && ( 
  <>
    <Text style={[styles.sectionTitle, { marginTop: 20 }]}>
              {resumeDetails.skillsTITLE}
            </Text>
            {resumeDetails.skills?.map((skill, index) =>{
              return (


            <Text key={index} style={styles.listItem}>• {skill}</Text>
              )
            })}
           
  </>
)}
          </View>

          {/* Right Column */}
          <View style={styles.rightColumn}>
            <Text style={styles.name}>{resumeDetails.firstName} {resumeDetails.lastName}</Text>

{resumeDetails.emplymentTITLE && (
  <>
   <Text style={styles.sectionTitle}>{resumeDetails.emplymentTITLE}</Text>
   {resumeDetails.employmentHistory?.map((eHistory, index) =>{
    return (
       <Text key={index} style={styles.sectionContent}>
              {eHistory.jobHistoryJobTitle} at {eHistory.jobHistoryEmployer}, {eHistory.jobHistoryCity} | {eHistory.jobHistoryStartAndEndYear}
              {"\n"}
             {eHistory.jobHistoryDescription}
            </Text>
    )
   })}
          
  </>
)}

{resumeDetails.educationTITLE && ( 
  
  <>
  <Text style={styles.sectionTitle}>{resumeDetails.educationTITLE}</Text>
            {resumeDetails.education?.map((education,index) =>{
              return (
                <View key={index}>
                
                 <Text style={styles.sectionContent}>
              {education.educationSchoold}, {education.educationDegree} ({education.educationStartAndEndYear})
            </Text>
                </View>
              )
            })}
           
  </>
  )}
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PDFtemplate3;
