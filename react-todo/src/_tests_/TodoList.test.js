import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders TodoList component', () => {
    render(<TodoList />);
    const todoListElement = screen.getByTestId('todo-list');
    expect(todoListElement).toBeInTheDocument();
  });

  test('adds a new todo item', () => {
    render(<TodoList />);
    const inputElement = screen.getByPlaceholderText('Add a new task');
    const addButton = screen.getByText('Add');

    fireEvent.change(inputElement, { target: { value: 'New Task' } });
    fireEvent.click(addButton);

    const newTodoItem = screen.getByText('New Task');
    expect(newTodoItem).toBeInTheDocument();
  });

  test('completes a todo item', () => {
    render(<TodoList />);
    const inputElement = screen.getByPlaceholderText('Add a new task');
    const addButton = screen.getByText('Add');

    fireEvent.change(inputElement, { target: { value: 'New Task' } });
    fireEvent.click(addButton);

    const completeButton = screen.getByText('Complete');
    fireEvent.click(completeButton);

    const completedTodoItem = screen.getByText('New Task');
    expect(completedTodoItem).toHaveClass('completed');
  });

  test('deletes a todo item', () => {
    render(<TodoList />);
    const inputElement = screen.getByPlaceholderText('Add a new task');
    const addButton = screen.getByText('Add');

    fireEvent.change(inputElement, { target: { value: 'New Task' } });
    fireEvent.click(addButton);

    const deleteButton = screen.getByText('Delete');
    fireEvent.click(deleteButton);

    const deletedTodoItem = screen.queryByText('New Task');
    expect(deletedTodoItem).not.toBeInTheDocument();
  });
});