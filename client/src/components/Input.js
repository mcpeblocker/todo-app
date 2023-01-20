import React, { useState } from 'react';
import axios from 'axios';

function Input() {
  const [input, setInput] = useState('');

  const submitData = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/posts', { input });
    setInput('');
  };

  return (
    <form className="flex">
      <input
        placeholder="Type something..."
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 outline-none rounded-md border border-collapse border-black p-2 max-w-full"
      />
      <button
        className="px-7 py-3 bg-red-500 rounded-md"
        type="reset"
        onClick={() => setInput('')}
      >
        Clear
      </button>
      <button
        onClick={submitData}
        className="px-7 py-3 bg-green-500 rounded-md"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}

export default Input;
