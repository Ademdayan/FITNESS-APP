import { useNavigation, useRoute } from '@react-navigation/native';
import { useState, useContext } from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, Octicons } from '@expo/vector-icons';
import { FitnessItems } from '../Context';

const FitScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const exercise = route.params.exercises;
  const current = exercise[index];
  const {
    completed,
    setCompleted,
    calories,
    setCalories,
    minutes,
    setMinutes,
    workout,
    setWorkout,
  } = useContext(FitnessItems);

  return (
    <SafeAreaView>
      <Image style={styles.image} source={{ uri: current?.image }} />

      <Text style={styles.title}>
        {current?.name} <Octicons name="question" size={22} color="#6d6868" />
      </Text>

      <Text style={styles.sets}>x{current?.sets}</Text>

      {/* Done Button */}
      {index + 1 >= exercise.length ? (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
            setCompleted([...completed, current?.name]);
            setWorkout(workout + 1);
            setMinutes(minutes + 2.5);
            setCalories(calories + 6.3);
            setTimeout(() => {
              setIndex(index + 1);
            }, 2000);
          }}
          style={styles.doneButton}
        >
          <Text style={styles.doneButtonText}>
            <Ionicons name="checkmark-circle" size={24} color="white" /> TAMAMLA
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Rest");
            setCompleted([...completed, current?.name]);
            setWorkout(workout + 1);
            setMinutes(minutes + 2.5);
            setCalories(calories + 6.3);
            setTimeout(() => {
              setIndex(index + 1);
            }, 2000);
          }}
          style={styles.doneButton}
        >
          <Text style={styles.doneButtonText}>
            <Ionicons name="checkmark-circle" size={24} color="white" /> TAMAMLA
          </Text>
        </TouchableOpacity>
      )}

      {/* Previous Button */}
      <View style={styles.navigationButtonsContainer}>
        <TouchableOpacity
          disabled={index === 0}
          onPress={() => {
            navigation.navigate("Rest");
            setTimeout(() => {
              setIndex(index - 1);
            }, 2000);
          }}
          style={[
            styles.previousButton,
            index === 0 && styles.disabledButton,
          ]}
        >
          <Text style={styles.previousButtonText}>
            <Ionicons name="play-skip-back" size={22} color="#6d6868" /> ÖNCEKİ
          </Text>
        </TouchableOpacity>

        {/* Skip Button */}
        {index + 1 >= exercise.length ? (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Home");
            }}
            style={styles.skipButton}
          >
            <Text style={styles.skipButtonText}>
              <Ionicons name="play-skip-forward" size={22} color="#3f3d3d" /> SONRAKİ
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Rest");
              setTimeout(() => {
                setIndex(index + 1);
              }, 2000);
            }}
            style={styles.skipButton}
          >
            <Text style={styles.skipButtonText}>
              <Ionicons name="play-skip-forward" size={22} color="#3f3d3d" /> SONRAKİ
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 400,
  },
  title: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 30,
  },
  sets: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 45,
    fontWeight: 'bold',
    marginTop: 10,
  },
  doneButton: {
    backgroundColor: '#198f51',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 50,
    borderRadius: 30,
    padding: 10,
    width: '90%',
  },
  doneButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  navigationButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginTop: 25,
  },
  previousButton: {
    borderRadius: 30,
    padding: 10,
    width: '42%',
  },
  disabledButton: {
    opacity: 0.5,
  },
  previousButtonText: {
    color: '#6d6868',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  skipButton: {
    borderRadius: 30,
    padding: 10,
    width: '42%',
  },
  skipButtonText: {
    color: '#3f3d3d',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default FitScreen;