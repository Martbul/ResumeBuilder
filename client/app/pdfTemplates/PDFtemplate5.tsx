import React from "react";
import {
  PDFViewer,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Font,
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
  photo: {
    width: 100,
    height: 100,
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
  text: {
    marginBottom: 5,
    lineHeight: 1.5,
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
});
// Create a CV component with a two-column layout
const PDFtemplate5: React.FC<{ resumeDetails: ResumeDeatilsFormData }> = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        {/* Left Column */}
        <View style={styles.leftColumn}>
          <Image
            style={styles.photo}
            src="https://i0.wp.com/www.stignatius.co.uk/wp-content/uploads/2020/10/default-user-icon.jpg?fit=415%2C415&ssl=1"
          />
          <Text style={styles.name}>Name and Surname</Text>
          <Text style={styles.jobTitle}>Job Title</Text>

          <View style={styles.contactItem}>
            <Text style={styles.iconText}>
              <Text style={styles.icon}>📍</Text>
              Personal Address
            </Text>
            <Text style={styles.text}>Personal Address</Text>
          </View>

          <View style={styles.contactItem}>
            <Text style={styles.iconText}>
              <Text style={styles.icon}>📧</Text>
              example@gmail.com
            </Text>
          </View>

          <View style={styles.contactItem}>
            <Text style={styles.iconText}>
              <Text style={styles.icon}>📞</Text>
              06 01 02 03 04
            </Text>
          </View>

          <View style={styles.contactItem}>
            <Text style={styles.iconText}>
              <Text style={styles.icon}>🎂</Text>
              Date of birth: 24/05/1995
            </Text>
          </View>

          <View style={styles.contactItem}>
            <Text style={styles.iconText}>
              <Text style={styles.icon}>🚗</Text>
              Driving licence: B
            </Text>
          </View>

          <Text style={styles.sectionTitle}>Skills</Text>
          <Text style={styles.text}>- Skill 1</Text>
          <Text style={styles.text}>- Skill 2</Text>
          <Text style={styles.text}>- Skill 3</Text>
          <Text style={styles.text}>- Skill 4</Text>
          <Text style={styles.text}>- Skill 5</Text>

          <Text style={styles.sectionTitle}>Languages</Text>
          <Text style={styles.text}>- Language 1</Text>
          <Text style={styles.text}>- Language 2</Text>

          <Text style={styles.sectionTitle}>Hobbies</Text>
          <Text style={styles.text}>- Hobby 1</Text>
          <Text style={styles.text}>- Hobby 2</Text>
          <Text style={styles.text}>- Hobby 3</Text>
          <Text style={styles.text}>- Hobby 4</Text>
        </View>

        {/* Right Column */}
        <View style={styles.rightColumn}>
          <Text style={styles.sectionTitle}>About Me</Text>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>

          <Text style={styles.sectionTitle}>Professional Experience</Text>
          <Text style={styles.text}>
            <Text style={{ fontWeight: "bold" }}>2020 - 2022 </Text>
            Position Held - Company
          </Text>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>

          <Text style={styles.text}>
            <Text style={{ fontWeight: "bold" }}>2015 - 2020 </Text>
            Position Held - Company
          </Text>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>

          {/* Add more experiences similarly */}

          <Text style={styles.sectionTitle}>Educational Background</Text>
          <Text style={styles.text}>
            <Text style={{ fontWeight: "bold" }}>2005 - 2008 </Text>
            Degree - Institution
          </Text>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>

          <Text style={styles.text}>
            <Text style={{ fontWeight: "bold" }}>2002 - 2005 </Text>
            Degree - Institution
          </Text>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>

          {/* Add more educational qualifications similarly */}
        </View>
      </View>
    </Page>
  </Document>
);

export default PDFtemplate5;