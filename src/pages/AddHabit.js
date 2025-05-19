import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
import './AddHabit.css';

const AddHabit = () => {
  const [habitName, setHabitName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();
  const token = localStorage.getItem('authToken');

  try {
    await axios.post(
      'http://localhost:5000/api/habits',
      { name: habitName },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    navigate('/dashboard');
  } catch (error) {
    console.error('Error adding habit:', error.response?.data?.message || error.message);
  }
};



  return (
    <>
      <Navbar />
      <div className="add-habit-container">
        <h2>Add New Habit</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={habitName}
            onChange={(e) => setHabitName(e.target.value)}
            placeholder="Enter habit name"
            required
          />
          <button type="submit" className="btn btn-success">Add Habit</button>
        </form>
      </div>
    </>
  );
};

export default AddHabit;
