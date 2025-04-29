import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import Heading from './Heading';
import Input from './Input';
import Button from './Button'; // import Button component

let todoIndex = 0; // manage todolist

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All',
    };
    this.submitTodo = this.submitTodo.bind(this);
  }

  inputChange(inputValue) {
    console.log('Input Value: ', inputValue);
    this.setState({ inputValue });
  }

  submitTodo() {
    if (this.state.inputValue.match(/^\s*$/)) {
      return; // empty space not added
    }

    const todo = {
      title: this.state.inputValue,
      todoIndex,
      complete: false,
    };
    todoIndex++;

    const todos = [...this.state.todos, todo];
    this.setState({
      todos,
      inputValue: '', // empty input after adding
    }, () => {
      console.log('State: ', this.state);
    });
  }

  render() {
    const { inputValue } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
          <Heading />
          <Input
            inputValue={inputValue}
            inputChange={text => this.inputChange(text)}
          />
          <Button submitTodo={this.submitTodo} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
