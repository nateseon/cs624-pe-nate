import React, { Component } from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';
import {
  Platform,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView
} from 'react-native';

const userImage = require('../../assets/images/user.png');

const data = new Array(6).fill({
  image: userImage,
  name: 'John Doe',
  occupation: 'React Native Developer',
  description:
    'John is a really great Javascript developer. He loves using JS to build React Native applications for iOS and Android.',
  showThumbnail: true
});

const ProfileCard = (props) => {
  const { image, name, occupation, description, onPress, showThumbnail } = props;
  let containerStyles = [styles.cardContainer];
  if (showThumbnail) {
    containerStyles.push(styles.cardThumbnail);
  }
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={containerStyles}>
        <View style={styles.cardImageContainer}>
          <Image style={styles.cardImage} source={image} />
        </View>
        <Text style={styles.cardName}>{name}</Text>
        <View style={styles.cardOccupationContainer}>
          <Text style={styles.cardOccupation}>{occupation}</Text>
        </View>
        <Text style={styles.cardDescription}>{description}</Text>
      </View>
    </TouchableHighlight>
  );
};

ProfileCard.propTypes = {
  image: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  showThumbnail: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }

  handleProfileCardPress = (index) => {
    const showThumbnail = !this.state.data[index].showThumbnail;
    this.setState({
      data: update(this.state.data, {
        [index]: { showThumbnail: { $set: showThumbnail } }
      })
    });
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.galleryContainer}>
        {/* Changed from single centered column to flex-wrap gallery */}
        {this.state.data.map((item, index) => (
          <ProfileCard
            key={index}
            {...item}
            onPress={() => this.handleProfileCardPress(index)}
          />
        ))}
      </ScrollView>
    );
  }
}

const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
  // flexbox gallery layout
  galleryContainer: {
    flexDirection: 'row', // row-wise layout
    flexWrap: 'wrap', // allow cards to wrap
    justifyContent: 'center',
    paddingVertical: 20
  },
  cardContainer: {
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 20,
    backgroundColor: profileCardColor,
    width: 150,
    height: 200,
    margin: 10, // margin between cards
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: 10 },
        shadowOpacity: 1
      },
      android: {
        elevation: 10
      }
    })
  },
  cardThumbnail: {
    transform: [{ scale: 0.6 }] // adjust scale for thumbnail view
  },
  cardImageContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 60,
    height: 60,
    borderRadius: 30,
    marginTop: 10,
    paddingTop: 10,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: 5 },
        shadowOpacity: 1
      },
      android: {
        elevation: 5
      }
    })
  },
  cardImage: {
    width: 40,
    height: 40
  },
  cardName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
    textShadowColor: 'black',
    textShadowOffset: { height: 2, width: 2 },
    textShadowRadius: 2
  },
  cardOccupationContainer: {
    borderColor: 'black',
    borderBottomWidth: 2
  },
  cardOccupation: {
    fontWeight: 'bold',
    fontSize: 12,
    marginVertical: 5
  },
  cardDescription: {
    fontStyle: 'italic',
    fontSize: 10,
    marginHorizontal: 10,
    marginTop: 5,
    textAlign: 'center'
  }
});
