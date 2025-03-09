import React from 'react';
import { render, screen, fireEvent, describe, test, expect } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  const initialTodos = [
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Learn Testing', completed: false },
  ];

  test('renders correctly with initial state', () => {
    render(<TodoList initialTodos={initialTodos} />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Learn Testing')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList initialTodos={initialTodos} />);
    fireEvent.change(screen.getByPlaceholderText('Add new todo'), { target: { value: 'New Todo' } });
    fireEvent.click(screen.getByText('Add Todo'));
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  test('toggles a todo item', () => {
    render(<TodoList initialTodos={initialTodos} />);
    const todoItem = screen.getByText('Learn React');
    fireEvent.click(todoItem);
    expect(todoItem).toHaveClass('completed');
    fireEvent.click(todoItem);
    expect(todoItem).not.toHaveClass('completed');
  });

  test('deletes a todo item', () => {
    render(<TodoList initialTodos={initialTodos} />);
    const deleteButton = screen.getByText('Delete').closest('button');
    fireEvent.click(deleteButton);
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });
});