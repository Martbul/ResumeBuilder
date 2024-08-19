import React from "react";
import {
  PDFViewer,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

import type { ResumeDeatilsFormData } from "@/app/utils/types";


const styles = StyleSheet.create({
  page: {
    padding: 20,
    backgroundColor: "#f9fafb", // Tailwind's bg-gray-100
    fontFamily: "Helvetica", // Default font in PDF rendering
  },
  container: {
    flexDirection: "row",
  },
  leftColumn: {
    width: "70%",
    paddingRight: 20,
  },
  rightColumn: {
    width: "30%",
    backgroundColor: "#e5e7eb", // Tailwind's bg-gray-200
    padding: 15,
    borderRadius: 5,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold", // Tailwind's font-bold
    marginBottom: 10,
    textAlign: "center",
  },
  contact: {
    fontSize: 12,
    color: "#374151", // Tailwind's text-gray-700
    marginBottom: 5,
    textAlign: "center", // Tailwind's text-center
  },
  profilePicture: {
    width: 80, // Smaller profile picture
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
    border: "2px solid #374151",
  },
  section: {
    marginBottom: 20,
    paddingBottom: 10,
    borderBottom: "1px solid #e5e7eb", // Tailwind's border-gray-200
  },
  subheader: {
    fontSize: 22,
    fontWeight: "bold", // Tailwind's font-bold
    borderBottom: "2px solid #374151", // Tailwind's border-gray-700
    paddingBottom: 5,
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
    lineHeight: 1.5, // Tailwind's leading-relaxed
  },
  list: {
    margin: 0,
    padding: 0,
    listStyleType: "none",
  },
  listItem: {
    marginBottom: 5,
    fontSize: 12,
    lineHeight: 1.5, // Tailwind's leading-relaxed
  },
  bullet: {
    marginRight: 5,
    fontSize: 12,
    fontWeight: "bold",
    color: "#374151", // Tailwind's text-gray-700
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#374151", // Tailwind's text-gray-700
    marginBottom: 5,
  },
  highlighted: {
    backgroundColor: "#e5e7eb", // Tailwind's bg-gray-200
    padding: 5,
    borderRadius: 5,
  },
});

// Create a CV component with a two-column layout
const PDFtemplate3: React.FC<{ resumeDetails: ResumeDeatilsFormData }> = () => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.container}>
        {/* Right Column (was left) */}
        <View style={styles.rightColumn}>
          <Image
            style={styles.profilePicture}
            src="https://via.placeholder.com/80" // Replace with your profile picture URL
          />
          <Text style={styles.header}>John Doe</Text>
          <Text style={styles.contact}>Email: john.doe@example.com</Text>
          <Text style={styles.contact}>Phone: (123) 456-7890</Text>
          <Text style={styles.contact}>LinkedIn: linkedin.com/in/johndoe</Text>
        </View>

        {/* Left Column (was right) */}
        <View style={styles.leftColumn}>
          {/* Experience */}
          <View style={styles.section}>
            <Text style={styles.subheader}>Experience</Text>
            <Text style={styles.text}>
              <Text style={{ fontWeight: "bold" }}>Senior Developer</Text> -
              Company A (Jan 2020 - Present)
            </Text>
            <View style={styles.list}>
              <Text style={styles.listItem}>
                <Text style={styles.bullet}>•</Text> Developed and maintained
                web applications using React and Node.js.
              </Text>
              <Text style={styles.listItem}>
                <Text style={styles.bullet}>•</Text> Led a team of 5 developers
                to deliver projects on time and within budget.
              </Text>
            </View>

            <Text style={styles.text}>
              <Text style={{ fontWeight: "bold" }}>Software Engineer</Text> -
              Company B (Jun 2017 - Dec 2019)
            </Text>
            <View style={styles.list}>
              <Text style={styles.listItem}>
                <Text style={styles.bullet}>•</Text> Worked on backend services
                and APIs using Python and Django.
              </Text>
              <Text style={styles.listItem}>
                <Text style={styles.bullet}>•</Text> Improved application
                performance by 30% through code optimization.
              </Text>
            </View>
          </View>

          {/* Education */}
          <View style={styles.section}>
            <Text style={styles.subheader}>Education</Text>
            <Text style={styles.text}>
              <Text style={{ fontWeight: "bold" }}>B.Sc. Computer Science</Text>{" "}
              - University X (2013 - 2017)
            </Text>
          </View>

          {/* Skills */}
          <View style={styles.section}>
            <Text style={styles.subheader}>Skills</Text>
            <View style={styles.list}>
              <Text style={styles.listItem}>
                <Text style={styles.bullet}>•</Text> JavaScript, React, Node.js
              </Text>
              <Text style={styles.listItem}>
                <Text style={styles.bullet}>•</Text> Python, Django
              </Text>
              <Text style={styles.listItem}>
                <Text style={styles.bullet}>•</Text> SQL, MongoDB
              </Text>
              <Text style={styles.listItem}>
                <Text style={styles.bullet}>•</Text> Git, Docker
              </Text>
            </View>
          </View>

          {/* Projects */}
          <View style={styles.section}>
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
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default PDFtemplate3;
