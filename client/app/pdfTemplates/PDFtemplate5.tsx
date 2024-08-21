import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Link
} from "@react-pdf/renderer";

import type { ResumeDeatilsFormData } from "@/app/utils/types";

const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontSize: 12,
    fontFamily: "Helvetica",
    color: "#333",
  },
  contact: {
    fontSize: 11,
    color: "#000000",
    marginBottom: 5,
    textAlign: "center",
  },
  header: {
    flexDirection: "row",
    marginBottom: 20,
  },
  leftColumn: {
    width: "35%",
    paddingRight: 10,
    borderRight: "1 solid #e0e0e0",
  },
  rightColumn: {
    width: "65%",
    paddingLeft: 10,
  },
  // photo: {
  //   width: 100,
  //   height: 100,
  //   borderRadius: 50,
  //   marginBottom: 10,
  // },

photo :{
  width: "84em",
  height: "84em",
  objectFit: "cover",
  borderRadius: 50, 
  marginBottom: 10,
},

  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  jobTitle: {
    fontSize: 14,
    marginBottom: 15,
  },
  contactItem: {
    marginBottom: 5,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 20,
    borderBottom: "1 solid #e0e0e0",
    paddingBottom: 5,
  },
  employmentSectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 20,
    borderBottom: "1 solid #e0e0e0",
    paddingBottom: 5,
  },
  text: {
    marginBottom: 5,
    lineHeight: 1.5,
  },
  jobDescrText: {
    lineHeight: 1,
  },
  listItem: {
    marginBottom: 3,
  },
  iconText: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  icon: {
    marginRight: 5,
  },
  list: {
    margin: 0,
    padding: 0,
    listStyleType: "none",
  },
  emplymentView: {
    marginBottom: 10,
  },
  subheader: {
    fontSize: 20,
    fontWeight: "bold",
    borderBottom: "2px solid #374151",
    paddingBottom: 5,
    marginBottom: 10,
  },
  section: {
    paddingTop: 12,
    marginBottom: 20,
    paddingBottom: 10,
    borderBottom: "1px solid #e5e7eb",
  },
});

const PDFtemplate5: React.FC<{ resumeDetails: ResumeDeatilsFormData }> = ({
  resumeDetails,
}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <View style={styles.leftColumn}>
          <Image
            style={styles.photo}
            src={
              resumeDetails.imagePreviewUrl ||
              "https://i0.wp.com/www.stignatius.co.uk/wp-content/uploads/2020/10/default-user-icon.jpg?fit=415%2C415&ssl=1"
            }
          />
          <Text style={styles.name}>
            {resumeDetails.firstName} {resumeDetails.lastName}
          </Text>


          <View style={styles.contactItem}>
            <Text style={styles.iconText}>{resumeDetails.email}</Text>
          </View>

          <View style={styles.contactItem}>
            <Text style={styles.iconText}>{resumeDetails.phone}</Text>
          </View>

          {/* <View style={styles.contactItem}>
            <Text style={styles.iconText}>{resumeDetails.dateOfBirth}</Text>
          </View> */}
          {resumeDetails.city && (
            <View style={styles.contactItem}>
              <Text style={styles.iconText}>{resumeDetails.city}</Text>
            </View>
          )}
          {resumeDetails.address && (
            <View style={styles.contactItem}>
              <Text style={styles.iconText}>{resumeDetails.address}</Text>
            </View>
          )}

          <Text style={styles.sectionTitle}>{resumeDetails.skillsTITLE}</Text>
          {resumeDetails.skills &&
            resumeDetails.skills.map((skill, index) => {
              return (
                <Text key={index} style={styles.text}>
                  - {skill}
                </Text>
              );
            })}

          <Text style={styles.sectionTitle}>
            {resumeDetails.languagesTITLE}
          </Text>

          {resumeDetails.languages &&
            resumeDetails.languages.map((language, index) => {
              return (
                <Text key={index} style={styles.text}>
                  - {language}
                </Text>
              );
            })}

          <Text style={styles.sectionTitle}>
            {resumeDetails.socialLinksTITLE}
          </Text>
          {resumeDetails.socialLinks &&
            resumeDetails.socialLinks.map((link, index) => {
              return (
                <Link key={index} style={styles.contact} src={link}>
                  {link}{" "}
                </Link>
              );
            })}
        </View>

        <View style={styles.rightColumn}>
          <Text style={styles.sectionTitle}>
            {resumeDetails.professionalSummaryTITLE}
          </Text>
          <Text style={styles.text}>{resumeDetails.professionalSummary}</Text>

          <Text style={styles.employmentSectionTitle}>
            {resumeDetails.emplymentTITLE}
          </Text>

          {resumeDetails.employmentHistory?.map((eHistory, index) => (
            <View key={index} style={{ marginVertical: 5 }}>
              <Text style={{ fontWeight: "bold" }}>
                {eHistory.jobHistoryStartAndEndYear}
              </Text>{" "}
              <Text>
                {eHistory.jobHistoryJobTitle} - {eHistory.jobHistoryEmployer},{" "}
                {eHistory.jobHistoryCity}
              </Text>
              <Text style={styles.jobDescrText}>
                {eHistory.jobHistoryDescription}
              </Text>
            </View>
          ))}

          {resumeDetails.educationTITLE && (
            //! use flex and gap

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>
                {resumeDetails.educationTITLE}
              </Text>
              {resumeDetails.education?.map((education, index) => (
                <View key={index} style={styles.emplymentView}>
                  <Text style={styles.text}>
                    {education.educationDegree} at {education.educationSchoold}
                    <Text>
                      {", "}
                      {education.educationCity}
                    </Text>
                  </Text>

                  <Text style={[styles.text]}>
                    {education.educationStartAndEndYear}
                  </Text>
                  <View style={styles.list}>
                    <Text style={styles.listItem}>
                      {education.educationDescription}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          )}
        </View>
      </View>
    </Page>
  </Document>
);

export default PDFtemplate5;