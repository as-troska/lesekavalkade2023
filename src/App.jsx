import React from "react";
import WordCloud from "react-d3-cloud";
import 'chart.js/auto';
import LocomotiveScroll from "locomotive-scroll";
import { booksPerYear } from "./data";
import { booksPerGender } from "./data";
import { booksPerLanguage } from "./data";
import { booksPerMonth } from "./data";
import { pagesPerMonth } from "./data";
import { totalBooks } from "./data";
import { totalPages } from "./data";
import { booksPerFormat } from "./data";
import { physicalOrDigital } from "./data";
import { publishers } from "./data";
import { authors } from "./data";
import { Doughnut, Pie, Radar } from "react-chartjs-2";
import "./styles.css";

const scroll = new LocomotiveScroll();


export default () => (
  <>
    <h1>2023 i tal</h1>
    <div data-scroll>
		<WordCloud 
			data={publishers}	
		/>
	</div>

	<div data-scroll>
		<WordCloud 
			data={authors}	
		/>
	</div>
	

    <div data-scroll>
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
    </div>

	<div data-scroll className="flexContainer">
		<div className="flexItem" data-scroll data-scroll-speed="1">
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
		</div>

		<div className="flexItem" data-scroll data-scroll-speed="2">
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
		</div>

	<div data-scroll-container>
		<div data-scroll-section>
			<div data-scroll>
				<Radar
				data={booksPerMonth}
				options={{
					title: {
					display: true,
					text: "Bøker per månad",
					fontSize: 20,
					},
					legend: {
					display: true,
					position: "center",
					},
				}}
				/>
			</div>

			<div data-scroll>
				<Radar
				data={pagesPerMonth}
				options={{
					title: {
					display: true,
					text: "Sider per månad",
					fontSize: 20,
					},
					legend: {
					display: true,
					position: "center",
					},
				}}
				/>
			</div>

		</div>
	</div>




	</div>




    

  </>
);
