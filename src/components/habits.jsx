import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

export default class Habits extends Component {


    handleIncrement = (habit) => {
        this.props.onIncrement(habit);
    };
    handleDecrease = (habit) => {
        this.props.onDecrease(habit);
    };
  
    handleDelete = (habit) => {
        this.props.onDelete(habit);
    };

    handleAdd = (name) => {
        this.props.onAdd(name);
    };

  render() {
    return (
        <>
        <HabitAddForm onAdd={this.handleAdd}></HabitAddForm>
        <ul>
            {this.props.habits.map(habit => (
                <Habit 
                    key={habit.id} 
                    habit={habit} 
                    onIncrement={this.handleIncrement}
                    onDecrease={this.handleDecrease}
                    onDelete={this.handleDelete}
                >
                </Habit>
            ))}
        </ul>
        <button className="habits-reset" onClick={this.props.onReset}>Reset All</button>
        </>

    );
  }
}
