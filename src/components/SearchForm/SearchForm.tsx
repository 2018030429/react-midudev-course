import React from "react";
import { useLocation } from "wouter";
import { useForm } from "./hook";

interface Props {
  initialKeyword?:string,
  initialRating?:string
}

const Ratings = ['g','pg','pg-13','r'];

const SearchForm = ({ initialKeyword='', initialRating='g' }:Props) => {
  const [ _, pushLocation ] = useLocation();

  const { 
    keyword, 
    rating, 
    times, 
    updateKeyword, 
    updateRating 
  } = useForm({ initialKeyword, initialRating });

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    updateKeyword(e.target.value);
  }
  
  const handleChangeRating = (e:React.ChangeEvent<HTMLSelectElement>) => {
    updateRating(e.target.value);
  }

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    pushLocation(`/search/${ keyword }/${rating}`)
  }

  return(
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Search a gif here..."
        value={keyword} onChange={handleChange} />
      <select onChange={handleChangeRating} value={rating}>
        <option disabled>Rating type</option>
        { Ratings.map(rt => <option key={rt} value={rt}>{rt}</option>) }
      </select>
      <small>{times}</small>
      <button>Search!!</button>
    </form>
  );
}

export default React.memo(SearchForm);
