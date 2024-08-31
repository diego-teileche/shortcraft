interface CardProps {
	image: string
	alt: string
	title: string
	description: string
	className?: string
}

const Card: React.FC<CardProps> = ({
	image,
	alt,
	title,
	description,
	className,
}) => {
	return (
		<div className={`statistic__card | ${className}`}>
			<div className="img">
				<img src={image} alt={alt} />
			</div>

			<h3>{title}</h3>
			<p>{description}</p>
		</div>
	)
}

export default Card
