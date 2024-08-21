import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";
import { ResumeDeatilsFormData } from "../utils/types";

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    fontFamily: "Helvetica",
    fontSize: 10,
    lineHeight: 1.6,
  },
  headerSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    borderBottom: "1px solid #000",
    paddingBottom: 8,
  },
  fullName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  contactSection: {
    textAlign: "right",
  },
  contactText: {
    fontSize: 10,
    marginBottom: 2,
  },
  section: {
    marginBottom: 15,
  },
  section2: {
    paddingTop: 12,
    marginBottom: 10,
    borderBottom: "1px solid #000",
    paddingBottom: 8,
  },
  sectionHeader: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
    borderBottom: "1px solid #000",
    paddingBottom: 8,
  },
  text: {
    fontSize: 10,
    lineHeight: 1.6,
  },
  bulletPoint: {
    marginBottom: 2,
    fontSize: 10,
    marginLeft: 10,
  },
  twoColumn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  column: {
    width: "48%",
  },
  listItem: {
    marginBottom: 3,
    fontSize: 10,
    lineHeight: 1.4,
  },
  bullet: {
    marginRight: 5,
    fontWeight: "bold",
  },

  employmentEntry: {
    marginBottom: 10,
  },
  projectSection: {
    marginBottom: 10,
  },
  grid: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  gridItem: {
    width: "48%",
    marginBottom: 10,
  },
  subheader: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 10,
    borderBottom: "1px solid #000",
    paddingBottom: 8,
  },
  list: {
    margin: 0,
    padding: 0,
    listStyleType: "none",
  },

  grid2: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly", 
   
    paddingLeft: 0,
    paddingRight: 0,
  },
  gridItem2: {
    flexBasis: "25%", 
    marginBottom: 10, 
    fontSize: 12,
    lineHeight: 1.5,
  },
});

const PDFtemplate1: React.FC<{ resumeDetails: ResumeDeatilsFormData }> = ({
  resumeDetails,
}) => {
  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.headerSection}>
          <Text style={styles.fullName}>
            {resumeDetails.firstName} {resumeDetails.lastName}
          </Text>
          <View style={styles.contactSection}>
            <Text style={styles.contactText}>Email: {resumeDetails.email}</Text>
            <Text style={styles.contactText}>Phone: {resumeDetails.phone}</Text>
            {resumeDetails.socialLinks?.map((link, index) => (
              <Link key={index} style={[styles.contactText, {color:"black", textDecoration:"none"}]} src={link}>
                {link}
              </Link>
            ))}
          </View>
        </View>
        {resumeDetails.educationTITLE && (
          <View style={[styles.section, { marginTop: 10 }]}>
            <Text style={styles.sectionHeader}>
              {resumeDetails.educationTITLE}
            </Text>

            {resumeDetails.education?.map((education, index) => {
              return (
                <View key={index} style={{ width: "100%", marginBottom: 10 }}>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text>{education.educationSchoold}</Text>
                    <Text>{education.educationCity}</Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text>{education.educationDegree}</Text>
                    <Text>{education.educationStartAndEndYear}</Text>
                  </View>
                </View>
              );
            })}
          </View>
        )}
        {resumeDetails.professionalSummaryTITLE && (
          <View style={styles.section}>
            <Text style={styles.subheader}>
              {resumeDetails.professionalSummaryTITLE}
            </Text>
            <Text style={styles.text}>{resumeDetails.professionalSummary}</Text>
          </View>
        )}

        {resumeDetails.emplymentTITLE && (
          <View style={styles.section}>
            <Text style={styles.sectionHeader}>
              {resumeDetails.emplymentTITLE}
            </Text>
            <View style={styles.employmentEntry}>
              {resumeDetails.employmentHistory?.map((eHistory, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginBottom: 10,
                    }}
                  >
                    <View>
                      <Text>
                        <Text style={styles.bullet}>• </Text>
                        {eHistory.jobHistoryJobTitle},{" "}
                        {eHistory.jobHistoryEmployer} |{" "}
                        {eHistory.jobHistoryStartAndEndYear}
                      </Text>
                    </View>
                    <View>
                      <Text style={{ marginLeft: 7 }}>
                        {eHistory.jobHistoryDescription}
                      </Text>
                    </View>
                  </View>
                );
              })}
            </View>
          </View>
        )}

        {resumeDetails.skillsTITLE && (
          <View style={styles.section}>
            <Text style={styles.subheader}>{resumeDetails.skillsTITLE}</Text>
            <View style={styles.list}>
              <View style={styles.grid2}>
                {resumeDetails?.skills?.map((skill, index) => (
                  <Text style={styles.gridItem2} key={index}>
                    {skill}
                  </Text>
                ))}
              </View>
            </View>
          </View>
        )}

        {/* Projects Section */}
        {/* <View style={styles.projectSection}>
          <Text style={styles.sectionHeader}>PROJECTS</Text>
          <View style={styles.text}>
            <Text style={styles.bulletPoint}>
              <Text style={styles.bullet}>•</Text> Student Performance
              Prediction (December 23 - February 2024)
            </Text>
          </View>
        </View> */}
      </Page>
    </Document>
  );
};

export default PDFtemplate1;
