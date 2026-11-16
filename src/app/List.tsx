
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet
} from 'react-native';

export default function List() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todo.trim() === '') return;

    setTodos([
      ...todos,
      {
        id: Date.now().toString(),
        title: todo,
        completed: false
      }
    ]);

    setTodo('');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(item =>
      item.id === id
        ? { ...item, completed: !item.completed }
        : item
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(item => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Todo List</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a task..."
          value={todo}
          onChangeText={setTodo}
        />

        <TouchableOpacity
          style={styles.addButton}
          onPress={addTodo}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text
              onPress={() => toggleTodo(item.id)}
              style={[
                styles.todoText,
                item.completed && styles.completed
              ]}
            >
              {item.completed ? '✓ ' : '○ '}
              {item.title}
            </Text>

            <TouchableOpacity
              onPress={() => deleteTodo(item.id)}
            >
              <Text style={styles.deleteButton}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#f5f5f5'
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8
  },
  addButton: {
    backgroundColor: 'blue',
    padding: 12,
    marginLeft: 10,
    borderRadius: 8
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8
  },
  todoText: {
    fontSize: 16,
    flex: 1
  },
  completed: {
    textDecorationLine: 'line-through',
    color: 'gray'
  },
  deleteButton: {
    color: 'red',
    marginLeft: 10
  }
});
