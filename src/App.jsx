import React, { useEffect }  from "react";
import { Grid } from "react-visual-grid";
import WordCloud from "react-d3-cloud";
import 'chart.js/auto';
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
import { covers } from "./data";
import { genres } from "./data";
import { Doughnut, Pie, Radar } from "react-chartjs-2";
import "./styles.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();



const year = new Date().getFullYear() - 1;


const App = () => {
	
return (
  <>

	<CoverGrid />

    <div className="overskrift">Bokåret {year}</div>

	<div className="seksjon" >
		<p data-aos="fade-up">Bokåret {year} har vore eit fint år!</p>
	</div>

	<div className="seksjon">
		<p data-aos="fade-up">Dette året las eg <em>{totalBooks}</em> bøker... </p>
	</div>

	<div className="seksjon">
		<p data-aos="fade-in">... som til saman utgjorde <em>{totalPages}</em> sider. </p>
	</div>

	<div className="seksjon">

		<p data-aos="fade-up">Eg fekk lese ein rekke forfattarar kor <em>{authors.sort(function(a, b){return b.value - a.value})[0].text}</em> var den mest lesne</p>

	</div>

	<div className="cloudContainer">
		<WordCloud		
			className="wordCloud"	
			data={authors}
			font="monospace"						
		/>
	</div>

	
	<div className="seksjon">
		<p data-aos="fade-in">Kjønnsfordelinga var så som så. Av <em>{totalBooks}</em> var <em>{booksPerGender.datasets[0].data[0]}</em> skrivne av <em>menn</em></p>
	</div>	



	<div className="seksjon">
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


	

    <div>
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

	<div className="flexContainer">
		<div className="flexItem">

		</div>

		<div className="flexItem" >
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

	<div>
		<div>
			<div>
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

			<div>
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

	<div className="cloudContainer">
		<WordCloud 
			data={publishers}	
		/>
	</div>



	</div>




    

  </>
  )
};

export default App;

function CoverGrid() {
	return (
		<div className="coverGrid">
			{covers.map((cover, index) => (
				<div
					key={index}
					style={{
						backgroundImage: `url(${cover})`
					}}
					className="coverItem"
				/>
			))}
		</div>
	)
}





