import Card from "./Card"
import BrandImg from "../assets/icon-brand-recognition.svg"
import DetailedImg from "../assets/icon-detailed-records.svg"
import CustomImg from "../assets/icon-fully-customizable.svg"

const Statistic = () => {
	return (
		<section className="statistics">
			<div className="container">
				<div className="statistics__title">
					<h2>Advanced Statistics</h2>
					<p>
						Track how your links are performing across the web with our advanced
						statistics dashboard
					</p>
				</div>

				<div className="statistics__cards">
					<Card
						image={BrandImg}
						title="Brand Recognition"
						description="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content"
						alt="Brand Recognition Image"
					/>
					<Card
						image={DetailedImg}
						title="Detailed Records"
						description="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decision"
						alt="Detailed Records Image"
					/>
					<Card
						image={CustomImg}
						title="Fully Customizable"
						description="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement"
						alt="Fully Customizable Image"
					/>
				</div>
			</div>
		</section>
	)
}

export default Statistic
