import React from 'react';
import {Provider} from 'react-redux';
import Todo from './components/todos/index';
import {store} from './store';
import {SafeAreaView} from 'react-native';

const App = () => (
  <SafeAreaView>
    <Provider store={store}>
      <Todo />
    </Provider>
  </SafeAreaView>
);

export default App;
