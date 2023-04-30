import { FaEdit, FaWindowClose } from 'react-icons/fa';
import React from 'react';
import PropTypes from 'prop-types';

import './Tarefas.css';

export default function Tarefas({ tarefas, handleEdit, handleDelete }) {
  return (
    <ul className="tarefas">
      {tarefas.map((tarefa, index) => (
        <li key={index}>
          {tarefa}
          <div className="">
            <FaEdit onClick={(e) => handleEdit(e, index)} />
            <FaWindowClose onClick={(e) => handleDelete(e, index)} />
          </div>
        </li>
      ))}
    </ul>
  );
}

Tarefas.propTypes = {
  tarefas: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
