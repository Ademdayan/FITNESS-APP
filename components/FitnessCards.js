import { Image, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import fitness from '../data/fitness';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const FitnessCards = () => {
  const FitnessData = fitness;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {FitnessData.map((item, id) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Workout", {
              image: item.image,
              exercises: item.exercises,
              id: item.id,
            })
          }
          style={styles.card}
          key={id}
        >
          <Image style={styles.image} source={{ uri: item.image }} />
          <Text style={styles.text}>{item.name}</Text>
          <MaterialCommunityIcons
            name="lightning-bolt"
            size={30}
            color="#dfbe04"
            style={styles.icon}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 12,
  },
  text: {
    position: 'absolute',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    left: 20,
    top: 20,
  },
  icon: {
    position: 'absolute',
    bottom: 15,
    left: 15,
  },
});

export default FitnessCards;
