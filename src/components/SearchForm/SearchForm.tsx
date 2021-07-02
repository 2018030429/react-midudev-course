import React, { useState } from "react";

interface Props {
  onSubmit: ({ keyword }:{ keyword:string }) => void
}

const SearchForm = ({ onSubmit }:Props) => {
  const [ keyword, setKeyword ] = useState('');

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ keyword });
  }

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  } 

  return(
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Search a gif here..."
        value={keyword} onChange={handleChange} />
      <button>Search!!</button>
    </form>
  );
}

export default React.memo(SearchForm);
