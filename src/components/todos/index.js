import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addTodo, removeTodo} from '../../actions/actions';
import {styles} from './styles';
import {
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const Todo = () => {
  const [todoValue, setTodoValue] = useState('');

  const dispatch = useDispatch();
  const data = useSelector(state => state);
  const todos = data.todos.todos;

  const addTask = () => {
    dispatch(addTodo(todoValue));
    setTodoValue('');
  };

  const removeTask = item => {
    const todoIndex = todos.indexOf(item);
    if (todoIndex > -1) {
      dispatch(removeTodo(item));
    } else {
      console.log(`${todoValue} is not in the todo list`);
    }
  };

  const renderTodoList = () => {
    return (
      <FlatList
        data={todos}
        renderItem={({item}) => (
          <View style={styles.todoView}>
            <View style={styles.todoList}>
              <Text>{item}</Text>
            </View>
            <TouchableOpacity
              style={styles.removeTodo}
              onPress={() => removeTask(item)}>
              <Text> X </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    );
  };

  return (
    <View style={styles.main}>
      <TextInput
        style={styles.mainInput}
        onChangeText={setTodoValue}
        placeholder={'Type your todo here...'}
        value={todoValue}
      />
      <Button title="Add todo" onPress={addTask} />

      <Text>List of Todos :</Text>
      {renderTodoList()}
    </View>
  );
};

export default Todo;
