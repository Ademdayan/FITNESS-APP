import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import FitnessCards from '../components/FitnessCards';
import { Ionicons } from '@expo/vector-icons';
import { useContext, useState } from 'react';
import { FitnessItems } from '../Context';

const HomeScreen = () => {
  const [showIcon, setShowIcon] = useState(false);
  const { calories, minutes, workout } = useContext(FitnessItems);

  const theme = showIcon ? styles.lightTheme : styles.darkTheme;

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={[styles.scrollView, theme.scrollView]}>
      <View style={[styles.headerContainer, theme.headerContainer]}>
        <View style={styles.headerTopRow}>
          <Text style={[styles.headerText, theme.headerText]}>BUGÜN ACI ÇEK, YARIN BİR EFSANE OL.</Text>

          {/* Dark Mode */}
          <TouchableOpacity onPress={() => setShowIcon(!showIcon)}>
            {showIcon ? <Ionicons name="sunny" size={24} color="black" /> : <Ionicons name="moon" size={24} color="white" />}
          </TouchableOpacity>  
        </View>

        {/* Cards Row */}
        <View style={styles.cardsRow}>
          {/* First Card */}
          <View style={[styles.shadowCards, theme.shadowCards]}>
            <Text style={styles.cardValue}>{calories.toFixed(2)}</Text>
            <Text style={theme.cardText}>KCAL</Text>
          </View>

          {/* Second Card */}
          <View style={[styles.shadowCards, theme.shadowCards]}>
            <Text style={styles.cardValue}>{workout}</Text>
            <Text style={theme.cardText}>EGZERSİZLER</Text>
          </View>

          {/* Third Card */}
          <View style={[styles.shadowCards, theme.shadowCards]}>
            <Text style={styles.cardValue}>{minutes}</Text>
            <Text style={theme.cardText}>DAKİKA</Text>
          </View>
        </View>
      </View>

      {/* Fitness Cards */}
      <FitnessCards />
    </ScrollView>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 20,
  },
  headerContainer: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: 160,
    width: "100%",
  },
  headerTopRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 50,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 17,
  },
  cardsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  shadowCards: {
    width: "32%",
    height: 80,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardValue: {
    fontWeight: "bold",
    fontSize: 18,
  },
  darkTheme: {
    scrollView: {
      backgroundColor: "#121212",
    },
    headerContainer: {
      backgroundColor: "#333333",
    },
    headerText: {
      color: "#ffffff",
    },
    shadowCards: {
      backgroundColor: "#444444",
    },
    cardText: {
      color: "#ffffff",
    },
  },
  lightTheme: {
    scrollView: {
      backgroundColor: "#ffffff",
    },
    headerContainer: {
      backgroundColor: "#333333",
    },
    headerText: {
      color: "#ffffff",
    },
    shadowCards: {
      backgroundColor: "#e0e0e0",
    },
    cardText: {
      color: "#000000",
    },
  },
});
