import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

const SavedButton = styled.button`
background-color: lightseagreen;
border-radius: 10px;
border: 2px solid palevioletred;
color: palevioletred;
margin: 0 1em;
padding: 0.25em 1em;
`;

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
       <SavedButton><NavLink to={`/movies/${movie.id}`} key={movie.id}>
      <span className="saved-movie">{movie.title}</span>
      </NavLink></SavedButton>
    ))}
    <NavLink to = '/' >
    <div className="home-button">Home</div></NavLink>
  </div>
);

export default SavedList;

