import React from "react";
// import { Link } from "wouter";
import {
  CategoryTitle,
  CategoryListItem,
  CategoryLink,
  CategoryList,
} from "./styles";
// import "./Category.css";

interface Props {
  name: string,
  options: string[]
}

export default function Category({ name, options = [] }:Props) {
  return (
    <section>
      <CategoryTitle>{name}</CategoryTitle>
      <CategoryList>
        {options.map((singleOption, index) => (
          <CategoryListItem
            key={singleOption}
          >
            <CategoryLink to={`/search/${singleOption}`}>
              {singleOption}
            </CategoryLink>
          </CategoryListItem>
        ))}
      </CategoryList>
    </section>
  );
}