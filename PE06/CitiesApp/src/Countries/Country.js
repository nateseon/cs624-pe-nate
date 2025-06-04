import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme';

const Country = ({ route }) => {
  const { country } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{country.country}</Text>
      <Text style={styles.label}>Currency: {country.currency}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'white',
    fontSize: 36,
    marginBottom: 20,
  },
  label: {
    color: 'white',
    fontSize: 24,
  },
});

export default Country;
