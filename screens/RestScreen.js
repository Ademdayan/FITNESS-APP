import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Image, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';

const RestScreen = () => {
  const navigation = useNavigation();
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeLeft <= 0) {
        navigation.goBack();
      } else {
        setTimeLeft((prev) => prev - 1);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{
          uri: "https://img.freepik.com/free-photo/full-length-athlete-sipping-water-from-fitness-bottle-exhausted-after-workout_1098-18878.jpg?w=360&t=st=1689099570~exp=1689100170~hmac=a60d176d8a393f59b8b032dd294005ceedbd048a04c01e542bcffa815ecd4428",
        }}
        style={styles.image}
      />

      <Text style={styles.title}>BİR ARA VERİN!</Text>

      <Text style={styles.timer}>
        <MaterialIcons name="timer" size={26} color="black" /> {timeLeft}
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: 420,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "900",
    marginTop: 50,
    textAlign: "center",
  },
  timer: {
    fontSize: 35,
    fontWeight: "900",
    marginTop: 50,
    textAlign: "center",
  },
});

export default RestScreen;
