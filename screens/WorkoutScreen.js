import { useNavigation, useRoute } from '@react-navigation/native';
import { Image, ScrollView, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useContext } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { FitnessItems } from '../Context';

const WorkoutScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { completed, setCompleted } = useContext(FitnessItems);

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
      >
        <Image
          style={styles.headerImage}
          source={{ uri: route.params.image }}
        />

        <Ionicons
          onPress={() => navigation.goBack()}
          style={styles.backIcon}
          name="arrow-back-outline"
          size={24}
          color="black"
        />

        {
          route.params.exercises.map((item, index) => (
            <TouchableOpacity style={styles.exerciseCard} key={index}>
              <View style={styles.exerciseInfoContainer}>
                <Image style={styles.exerciseImage} source={{ uri: item.image }} />

                <View style={styles.exerciseDetails}>
                  <Text style={styles.exerciseName}>{item.name}</Text>
                  <Text style={styles.exerciseSets}>{item.sets}</Text>
                </View>
              </View>

              {
                completed.includes(item?.name) ? (
                  <AntDesign name="checkcircle" size={24} color="#198f51" />
                ) : null
              }
            </TouchableOpacity>
          ))
        }
      </ScrollView>

      <TouchableOpacity 
        onPress={() => {
          navigation.navigate("Fit", { exercises: route.params.exercises });
          setCompleted([]);
        }} 
        style={styles.startButton}
      >
        <Text style={styles.startButtonText}>
          <MaterialCommunityIcons name="whistle" size={24} color="white" /> BAŞLA
        </Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "white",
    marginTop: 20,
  },
  headerImage: {
    width: "100%",
    height: 200,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 20,
  },
  backIcon: {
    position: 'absolute',
    top: 30,
    left: 20,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 3,
  },
  exerciseCard: {
    marginVertical: 12,
    marginHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  exerciseInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  exerciseImage: {
    width: 90,
    height: 90,
  },
  exerciseDetails: {
    marginLeft: 10,
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  exerciseSets: {
    marginTop: 4,
    fontSize: 16,
    color: "gray",
  },
  startButton: {
    backgroundColor: "#198f51",
    padding: 12,
    marginHorizontal: 15,
    marginVertical: 20,
    borderRadius: 50,
  },
  startButtonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default WorkoutScreen;