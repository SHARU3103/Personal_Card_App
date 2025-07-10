// src/Card.js
import React from 'react';

function Card(props) {
  return (
    <div style={styles.card}>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>{props.bio}</p>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ccc',
    padding: '16px',
    borderRadius: '8px',
    margin: '10px',
    maxWidth: '300px',
    backgroundColor: '#f9f9f9'
  }
};

export default Card;
