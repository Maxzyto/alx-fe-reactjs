import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';
import '@testing-library/jest-dom/extend-expect';

describe('TodoList Component', () => {
  const demoTodos = [
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Learn TypeScript', completed: true },
  ];

  test('Initial Render Test', () => {
    render(<TodoList initialTodos={demoTodos} />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Learn TypeScript')).toBeInTheDocument();
  });

  test('Test Adding Todos', () => {
    render(<TodoList initialTodos={demoTodos} />);
    const input = screen.getByPlaceholderText('Add a new todo');
    const addButton = screen.getByText('Add');

    fireEvent.change(input, { target: { value: 'Learn Jest' } });
    fireEvent.click(addButton);

    expect(screen.getByText('Learn Jest')).toBeInTheDocument();
  });

  test('Test Toggling Todos', () => {
    render(<TodoList initialTodos={demoTodos} />);
    const todoItem = screen.getByText('Learn React');
    fireEvent.click(todoItem);

    expect(todoItem).toHaveClass('completed');
  });

  test('Test Deleting Todos', () => {
    render(<TodoList initialTodos={demoTodos} />);
    const deleteButton = screen.getByText('Delete', { selector: 'button' });

    fireEvent.click(deleteButton);

    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });
});