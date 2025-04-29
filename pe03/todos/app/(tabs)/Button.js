import React from 'react';
import { Text, TouchableHighlight, StyleSheet } from 'react-native';

const Button = ({ submitTodo }) => (
    <TouchableHighlight
        underlayColor="#efefef"
        style={styles.button}
        onPress={submitTodo}
    >
        <Text style={styles.submit}>Submit</Text>
    </TouchableHighlight>
);

const styles = StyleSheet.create({
    button: {
        height: 45,
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        borderColor: '#ededed',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
    },
    submit: {
        color: '#666666',
        fontWeight: '600',
    },
});

export default Button;
