import React, { useEffect } from 'react';
import { Alert, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import TodoList from '@/components/TodoList';

export default function HomeScreen() {
  useEffect(() => {
    const showAlert = () => {
      Alert.alert("Welcome", "Hello! Welcome to the To Do App , Made By el gamez");
    };

    const timeout = setTimeout(showAlert, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <ThemedView style={styles.body}>
      <ThemedText style={styles.title}>To Do App</ThemedText>
      <TodoList />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  body: {
    padding: 30,
    height:'100%'
  },
  title: {
    color: 'blue',
  },
});
