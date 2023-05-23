import axios from 'axios';

import { ADDNEW_TODO, GETALL_TODO, TOGGLE_TODO, UPDATE_TODO, DELETE_TODO, TOGGLE_TAB } from './type';

const API_URL = 'http://localhost:8000';

export const addNewTodo = (data) => async (dispatch) => {
    try {
        const res = await axios.post(`${API_URL}/todos`, { data });

        dispatch({ type: ADDNEW_TODO , payload: res.data });
    } catch (error) {
        console.log('Error while calling addNewTodo API ', error.message);
    }
}

export const gtd = () => async (dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/todos`);

        dispatch({ type: GETALL_TODO , payload: res.data });
    } catch (error) {
        console.log('Error while calling gtd API ', error.message);
    }
}

export const toggleTodo = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/todos/${id}`);

        dispatch({ type: TOGGLE_TODO , payload: res.data });
    } catch (error) {
        console.log('Error while calling gtd API ', error.message);
    }
}

export const utd = (id, data) => async (dispatch) => {
    try {
        const res = await axios.put(`${API_URL}/todos/${id}`, { data });

        dispatch({ type: UPDATE_TODO , payload: res.data });
    } catch (error) {
        console.log('Error while calling utd API ', error.message);
    }
}

export const dtd = (id) => async (dispatch) => {
    try {
        const res = await axios.delete(`${API_URL}/todos/${id}`);

        dispatch({ type: DELETE_TODO , payload: res.data });
    } catch (error) {
        console.log('Error while calling dtd API ', error.message);
    }
}

export const toggleTab = (tab) => async (dispatch) => {
    dispatch({ type: TOGGLE_TAB, selected: tab })
}

