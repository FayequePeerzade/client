import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const [habits, setHabits] = useState([]);

  // Fetch habits from backend
  useEffect(() => {
    const fetchHabits = async () => {
      try {
        const userId = localStorage.getItem('userId');
        const res = await axios.get(`http://localhost:5000/api/habits?userId=${userId}`);
        setHabits(res.data);
      } catch (err) {
        console.error('Failed to fetch habits:', err);
      }
    };

    fetchHabits();
  }, []);

  // Increase streak
  const increaseStreak = (id) => {
    setHabits((prev) =>
      prev.map((habit) =>
        habit.id === id ? { ...habit, streak: habit.streak + 1 } : habit
      )
    );

    // Optional: send streak update to backend
    axios.put(`http://localhost:5000/api/habits/${id}/increment-streak`);
  };

  // Delete habit
  const deleteHabit = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/habits/${id}`);
      setHabits((prev) => prev.filter((habit) => habit.id !== id));
    } catch (err) {
      console.error('Error deleting habit:', err);
    }
  };

  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h2>Your Habits</h2>
          <div>
            <button
              className="btn btn-primary me-2"
              onClick={() => navigate('/add-habit')}
            >
              Add Habit
            </button>
          </div>
        </div>

        <div className="habits-grid">
          {habits.map((habit) => (
            <div key={habit.id} className="habit-card">
              <h4>{habit.name}</h4>
              <p>Streak: {habit.streak} days</p>
              <button
                className="btn btn-success"
                onClick={() => increaseStreak(habit.id)}
              >
                ➕
              </button>
              <button
                className="btn btn-danger"
                onClick={() => deleteHabit(habit.id)}
              >
                🗑️
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
