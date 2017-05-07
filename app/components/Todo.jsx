import React from 'react';

export class Todo extends React.Component {
    render() {
        let {text} = this.props;
        let {id} = this.props;
        return (
            <div>
               <div> {id}. {text}</div>
            </div>
        )
            
    }
}