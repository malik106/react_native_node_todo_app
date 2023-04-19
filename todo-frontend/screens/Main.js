import { Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Divider, Spinner } from 'native-base';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import InputComp from '../src/components/Input';
import TodoList from '../src/components/TodoList';
import {
  addTodo, deleteTodo, getAllTodos, updateTodo,
} from '../src/utils/api';

function Main() {
  async function fetchTodoList() {
    try {
      const response = await getAllTodos();
      return response.data.data.sort((a, b) => b.id - a.id);
    } catch (error) {
      console.log(error);
    }
  }

  const {
    isLoading, isError, data, error,
  } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodoList,
  });
  const [todoList, setTodoList] = useState(data);
  const [loading, setLoading] = useState({
    add: false,
    update: null,
    delete: null,
  });
  const queryClient = useQueryClient();

  useEffect(() => {
    setTodoList(data);
  }, [data]);

  const mutation = useMutation({
    mutationFn: (item) => {
      if (item.operation === 'add') {
        setLoading((prev) => ({ ...prev, add: true }));
        return addTodo({ text: item.data.todo });
      }
      if (item.operation === 'update') {
        setLoading((prev) => ({ ...prev, update: item.data.id }));
        const data = { text: item.data.text, isCompleted: true };
        const queryParams = { id: item.data.id };
        return updateTodo(queryParams, data);
      }
      if (item.operation === 'delete') {
        setLoading((prev) => ({ ...prev, delete: item.data.id }));
        const queryParams = { id: item.data.id };
        return deleteTodo(queryParams);
      }
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries('todos');
      setLoading({ add: false, update: null, delete: null });
    },
  });

  async function onAddItem(item) {
    mutation.mutate({ data: item, operation: 'add' });
  }

  const onComplated = async (item) => {
    mutation.mutate({ data: item, operation: 'update' });
  };

  const onRemoveItem = async (item) => {
    mutation.mutate({ data: item, operation: 'delete' });
  };

  if (isError) {
    return (
      <Text>
        Error:
        {error.message}
      </Text>
    );
  }

  return (
    <View style={{ padding: 16 }}>
      <InputComp onAddItem={(data) => onAddItem(data)} loading={loading.add} />
      <Divider my={2} />
      {!isLoading && todoList && !todoList.length && <Text style={{ textAlign: 'center' }}>Add your todo</Text>}
      {isLoading ? (
        <Spinner color="cyan.500" />
      ) : (
        <TodoList todoList={todoList} onRemoveItem={onRemoveItem} onComplated={onComplated} loading={loading} />
      )}
    </View>
  );
}

export default Main;
