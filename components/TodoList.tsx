import React, { useState } from 'react';
import { FlatList, StyleSheet, TextInput, Button, View } from 'react-native';
import TodoItem from '@/components/TodoItem';
import { ThemedView } from '@/components/ThemedView';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React Native', completed: false },
    { id: 2, text: 'Build a Todo App', completed: false },
  ]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim().length > 0) {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo(''); // Clear input after adding
    }
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <ThemedView style={styles.listContainer}>
      <TextInput
        style={styles.input}
        placeholder="Add a new todo"
        value={newTodo}
        onChangeText={setNewTodo}
      />
      <Button title="Add Todo" onPress={addTodo} />
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TodoItem item={item} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 20,
  },
  input: {
    padding: 10,
    marginBottom: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default TodoList;
