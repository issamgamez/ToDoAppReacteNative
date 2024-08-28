import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { ThemedText } from '@/components/ThemedText';

type TodoItemProps = {
  item: { id: number; text: string; completed: boolean };
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
};

const TodoItem = ({ item, toggleComplete, deleteTodo }: TodoItemProps) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => toggleComplete(item.id)}>
        <ThemedText style={[styles.itemText, item.completed && styles.completed]}>
          {item.text}
        </ThemedText>
      </TouchableOpacity>
      <Button title="Delete" onPress={() => deleteTodo(item.id)} color="red" />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 1,
  },
  itemText: {
    fontSize: 18,
    flex: 1,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
});

export default TodoItem;
