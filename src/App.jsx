import React, { useEffect }  from "react";
//import { Grid } from "react-visual-grid";
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
import { averageRating } from "./data";
import { booksSortedByRating } from "./data";
import { booksPerCountry } from "./data";
import { Doughnut, Pie, Radar, Bar } from "react-chartjs-2";
import "./styles.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();



const year = new Date().getFullYear() - 1;
const genderRatio = booksPerGender.datasets[0].data[0] / totalBooks
const nynorskRatio = booksPerLanguage.datasets[0].data[0] / totalBooks


const App = () => {
	
return (
  <>
    {console.log(genderRatio)}

	<CoverGrid />

    <div className="overskrift">Bokåret 2024</div>

	<div className="seksjon" >
		<p data-aos="fade-up" data-aos-duration="1000">2024 var eit fint leseår!</p>
	</div>

	<div className="seksjon">
		<p data-aos="fade-up" data-aos-duration="1000">I løpet av året las eg <em>{totalBooks}</em> bøker ... </p>
	</div>

	<div className="seksjon">
		<p data-aos="fade-in" data-aos-duration="1000">... som til saman utgjorde <em>{totalPages}</em> sider. Dette er 12 fleire bøker, og heile 5415 fleire sider enn i 2023! </p>
	</div>

	<div className="seksjon">

		<p data-aos="zoom-in" data-aos-duration="1000">Eg fekk lese ei rekke forfattarar, kor <em>{authors.sort(function(a, b){return b.value - a.value})[0].text}</em> var den mest lesne, tett følgd av <em>{authors.sort(function(a, b){return b.value - a.value})[1].text}</em> og <em>{authors.sort(function(a, b){return b.value - a.value})[2].text}</em></p>

	</div>

	<div className="seksjon">
		<div className="cloudContainer" data-aos="zoom-in" data-aos-duration="3000">
			<WordCloud
				data={authors}
				font="monospace"			
			/>
		</div>
	</div>

	
	<div className="seksjon-split">
		
		<div className="seksjon-left">
			<p data-aos="fade-in" data-aos-duration="1500">Kjønnsfordelinga var så som så. Av <em>{totalBooks}</em> bøker, var <em>{booksPerGender.datasets[0].data[0]}</em> skrivne av <em>menn</em> ...</p>
		</div>
		
		<div className="seksjon-right" data-aos="zoom-in" data-aos-duration="3000">
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
	</div>	



	<div className="seksjon-split">
		<div className="seksjon-left" data-aos="zoom-in" data-aos-duration="3000">
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

		<div className="seksjon-right" data-aos="fade-right" data-aos-duration="1000">
			<p>... og av 43 bøker på norsk, var <em>{booksPerLanguage.datasets[0].data[2]}</em> av dei skrivne på <em>nynorsk. Det gjev ein nynorsk-ratio på <em>0.39</em>, som er hakket dårlegare enn i fjor...</em></p>
		</div>
	</div>

	<div className="seksjon-split">

			<div className="seksjon-left" data-aos="fade-left" data-aos-duration="1000">
				<p>Eg las bøker utgjevne i <em>{booksPerYear.labels.length}</em> ulike år. Flest var gjevne ut i 2023 - med <em>7</em> bøker lese frå dette året. Bøker frå etter år 2000 dominerer lista mi totalt, med over 75% av bøkene gjevne ut i dette tidsrommet.</p>
			</div>

			<div className="seksjon-right" data-aos="zoom-in" data-aos-duration="2000">
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
	</div>

	<div className="seksjon-split" data-aos="fade-right" data-aos-duration="1000">
		<div className="seksjon-left">
			<p>Flest bøker kom, kan hende ikkje overraskande, frå Noreg, men {booksPerCountry.labels.length -1} andre land var òg representert.</p>
		</div>
		<div>
			<Bar
				data={booksPerCountry}
				options={{
					scales: {
						x: {
							grid: {
								display: false
							}
						},
						y: {
							grid: {
								display: false
							}
						}
					},
					plugins: {
						legend: {
							display: false
						}
					},
					elements: {
						bar: {
							borderRadius: 2 
						}
					}
				}}
			/>

		</div>
				
	</div>

	<div className="seksjon" data-aos="zoom-in" data-aos-duration="1500">
		<p>Eg las bøker i mange ulike format: ebøker, lydbøker, pocket og innbundne. Flest var digitale i år igjen. Nytt av året er at 20 av bøkene var lydbøker. Det er ei stor auking frå tidligare år. </p>

	</div>

	<div className="seksjon-split" data-aos="fade-right" data-aos-duration="1000">
			<div className="seksjon-left">
				<Pie 
					data={booksPerFormat}
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

			<div className="seksjon-right" data-aos="fade-left" data-aos-duration="1000">
				<Pie 
					data={physicalOrDigital}
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
	</div>


	<div className="seksjon">
			<div className="seksjon-left" data-aos="zoom-in" data-aos-duration="1000">
				<p>Antall bøker per månad fordelte seg relativt jamnt utover året, med unntak i mai og oktober. Ser ein på antall sider per månad, vart det lese desidert mest tidlig vår. </p>
			</div>

	</div>



	<div className="seksjon-split">
			<div className="seksjon-left" data-aos="fade-right" data-aos-duration="1000">
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
						scale: {			
							
							max: 7,
							min: 0,
							stepSize: 1						
						}
					}}
					/>
			</div>

			<div className="seksjon-right" data-aos="fade-left" data-aos-duration="1000">
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
						scale: {
							min: 0,
							max: 2400,
							stepSize: 300
						}
					}}
					/>
			</div>
	</div>

	<div className="seksjon-split">


			<div className="seksjon-left" data-aos="fade-right" data-aos-duration="1000">
				<p>Av <em>{totalBooks}</em> bøker var 35 romanar. Ein liten prosentmessig nedgang frå tidligare år. Sakprosa er framleis ein forsvinnande liten del av lesinga mi.</p>
			</div>

			<div className="seksjon-right" data-aos="zoom-in" data-aos-duration="1000">
				<Pie 
					data={genres}	
				/>
			</div>

	
	</div>

	<div className="seksjon" >
		<p data-aos="fade-up" data-aos-duration="1000">Gjennomsnittleg rating for bøkene eg las dette året var <em>{averageRating}</em> av 5. </p>
	</div>

	<div className="seksjon-split">
			<div className="seksjon-left" data-aos="fade-right" data-aos-duration="1000">
				<p>Bøker med fem av fem stjerner i 2024: <br />
					- <em>{booksSortedByRating[0].title}</em><br /> 
					- <em>{booksSortedByRating[1].title}</em><br />
					- <em>{booksSortedByRating[2].title}</em><br />
					- <em>{booksSortedByRating[3].title}</em><br />
					- <em>{booksSortedByRating[4].title}</em><br />
					- <em>{booksSortedByRating[5].title}</em><br />
					- <em>{booksSortedByRating[6].title}</em><br />
					- <em>{booksSortedByRating[7].title}</em><br />
				</p>
			</div>

			<div className="bookView" data-aos="zoom-in" data-aos-duration="1000">
				<BookCard 
					book={booksSortedByRating[0]}
				/>

				<BookCard 
					book={booksSortedByRating[1]}
				/>

				<BookCard
					book={booksSortedByRating[2]}
				/>

				<BookCard
					book={booksSortedByRating[3]}
				/>

				<BookCard
					book={booksSortedByRating[4]}
				/>

				<BookCard
					book={booksSortedByRating[5]}
				/>

				<BookCard
					book={booksSortedByRating[6]}
				/>

				<BookCard
					book={booksSortedByRating[7]}
				/>

			</div>

	</div>

	<div className="seksjon" data-aos="fade-in" data-aos-duration="1000">
		<p>Takk for at du har sett årskavalkaden min! Om du vil lage din eigen, <a href="https://github.com/as-troska/lesekavalkade2023">finn du koden her</a>. Meir om meg og bøkene finn du på <a href="https://www.goodreads.com/user/show/10008902-trond-skauge">Goodreads</a>. God nyttår!</p>
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

function BookCard({ book }) {
	return (
		<div className="bookCard" style={{ backgroundImage: `url(${book.cover})` }}>			
			{/* <div className="bookInfo">
				<div className="bookTitle">{book.title}</div>
				<div className="bookAuthor">{book.author}</div>
			</div> */}
		</div>
	)
}








