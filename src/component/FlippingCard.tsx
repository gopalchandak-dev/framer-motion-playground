import { motion } from "framer-motion";
import { useState } from "react";

const cardVariants = {
	front: { rotateY: 0 },
	back: { rotateY: 180 },
};

const FlippingCard = () => {
	const [flipped, setFlipped] = useState(false); // State to track whether the card is flipped

	return (
		<motion.div
			onClick={() => setFlipped(!flipped)}
			className="perspective-1000"
		>
			<motion.div
				variants={cardVariants}
				initial="front"
				animate={flipped ? "back" : "front"}
				transition={{ duration: 0.6 }}
				className="card"
			>
				{/* Front Side of the Card */}
				<div className="card-face card-front">Front Side</div>
				{/* Back Side of the Card */}
				<div className="card-face card-back">Back Side</div>
			</motion.div>
		</motion.div>
	);
};

export default FlippingCard;
