import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
  Image,
} from "@react-pdf/renderer";
import { ResumeDeatilsFormData } from "../utils/types";

const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontFamily: "Helvetica",
    fontSize: 11,
    color: "#333",
  },
  header: {
    backgroundColor: "#003366",
    color: "#ffffff",
    padding: 10,
    textAlign: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  headerImage: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    marginRight: 10,
  },
  headerText: {
    flexGrow: 1,
    fontSize: 20,
  },
  contactInfo: {
    marginTop: 10,
    color: "#ffffff",
  },
  section: {
    marginVertical: 10,
    paddingBottom: 10,
    borderBottom: "1px solid #dddddd",
  },
  subheader: {
    fontSize: 14,
    marginBottom: 5,
    fontWeight: "bold",
  },
  text: {
    marginBottom: 5,
  },
  list: {
    paddingLeft: 15,
  },
  listItem: {
    marginBottom: 3,
  },
  leftColumn: {
    width: "30%",
    paddingRight: 10,
  },
  rightColumn: {
    width: "70%",
  },
  twoColumn: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconText: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  icon: {
    width: 12,
    height: 12,
    marginRight: 5,
  },
  boldText: {
    fontWeight: "bold",
  },
});

const ResumeTemplate6:React.FC<{ resumeDetails: ResumeDeatilsFormData }> = ({ resumeDetails }) => (
  <Document>
    <Page style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
         <Image
              style={styles.headerImage}
              src={resumeDetails.imagePreviewUrl || "https://i0.wp.com/www.stignatius.co.uk/wp-content/uploads/2020/10/default-user-icon.jpg?fit=415%2C415&ssl=1"
              }
            />
        <View style={styles.headerText}>
          <Text>{resumeDetails.firstName} {resumeDetails.lastName}</Text>
        </View>
        <View style={styles.contactInfo}>
          <Text>{resumeDetails.phone}</Text>
          <Text>{resumeDetails.email}</Text>
        </View>
      </View>

      {/* Profile Summary */}
      <View style={styles.section}>
        <Text style={styles.subheader}>Profile Summary</Text>
        <Text>{resumeDetails.professionalSummary}</Text>
      </View>

      {/* Social Links */}
      <View style={styles.section}>
        <Text style={styles.subheader}>Social Links</Text>
        <View style={styles.list}>
          {resumeDetails.socialLinks?.map((link, index) => (
            <Link key={index} style={styles.text} src={link}>
              {link}
            </Link>
          ))}
        </View>
      </View>

      {/* Skills and Education */}
      <View style={styles.twoColumn}>
        <View style={styles.leftColumn}>
          <View style={styles.section}>
            <Text style={styles.subheader}>Skills</Text>
            <View style={styles.list}>
              {resumeDetails.skills?.map((skill, index) => (
                <Text key={index} style={styles.listItem}>
                  {skill}
                </Text>
              ))}
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.subheader}>Education</Text>
            {resumeDetails.education?.map((edu, index) => (
              <View key={index} style={styles.text}>
                <Text style={styles.boldText}>{edu.educationDegree}</Text>
                <Text>{edu.educationSchoold}</Text>
                <Text>{edu.educationStartAndEndYear}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Experience */}
        <View style={styles.rightColumn}>
          <View style={styles.section}>
            <Text style={styles.subheader}>{resumeDetails.emplymentTITLE}</Text>
            {resumeDetails.employmentHistory?.map((exp, index) => (
              <View key={index} style={styles.text}>
                <Text style={styles.boldText}>{exp.jobHistoryJobTitle}</Text>
                <Text>{exp.jobHistoryEmployer}</Text>
                <Text>{exp.jobHistoryStartAndEndYear}</Text>
                <Text>{exp.jobHistoryDescription}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default ResumeTemplate6;
