import React from 'react';
import { TodoList } from 'TodoList';

export class TodoApp extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {
                    id:1,
                    text: 'Walk the dog'
                },
                {
                    id:2,
                    text: 'clean the yard'
                },
                {
                    id:3,
                    text: 'Make many'
                },
                {
                    id:4,
                    text: 'Come clean'
                }
            ]
        }
    }
    render() {
        let { todos } = this.state;
        return (
            <div>
                <TodoList todos={todos}/>
            </div>
        )
    }
} 
