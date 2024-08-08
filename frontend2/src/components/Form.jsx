/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Form = ({ onSubmit, inputs }) => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col">
      {inputs.map((input, index) => (
        input.type === 'submit' ? (
          <button
            key={index}
            type="submit"
            className="py-2 px-4 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
          >
            {input.submitText}
          </button>
        ) : (
          <input
            key={index}
            type={input.type}
            placeholder={input.placeholder}
            value={input.value}
            onChange={input.onChange}
            required
            className="mb-4 p-2 border border-gray-300 rounded"
          />
        )
      ))}
    </form>
  );
};

export default Form;
