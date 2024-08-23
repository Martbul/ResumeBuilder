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

import type { ResumeDeatilsFormData } from "@/app/utils/types";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
    fontFamily: "Helvetica",
  },
  header: {
    backgroundColor: "#4A148C", // Purple background color
    color: "#ffffff",
    padding: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: "50%",
    marginRight: 10,
  },
  nameTitle: {
    flex: 1,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  title: {
    fontSize: 14,
    marginTop: 5,
  },
  sidebar: {
    width: "30%",
    padding: 20,
    backgroundColor: "#f9fafb",
    height:"1000%"
  },
  sidebarSection: {
    display: "flex",
    flexDirection: "column",
    gap: 40,
  },
  sidebarLamguageSection: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  sidebarText: {
    fontSize: 11,
    marginBottom: 5,
  },
  content: {
    width: "70%",
    padding: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4A148C",
    borderBottom: "2px solid #4A148C",
    paddingBottom: 5,
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
    lineHeight: 1.5,
  },
  listItem: {
    fontSize: 11,
    marginBottom: 5,
  },
  photo: {
    width: "80em",
    height: "80em",
    objectFit: "cover",
    borderRadius: 50,
    marginBottom: 10,
    marginRight: 8,
  },
  boldTitle: {
    fontSize: 14,
    fontWeight: "bold",
  },
  bulletPoint: {
    marginBottom: 3,
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

const PDFtemplate3: React.FC<{ resumeDetails: ResumeDeatilsFormData }> = ({
  resumeDetails,
}) => {
  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.header}>
          <Image
            style={styles.photo}
            src={
              resumeDetails.imagePreviewUrl ||
              "https://i0.wp.com/www.stignatius.co.uk/wp-content/uploads/2020/10/default-user-icon.jpg?fit=415%2C415&ssl=1"
            }
          />
          <View style={styles.nameTitle}>
            <Text style={styles.name}>
              {resumeDetails.firstName} {resumeDetails.lastName}
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: "row" }}>
          <View style={styles.sidebar}>
            <View style={styles.sidebarSection}>
              <View>
                <Text style={[styles.sidebarText, styles.boldTitle]}>
                  Contact Details
                </Text>
                <Text style={styles.sidebarText}>{resumeDetails.email}</Text>
                <Text style={styles.sidebarText}>{resumeDetails.phone}</Text>
                {resumeDetails.city && (
                  <Text style={styles.sidebarText}>{resumeDetails.city}</Text>
                )}
                {resumeDetails.address && (
                  <Text style={styles.sidebarText}>
                    {resumeDetails.address}
                  </Text>
                )}
              </View>

              <View>
                <Text style={[styles.sidebarText, styles.boldTitle]}>
                  {resumeDetails.socialLinksTITLE}
                </Text>

                {resumeDetails.socialLinks?.map((link, index) => {
                  return (
                    <Link
                      key={index}
                      style={[
                        styles.sidebarText,
                        { color: "#333", textDecoration: "none" },
                      ]}
                      src={link}
                    >
                      {link}
                    </Link>
                  );
                })}
              </View>

              <View>
                {resumeDetails.languagesTITLE && (
                  <View style={styles.sidebarLamguageSection}>
                    <Text style={[styles.sidebarText, styles.boldTitle]}>
                      {resumeDetails.languagesTITLE}
                    </Text>

                    {resumeDetails.languages?.map((language, index) => {
                      return (
                        <Text style={styles.sidebarText} key={index}>
                          {language}
                        </Text>
                      );
                    })}
                  </View>
                )}
              </View>
            </View>
          </View>

          <View style={styles.content}>
            {resumeDetails.professionalSummaryTITLE && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>
                  {resumeDetails.professionalSummaryTITLE}
                </Text>
                <Text style={styles.text}>
                  {resumeDetails.professionalSummary}
                </Text>
              </View>
            )}

            {resumeDetails.emplymentTITLE && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>
                  {resumeDetails.emplymentTITLE}
                </Text>
                <View
                  style={{ display: "flex", flexDirection: "column", gap: 10 }}
                >
                  {resumeDetails.employmentHistory?.map((eHistory, index) => {
                    return (
                      <View key={index}>
                        <Text style={styles.text}>
                          <Text style={{ fontWeight: "bold" }}>
                            {eHistory.jobHistoryJobTitle}
                          </Text>
                          in {eHistory.jobHistoryEmployer},{" "}
                          {eHistory.jobHistoryCity} |{" "}
                          {eHistory.jobHistoryStartAndEndYear}
                        </Text>
                        <Text style={styles.listItem}>
                          {eHistory.jobHistoryDescription}
                        </Text>
                      </View>
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

                <View
                  style={{ display: "flex", flexDirection: "column", gap: 10 }}
                >
                  {resumeDetails.education?.map((education, index) => {
                    return (
                      <View key={index}>
                        <Text style={styles.text}>
                          <Text style={{ fontWeight: "bold" }}>
                            {" "}
                            {education.educationDegree}
                          </Text>
                          , {education.educationSchoold},{" "}
                          {education.educationCity} |{" "}
                          {education.educationStartAndEndYear}
                        </Text>
                        <Text style={styles.listItem}>
                          {education.educationDescription}
                        </Text>
                      </View>
                    );
                  })}
                </View>
              </View>
            )}

            {resumeDetails.skillsTITLE && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>
                  {resumeDetails.skillsTITLE}
                </Text>
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
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PDFtemplate3;
