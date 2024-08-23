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
import { ResumeDeatilsFormData } from "../utils/types";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 10,
    lineHeight: 1.5,
    color: "#333",
  },
  header: {
    margin: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 2,
    borderBottomColor: "#FFDD44",

    paddingBottom: 10,
    marginBottom: 15,
  },
  contactInfo1: {
    // width:"full",
    padding: 4,
    backgroundColor: "#FFDD44",
  },
  contactInfo2: {
    fontSize: 10,
    marginHorizontal: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  title: {
    fontSize: 10,
    marginBottom: 10,
  },
  summary: {
    fontSize: 10,
    marginBottom: 10,
    maxWidth: "80%",
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: "50%",
    marginTop: -15,
  },
  section: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#FFF",
    backgroundColor: "#FFDD44",
    paddingVertical: 3,
    paddingHorizontal: 5,
    marginBottom: 5,
    textTransform: "uppercase",
  },
  skillsSection: {
    flexDirection: "column",
  },
  educationSection: {
    flexDirection: "column",
  },
  workHistorySection: {
    flexDirection: "column",
  },
  referenceSection: {
    flexDirection: "column",
  },
  bulletList: {
    marginTop: 5,
    paddingLeft: 10,
  },
  bulletPoint: {
    marginBottom: 3,
  },
  sectionColumn: {
    padding: 30,

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftColumn: {
    width: "45%",
    paddingRight: 10,
  },
  rightColumn: {
    width: "45%",
  },
  photo: {
    width: "92em",
    height: "92em",
    objectFit: "cover",
    borderRadius: 50,
    marginBottom: 10,
  },
});

const PDFtemplate6: React.FC<{ resumeDetails: ResumeDeatilsFormData }> = ({
  resumeDetails,
}) => {
  return (
    <Document>
      <Page style={styles.page}>


        <View style={styles.contactInfo1}>
          <View style={styles.contactInfo2}>
            <Text>{resumeDetails.phone}</Text>
            <Text>{resumeDetails.email}</Text>
          </View>
        </View>

        
        <View style={styles.header}>
          <View>
            <Text style={styles.name}>
              {resumeDetails.firstName} {resumeDetails.lastName}
            </Text>
            {resumeDetails.professionalSummaryTITLE && (
              <Text style={styles.summary}>
                {resumeDetails.professionalSummary}
              </Text>
            )}
          </View>
          <Image
            style={styles.photo}
            src={
              resumeDetails.imagePreviewUrl ||
              "https://i0.wp.com/www.stignatius.co.uk/wp-content/uploads/2020/10/default-user-icon.jpg?fit=415%2C415&ssl=1"
            }
          />
        </View>

        <View style={styles.sectionColumn}>
          <View style={styles.leftColumn}>
            {resumeDetails.skillsTITLE && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>
                  {resumeDetails.skillsTITLE}
                </Text>
                <View style={styles.bulletList}>
                  {resumeDetails.skills?.map((skill, index) => {
                    return (
                      <Text key={index} style={styles.bulletPoint}>
                        {skill}{" "}
                      </Text>
                    );
                  })}
                </View>
              </View>
            )}

            {resumeDetails.educationTITLE && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>
                  {resumeDetails.educationTITLE}
                </Text>
                <View style={styles.bulletList}>
                  {resumeDetails.education?.map((education, index) => {
                    return (
                      <Text key={index}>
                        {education.educationDegree}:{" "}
                        {education.educationSchoold} |{" "}
                        {education.educationStartAndEndYear}
                      </Text>
                    );
                  })}
                </View>
              </View>
            )}

            {resumeDetails.socialLinksTITLE && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>
                  {resumeDetails.socialLinksTITLE}
                </Text>
                <View style={styles.bulletList}>
                  {resumeDetails.socialLinks?.map((link, index) => (
                    <Link
                      key={index}
                      style={[{ color: "#333", textDecoration: "none" }]}
                      src={link}
                    >
                      {link}
                    </Link>
                  ))}
                </View>
              </View>
            )}
          </View>

          <View style={styles.rightColumn}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>
                {resumeDetails.emplymentTITLE}
              </Text>
              <View
                style={{ display: "flex", flexDirection: "column", gap: 11 }}
              >
                {resumeDetails.employmentHistory?.map((eHistory, index) => {
                  return (
                    <View key={index} style={styles.bulletList}>
                      <Text style={styles.bulletPoint}>
                        {eHistory.jobHistoryJobTitle} –{" "}
                        {eHistory.jobHistoryEmployer}, {eHistory.jobHistoryCity}{" "}
                        – {eHistory.jobHistoryStartAndEndYear}
                      </Text>
                      <Text style={styles.bulletPoint}>
                        {eHistory.jobHistoryDescription}
                      </Text>
                    </View>
                  );
                })}
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PDFtemplate6;
