/* eslint import/no-unresolved: [2, { ignore: ['@env'] }] */
import axios from 'axios';
import { API_HOST } from '@env';

export const getAllTodos = async () => axios.get(`${API_HOST}/todos`);

export const addTodo = async (item) => axios.post(`${API_HOST}/todos`, item);

export const updateTodo = async (queryParams, data) => axios.put(`${API_HOST}/todos/${queryParams.id}`, data);

export const deleteTodo = async (queryParams) => axios.delete(`${API_HOST}/todos/${queryParams.id}`);
