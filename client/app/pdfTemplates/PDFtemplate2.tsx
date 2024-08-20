import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";

import type { ResumeDeatilsFormData } from "@/app/utils/types";

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: "#f9fafb",
    fontFamily: "Helvetica",
  },

  container: {
    margin: 20,
  },

  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  contact: {
    fontSize: 12,
    color: "#000000",
    marginBottom: 5,
    textAlign: "center",
  },
  section: {
    paddingTop: 12,
    marginBottom: 20,
    paddingBottom: 10,
    borderBottom: "1px solid #e5e7eb",
  },
  subheader: {
    fontSize: 20,
    fontWeight: "bold",
    borderBottom: "2px solid #374151",
    paddingBottom: 5,
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
    lineHeight: 1.5,
  },
  list: {
    margin: 0,
    padding: 0,
    listStyleType: "none",
  },
  listItem: {
    marginBottom: 5,
    fontSize: 12,
    lineHeight: 1.5,
  },
  bullet: {
    marginRight: 5,
    fontSize: 12,
    fontWeight: "bold",
    color: "#374151",
  },
  twoColumn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  column: {
    width: "48%",
  },
  singleColumn: {
    width: "100%",
  },
  contactColumn: {
    display: "flex",
    flexDirection: "column",
  },
  grid: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  gridItem: {
    width: "23%",
    marginRight: "1%",
    marginBottom: 10,
    fontSize: 12,
    lineHeight: 1.5,
  },
  flexRow:{
      display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "8"
  },
  emplymentView: {
    marginBottom:10
  }
});

const PDFtemplate2: React.FC<{ resumeDetails: ResumeDeatilsFormData }> = ({
  resumeDetails,
}) => {
  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.container}>
          <View>
            <Text style={styles.header}>
              {resumeDetails.firstName} {resumeDetails.lastName}
            </Text>

            {!resumeDetails.city && !resumeDetails.address && (
              <View style={styles.contactColumn}>
                <Text style={styles.contact}>Email: {resumeDetails.email}</Text>
                <Text style={styles.contact}>Phone: {resumeDetails.phone}</Text>
              </View>
            )}

            {resumeDetails.city && resumeDetails.address && (
              <View style={styles.twoColumn}>
                <View style={styles.column}>
                  <View style={styles.contactColumn}>
                    <Text style={styles.contact}>
                      Email: {resumeDetails.email}
                    </Text>
                    <Text style={styles.contact}>
                      Phone: {resumeDetails.phone}
                    </Text>
                  </View>
                </View>
                <View style={styles.column}>
                  <View style={styles.contactColumn}>
                    <Text style={styles.contact}>
                      City: {resumeDetails.city}
                    </Text>
                    <Text style={styles.contact}>
                      Address: {resumeDetails.address}
                    </Text>
                  </View>
                </View>
              </View>
            )}

            {((resumeDetails.city && !resumeDetails.address) ||
              (!resumeDetails.city && resumeDetails.address)) && (
              <View style={styles.singleColumn}>
                <View style={styles.contactColumn}>
                  <Text style={styles.contact}>
                    Email: {resumeDetails.email}
                  </Text>
                  <Text style={styles.contact}>
                    Phone: {resumeDetails.phone}
                  </Text>
                  {resumeDetails.city && (
                    <Text style={styles.contact}>
                      City: {resumeDetails.city}
                    </Text>
                  )}
                  {resumeDetails.address && (
                    <Text style={styles.contact}>
                      Address: {resumeDetails.address}
                    </Text>
                  )}
                </View>
              </View>
            )}

            {resumeDetails.socialLinks?.length === 1 ? (
              <Link style={styles.contact} src={`${resumeDetails.socialLinks}`}>
                {resumeDetails.socialLinks}
              </Link>
            ) : (
              <View style={styles.flexRow}>
                {resumeDetails.socialLinks?.map((link) => {
                  return (
                    <Link style={styles.contact} src={link}>
                      {link}{" "}
                    </Link>
                  );
                })}
              </View>
            )}
          </View>

          {resumeDetails.professionalSummaryTITLE && (
            <View style={styles.section}>
              <Text style={styles.subheader}>
                {resumeDetails.professionalSummaryTITLE}
              </Text>
              <Text style={styles.text}>
                {resumeDetails.professionalSummary}
              </Text>
            </View>
          )}

          {resumeDetails.emplymentTITLE && (
            //! use flex and gap

            <View style={styles.section}>
              <Text style={styles.subheader}>
                {resumeDetails.emplymentTITLE}
              </Text>
              {resumeDetails.employmentHistory?.map((eHistory, index) => (
                <View key={index} style={styles.emplymentView}>
                  <Text style={styles.text}>
                    <Text style={styles.bullet}>• </Text>
                    {eHistory.jobHistoryJobTitle} at{" "}
                    {eHistory.jobHistoryEmployer}
                    <Text>
                      {", "}
                      {eHistory.jobHistoryCity}
                    </Text>
                  </Text>

                  <Text style={[styles.text, { marginLeft: 8 }]}>
                    {eHistory.jobHistoryStartAndEndYear}
                  </Text>
                  <View style={styles.list}>
                    <Text style={styles.listItem}>
                      {eHistory.jobHistoryDescription}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          )}

          {resumeDetails.educationTITLE && (
            //! use flex and gap

            <View style={styles.section}>
              <Text style={styles.subheader}>
                {resumeDetails.educationTITLE}
              </Text>
              {resumeDetails.education?.map((education, index) => (
                <View key={index} style={styles.emplymentView}>
                  <Text style={styles.text}>
                    <Text style={styles.bullet}>• </Text>
                    {education.educationDegree} at {education.educationSchoold}
                    <Text>
                      {", "}
                      {education.educationCity}
                    </Text>
                  </Text>

                  <Text style={[styles.text, { marginLeft: 8 }]}>
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

          {/* {resumeDetails.educationTITLE && (
            <View style={styles.section}>
              <Text style={styles.subheader}>
                {resumeDetails.educationTITLE}
              </Text>
              <Text style={styles.text}>{resumeDetails.education}</Text>
            </View>
          )} */}

          {resumeDetails.skillsTITLE && (
            <View style={styles.section}>
              <Text style={styles.subheader}>{resumeDetails.skillsTITLE}</Text>
              <View style={styles.list}>
                <View style={styles.grid}>
                  {resumeDetails?.skills?.map((skill, index) => (
                    <Text style={styles.gridItem} key={index}>
                      {skill}
                    </Text>
                  ))}
                </View>
              </View>
            </View>
          )}

          {/* Projects */}
          {/* <View style={styles.section}>
          <Text style={styles.subheader}>Projects</Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>
              <Text style={styles.bullet}>•</Text>{" "}
              <Text style={{ fontWeight: "bold" }}>Project A</Text> - A web
              application for managing tasks. Utilized React for frontend
              development and Node.js for backend.
            </Text>
            <Text style={styles.listItem}>
              <Text style={styles.bullet}>•</Text>{" "}
              <Text style={{ fontWeight: "bold" }}>Project B</Text> - A
              real-time chat application. Implemented with WebSocket for
              real-time communication.
            </Text>
          </View>
            </View> */}
        </View>
      </Page>
    </Document>
  );
};

export default PDFtemplate2;
