import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

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


const styles = StyleSheet.create({
  page: {
    padding: 30,
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
    color: "#374151", 
    marginBottom: 5,
    textAlign: "center", 
  },
  section: {
    marginBottom: 20,
    paddingBottom: 10,
    borderBottom: "1px solid #e5e7eb", 
  },
  subheader: {
    fontSize: 20,
    fontWeight: "bold", 
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
});

// Create a CV component with enhanced styling
const PDFtemplate2: React.FC<{ resumeDetails: ResumeDeatilsFormData }> = () => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.container}>
        {/* Header */}
        <View>
          <Text style={styles.header}>John Doe</Text>
          <Text style={styles.contact}>Email: john.doe@example.com</Text>
          <Text style={styles.contact}>Phone: (123) 456-7890</Text>
          <Text style={styles.contact}>LinkedIn: linkedin.com/in/johndoe</Text>
        </View>

        {/* Experience */}
        <View style={styles.section}>
          <Text style={styles.subheader}>Experience</Text>
          <Text style={styles.text}>
            <Text style={{ fontWeight: "bold" }}>Senior Developer</Text> -
            Company A (Jan 2020 - Present)
          </Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>
              <Text style={styles.bullet}>•</Text> Developed and maintained web
              applications using React and Node.js.
            </Text>
            <Text style={styles.listItem}>
              <Text style={styles.bullet}>•</Text> Led a team of 5 developers to
              deliver projects on time and within budget.
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
            <Text style={{ fontWeight: "bold" }}>B.Sc. Computer Science</Text> -
            University X (2013 - 2017)
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
    </Page>
  </Document>
);

export default PDFtemplate2;
