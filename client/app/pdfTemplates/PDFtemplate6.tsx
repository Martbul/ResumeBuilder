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

// Styles definition to match the layout of the provided CV
const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 40,
    paddingVertical: 40,
    fontFamily: "Helvetica",
    fontSize: 10,
    lineHeight: 1.6,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#C5C5C5",
    paddingBottom: 10,
  },
  leftColumn: {
    width: "45%",
    paddingRight: 15,
  },
  rightColumn: {
    width: "45%",
    paddingLeft: 15,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginLeft: "auto",
    borderWidth: 2,
    borderColor: "#5555FF",
  },
  nameSection: {
    marginBottom: 5,
  },
  fullName: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  position: {
    fontSize: 12,
    backgroundColor: "#A5A5FF",
    color: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginVertical: 10,
    borderRadius: 2,
    alignSelf: "flex-start",
  },
  infoItem: {
    marginBottom: 3,
    fontSize: 10,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#C5C5C5",
    paddingBottom: 2,
    textTransform: "uppercase",
  },
  sectionContent: {
    marginBottom: 10,
  },
  experienceTitle: {
    fontWeight: "bold",
  },
  skillsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 5,
  },
  skillItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  skillIcon: {
    width: 15,
    height: 15,
    marginRight: 5,
  },
  interestItem: {
    marginBottom: 3,
  },
});

const PDFtemplate6: React.FC<{ resumeDetails: any }> = ({ resumeDetails }) => {
  return (
    <Document>
      <Page style={styles.page}>
        {/* Header Section */}
        <View style={styles.header}>
          <View style={styles.leftColumn}>
            <View style={styles.nameSection}>
              <Text style={styles.fullName}>Nom Prénom</Text>
              <Text style={styles.position}>Poste visé</Text>
            </View>
            <Text style={styles.infoItem}>Âge: 23 ans</Text>
            <Text style={styles.infoItem}>
              E-mail: hello@reallygreatsite.com
            </Text>
            <Text style={styles.infoItem}>Mobile: +0 212 123 24 25</Text>
            <Text style={styles.infoItem}>Adresse: 123 Anywhere, France</Text>
            <Text style={styles.infoItem}>Langue: Anglais, Espagnol</Text>
            <Text style={styles.infoItem}>Permis: B + Véhicule</Text>
          </View>
          <View style={styles.rightColumn}>
            <Image
              style={styles.profileImage}
              src="https://path-to-your-image.jpg"
            />
          </View>
        </View>

        {/* Left Column: Competencies and Interests */}
        <View style={styles.leftColumn}>
          <View style={styles.sectionContent}>
            <Text style={styles.sectionTitle}>COMPÉTENCES</Text>
            <View style={styles.skillsContainer}>
              <View style={styles.skillItem}>
                <Image
                  style={styles.skillIcon}
                  src="https://path-to-your-icon.png"
                />
                <Text>Logiciel 1</Text>
              </View>
              <View style={styles.skillItem}>
                <Image
                  style={styles.skillIcon}
                  src="https://path-to-your-icon.png"
                />
                <Text>Logiciel 2</Text>
              </View>
              <View style={styles.skillItem}>
                <Image
                  style={styles.skillIcon}
                  src="https://path-to-your-icon.png"
                />
                <Text>Logiciel 3</Text>
              </View>
              <View style={styles.skillItem}>
                <Image
                  style={styles.skillIcon}
                  src="https://path-to-your-icon.png"
                />
                <Text>Logiciel 4</Text>
              </View>
            </View>
          </View>

          <View style={styles.sectionContent}>
            <Text style={styles.sectionTitle}>CENTRES D'INTÉRÊT</Text>
            <Text style={styles.interestItem}>Voyage</Text>
            <Text style={styles.interestItem}>Sport</Text>
            <Text style={styles.interestItem}>Musique</Text>
          </View>
        </View>

        {/* Right Column: Education and Experiences */}
        <View style={styles.rightColumn}>
          <View style={styles.sectionContent}>
            <Text style={styles.sectionTitle}>ÉDUCATION</Text>
            <Text style={styles.experienceTitle}>L'intitulé du diplôme</Text>
            <Text>Nom de l'établissement, Ville</Text>
            <Text>2020 - 2022</Text>
          </View>
          <View style={styles.sectionContent}>
            <Text style={styles.experienceTitle}>L'intitulé du diplôme</Text>
            <Text>Nom de l'établissement, Ville</Text>
            <Text>2017 - 2020</Text>
          </View>

          <View style={styles.sectionContent}>
            <Text style={styles.sectionTitle}>
              EXPÉRIENCES PROFESSIONNELLES
            </Text>
            <View style={styles.sectionContent}>
              <Text style={styles.experienceTitle}>Nom de l'entreprise</Text>
              <Text>Poste occupé</Text>
              <Text>Ville</Text>
              <Text>Juillet 2022 - actuel</Text>
              <Text>
                Mettez ici une description de vos expériences. Utilisez des noms
                pour décrire les tâches. Par exemple: création, développement,
                etc.
              </Text>
            </View>

            <View style={styles.sectionContent}>
              <Text style={styles.experienceTitle}>Nom de l'entreprise</Text>
              <Text>Poste occupé</Text>
              <Text>Ville</Text>
              <Text>Juin 2022 - Septembre 2022</Text>
              <Text>
                Mettez ici une description de vos expériences. Utilisez des noms
                pour décrire les tâches. Par exemple: création, développement,
                etc.
              </Text>
            </View>

            <View style={styles.sectionContent}>
              <Text style={styles.experienceTitle}>Nom de l'entreprise</Text>
              <Text>Poste occupé</Text>
              <Text>Ville</Text>
              <Text>Juillet 2020 - Septembre 2020</Text>
              <Text>
                Mettez ici une description de vos expériences. Utilisez des noms
                pour décrire les tâches. Par exemple: création, développement,
                etc.
              </Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PDFtemplate6;
