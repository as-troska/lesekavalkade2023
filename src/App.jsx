import React from "react";
import 'chart.js/auto';
import { booksPerYear } from "./data";
import { booksPerGender } from "./data";
import { booksPerLanguage } from "./data";
import { Doughnut, Pie } from "react-chartjs-2";




export default () => (
  <>
    <h1>2023 i tal</h1>
    

    <Doughnut
      data={booksPerYear}
      options={{
        title: {
          display: true,
          text: "Books per year",
          fontSize: 20,
        },
        legend: {
          display: true,
          position: "right",
        },
      }}    
    />

    <Pie
      data={booksPerGender}
      options={{
        title: {
          display: true,
          text: "Books per year",
          fontSize: 20,
        },
        legend: {
          display: true,
          position: "right",
        },
      }}
    />

    <Pie
      data={booksPerLanguage}
      options={{
        title: {
          display: true,
          text: "Books per year",
          fontSize: 20,
        },
        legend: {
          display: true,
          position: "right",
        },
      }}
    />

    

  </>
);
