import { motion } from "framer-motion";

const AnimatedShape = () => {
	const boxVariant = {
		initial: { scale: 1, rotate: 0, skew: 0 },
		hover: { scale: 1.2, rotate: 15, skew: "10deg" },
		transition: { duration: 0.3 },
		click: { scale: 0.9, rotate: -15, transition: { duration: 0.3 } },
	};
	return (
		<div className="flex justify-center items-center h-full">
			<motion.div
				variants={boxVariant}
				initial="initial"
				whileHover="hover"
				whileTap="click"
				className="w-40 h-40 bg-teal-500 rounded-lg"
			/>
		</div>
	);
};

export default AnimatedShape;
