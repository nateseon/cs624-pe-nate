import React from 'react';
import { ScrollView, View, Text, TextInput, StyleSheet, Image, Linking } from 'react-native';

const App = () => {
  return (
    // Use ScrollView to scroll the screen on mobile
    <ScrollView style={styles.screen}>
      <Image
        source={require('../../assets/images/icon.png')}
        style={styles.image}
        resizeMode="cover"
      />
      
      // use linking to access url 
      <Text style={styles.link} onPress={() => Linking.openURL('https://cityu.smartcatalogiq.com/2022-2023/ay-2022-2023-catalog/')}>
        View the full catalog here
      </Text>

      <Text style={styles.question}>Which course did you like?</Text>
      <TextInput
        style={styles.input}
        placeholder="ex. CS624"
      />

      <View style={styles.sectionTitleBox}>
        <Text style={styles.sectionTitle}>Core Requirements (24 credits)</Text>
      </View>
      <View style={styles.classListBox}>
        <Text>• CS 504 Software Engineering</Text>
        <Text>• CS 506 Programming for Computing</Text>
        <Text>• CS 519 Cloud Computing Overview</Text>
        <Text>• CS 533 Computer Architecture</Text>
        <Text>• CS 547 Secure Systems and Programs</Text>
        <Text>• CS 622 Discrete Math and Algorithms for Computing</Text>
        <Text>• DS 510 Artificial Intelligence for Data Science</Text>
        <Text>• DS 620 Machine Learning & Deep Learning</Text>
      </View>
      <View style={styles.sectionTitleBox}>
        <Text style={styles.sectionTitle}>Depth of Study (6 credits)</Text>
      </View>
      <View style={styles.classListBox}>
        <Text>• CS 624 Full-Stack Development - Mobile App</Text>
        <Text>• CS 628 Full-Stack Development - Web App</Text>
      </View>
      <View style={styles.sectionTitleBox}>
        <Text style={styles.sectionTitle}>Capstone (3 credits)</Text>
      </View>
      <View style={styles.classListBox}>
        <Text>• CS 687 Computer Science Capstone</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'white',
    padding: 16,
  },
  image: {
    width: '100%',
    height: 250,
    marginBottom: 20,
    borderRadius: 8,
  },
  link: {
    color: 'blue',
    marginBottom: 16,
    textDecorationLine: 'underline',
  },
  question: {
    fontSize: 20,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
    marginBottom: 20,
  },
  sectionTitleBox: {
    backgroundColor: '#FFDDDD',
    marginBottom: 4,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  classListBox: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
});

export default App;
