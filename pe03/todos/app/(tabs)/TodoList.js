import React from 'react';
import { View } from 'react-native';
import Todo from './Todo';

const TodoList = ({ todos, deleteTodo, toggleComplete, type }) => {
    // apply filtering
    const filteredTodos = todos.filter((todo) => {
        if (type === 'All') return true;
        if (type === 'Active') return !todo.complete;
        if (type === 'Complete') return todo.complete;
    });

    const todoComponents = filteredTodos.map((todo, i) => (
        <Todo
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
            key={i}
            todo={todo}
        />
    ));
    
    return (
        <View>
            {todoComponents}
        </View>
    );
};

export default TodoList;