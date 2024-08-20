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

Font.register({
  family: "Helvetica-Bold",
  src: "https://fonts.gstatic.com/s/helvetica/v10/RSiWiYXESlG6u7WuT9vJzA.ttf",
  fontWeight: "bold",
});

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 10,
    fontFamily: "Helvetica",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  contactInfo: {
    fontSize: 10,
    color: "#666",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  title: {
    fontSize: 12,
    marginBottom: 10,
  },
  section: {
    marginBottom: 10,
  },
  heading: {
    backgroundColor: "#f8e71c",
    padding: 5,
    fontWeight: "bold",
    fontSize: 12,
  },
  text: {
    marginBottom: 5,
  },
  listItem: {
    flexDirection: "row",
    marginBottom: 5,
  },
  bulletPoint: {
    width: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: "50%",
  },
  link: {
    color: "#0000FF",
    textDecoration: "none",
  },
});

// Create a CV component with a two-column layout
const PDFtemplate4: React.FC<{ resumeDetails: ResumeDeatilsFormData }> = ({
  resumeDetails,
}) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <View>
            <Text style={styles.contactInfo}>+1 (970) 333-383-999</Text>
            <Text style={styles.contactInfo}>melanie.robinson@mail.com</Text>
            <Link
              style={styles.contactInfo}
              src="https://linkedin.com/in/mrobinson"
            >
              linkedin.com/in/mrobinson
            </Link>
          </View>
          <Image style={styles.image} src="/path/to/image.png" />
        </View>
        <Text style={styles.name}>Melanie Robinson</Text>
        <Text style={styles.title}>
          Qualified Customer Service Representative with over 4 years in
          fast-paced customer service and call center environments. As a
          customer service representative I am personable and good at building
          loyal relationships, solving problems, and increasing sales. I also
          excel in customer service management, articulating product benefits
          and creating solutions that provide value to the customer.
        </Text>

        <View style={styles.section}>
          <Text style={styles.heading}>Skills</Text>
          <View style={styles.listItem}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.text}>International sales support</Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.text}>Strategic sales knowledge</Text>
          </View>
          {/* Add other skills similarly */}
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Work history</Text>
          <Text style={styles.text}>
            <Text style={{ fontWeight: "bold" }}>
              Customer Service Representative -{" "}
            </Text>
            BATS Global Markets Inc, Chicago | 04/2017 to 09/2018
          </Text>
          <Text style={styles.text}>
            • Contact customer to follow up on purchases.
          </Text>
          <Text style={styles.text}>
            • Promoted sales as a superior provider of customer needs.
          </Text>
          {/* Add other work history similarly */}
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Education</Text>
          <Text style={styles.text}>
            Bachelor of Arts: Marketing, Oregon University – 2018
          </Text>
          <Text style={styles.text}>
            Bachelor of Arts: Marketing, Oregon University – 2014
          </Text>
          <Text style={styles.text}>
            Bachelor of Arts: Marketing, Oregon University – 2011
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Reference</Text>
          <Text style={styles.text}>
            Steve Halloway - Business Consultant at SX Solutions
          </Text>
          <Text style={styles.text}>
            shalloway@sxsolutions.com | 305-300-7891
          </Text>
        </View>
      </Page>
    </Document>
  );
}
  

export default PDFtemplate4;