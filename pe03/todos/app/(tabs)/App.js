import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Heading from './Heading';
import Input from './Input';
import Button from './Button';
import TodoList from './TodoList';
import TabBar from './TabBar';

let todoIndex = 0;

class App extends Component {
    constructor() {
        super();
        this.state = {
            inputValue: '',
            todos: [],
            type: 'All'
        };
        this.submitTodo = this.submitTodo.bind(this);
        this.toggleComplete = this.toggleComplete.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.setType = this.setType.bind(this);
    }

    deleteTodo(todoIndex) {
        let { todos } = this.state;
        todos = todos.filter((todo) => todo.todoIndex !== todoIndex);
        this.setState({ todos });
    }

    toggleComplete(todoIndex) {
        let todos = this.state.todos;
        todos.forEach((todo) => {
            if (todo.todoIndex === todoIndex) {
                todo.complete = !todo.complete;
            }
        });
        this.setState({ todos });
    }

    inputChange(inputValue) {
        this.setState({ inputValue });
    }

    submitTodo() {
        if (this.state.inputValue.match(/^\s*$/)) {
            return;
        }
        const todo = {
            title: this.state.inputValue,
            todoIndex,
            complete: false
        };
        todoIndex++;
        this.setState(prevState => ({
            todos: [...prevState.todos, todo],
            inputValue: ''
        }));
    }

    setType(type) {
        this.setState({ type });
    }

    render() {
        const { inputValue, todos, type } = this.state;

        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <ScrollView
                        keyboardShouldPersistTaps="always"
                        contentContainerStyle={styles.scrollContainer}
                    >
                        <Heading />
                        <Input 
                            inputValue={inputValue}
                            inputChange={(text) => this.inputChange(text)}
                        />
                        <TodoList 
                            toggleComplete={this.toggleComplete}
                            deleteTodo={this.deleteTodo}
                            todos={todos}
                            type={type}
                        />
                        <Button submitTodo={this.submitTodo} />
                        <TabBar type={type} setType={this.setType} />
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5'
    },
    content: {
        flex: 1
    },
    scrollContainer: {
        paddingTop: 60,
        paddingBottom: 20
    },
    tabBar: {
        borderTopWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#fff'
    }
});

export default App;
