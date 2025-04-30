import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const TabBarItem = ({ title, selected, setType }) => (
  <TouchableHighlight
    onPress={() => setType(title)}
    underlayColor="#efefef"
    style={[styles.item, selected ? styles.selected : null]}
  >
    <Text style={[styles.itemText, selected ? styles.bold : null]}>
      {title}
    </Text>
  </TouchableHighlight>
);

const TabBar = ({ type, setType }) => (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      {['All', 'Active', 'Complete'].map((title) => (
        <TabBarItem
          key={title}
          title={title}
          selected={type === title}
          setType={setType}
        />
      ))}
    </SafeAreaView>
  );

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#f5f5f5',
    minHeight: 50,
  },
  item: {
    padding: 10,
  },
  itemText: {
    fontSize: 16,
    color: '#555',
  },
  bold: {
    fontWeight: 'bold',
    color: '#000',
  },
  selected: {
    borderBottomWidth: 2,
    borderColor: '#000',
  },
});

export default TabBar;
