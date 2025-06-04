import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { colors } from '../theme';

class Countries extends React.Component {
  renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.country}>{item.country}</Text>
      <Text style={styles.currency}>{item.currency}</Text>
    </View>
  );

  render() {
    const { countries } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Countries</Text>
        <FlatList
          data={countries}
          keyExtractor={item => item.id}
          renderItem={this.renderItem}
          ListEmptyComponent={
            <Text style={styles.empty}>No countries added yet.</Text>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  heading: {
    color: 'white',
    fontSize: 40,
    marginBottom: 10,
    alignSelf: 'center',
  },
  itemContainer: {
    backgroundColor: 'white',
    marginVertical: 6,
    padding: 16,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  country: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  currency: {
    fontSize: 18,
    color: '#666',
  },
  empty: {
    color: 'white',
    alignSelf: 'center',
    marginTop: 20,
    fontSize: 18,
  },
});

export default Countries;