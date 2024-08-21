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

// Define the styles to match the provided CV layout
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Helvetica",
    fontSize: 10,
    lineHeight: 1.5,
    color: "#333",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 2,
    borderBottomColor: "#FFDD44",
    paddingBottom: 10,
    marginBottom: 15,
  },
  contactInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 9,
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
});

const PDFtemplate7: React.FC<{ resumeDetails: any }> = ({ resumeDetails }) => {
  return (
    <Document>
      <Page style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.name}>Melanie Robinson</Text>
            <Text style={styles.title}>
              Qualified Customer Service Representative
            </Text>
          </View>
          <Image
            style={styles.profileImage}
            src="https://path-to-your-profile-image.jpg"
          />
        </View>

        {/* Contact Info */}
        <View style={styles.contactInfo}>
          <Text>+1 (970) 333-383-999</Text>
          <Text>melanie.robinson@mail.com</Text>
          <Text>linkedin.com/mrobinson</Text>
        </View>

        {/* Sections */}
        <View style={styles.sectionColumn}>
          {/* Left Column */}
          <View style={styles.leftColumn}>
            {/* Skills */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Skills</Text>
              <View style={styles.bulletList}>
                <Text style={styles.bulletPoint}>
                  International sales support
                </Text>
                <Text style={styles.bulletPoint}>
                  Strategic sales knowledge
                </Text>
                <Text style={styles.bulletPoint}>
                  Exceptional communication skills
                </Text>
                <Text style={styles.bulletPoint}>Stock records management</Text>
                <Text style={styles.bulletPoint}>
                  Problem-solving and execution
                </Text>
              </View>
            </View>

            {/* Education */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Education</Text>
              <Text>Bachelor of Arts: Marketing Oregon University – 2018</Text>
              <Text>Bachelor of Arts: Marketing Oregon University – 2014</Text>
              <Text>Bachelor of Arts: Marketing Oregon University – 2011</Text>
            </View>

            {/* Reference */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Reference</Text>
              <Text>Steve Halloway - Business Consultant at SX Solutions</Text>
              <Text>shallaway@sxsolutions.com</Text>
              <Text>305-300-7891</Text>
            </View>
          </View>

          {/* Right Column */}
          <View style={styles.rightColumn}>
            {/* Work History */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Work History</Text>
              <View style={styles.bulletList}>
                <Text style={styles.bulletPoint}>
                  Customer Service Representative – BATS Global Markets Inc.,
                  Chicago – 04/2017 to 09/2018
                </Text>
                <Text style={styles.bulletPoint}>
                  Contact customers to follow up on purchases.
                </Text>
                <Text style={styles.bulletPoint}>
                  Suggested new merchandise based on customers’ preferences and
                  needs.
                </Text>
                <Text style={styles.bulletPoint}>
                  Promoted services as a superior provider within the
                  competitive set.
                </Text>
                <Text style={styles.bulletPoint}>
                  Increased new customer acquisition by 12%.
                </Text>
                <Text style={styles.bulletPoint}>
                  Managed clients with up-to-date knowledge of product and
                  services.
                </Text>
                <Text style={styles.bulletPoint}>
                  Answered phone inquiries regarding services and managed
                  replacement of damaged or missing products.
                </Text>
              </View>

              <View style={styles.bulletList}>
                <Text style={styles.bulletPoint}>
                  Customer Service Representative – Foodspotting Inc., Chicago –
                  04/2015 to 09/2016
                </Text>
                <Text style={styles.bulletPoint}>
                  Assisted customers with food selection.
                </Text>
                <Text style={styles.bulletPoint}>
                  Inquiries and customer support requests were managed with
                  professionalism and tact.
                </Text>
                <Text style={styles.bulletPoint}>
                  Processed returns and exchanges.
                </Text>
                <Text style={styles.bulletPoint}>
                  Contacted customers to follow up on purchases.
                </Text>
                <Text style={styles.bulletPoint}>
                  Provided timely resolution for replacement of damaged or
                  missing products.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PDFtemplate7;
