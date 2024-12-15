import { motion } from "framer-motion";

const Drag = () => {
	return (
		<motion.div>
			While hover
			<motion.div
				className="box "
				whileHover={{ scale: 0.6, rotate: 30 }}
				transition={{ type: "spring", bounceStiffness: 300 }}
			/>
			whileTap
			<motion.div
				className="box"
				whileTap={{
					scale: 0.6,
					backgroundColor: "chocolate",
				}}
				transition={{
					duration: 0.8,
					type: "spring",
				}}
			/>
			drag
			<motion.div
				className="box"
				drag
				dragConstraints={{
					top: -200,
					left: -500,
					bottom: 200,
					right: 500,
				}}
			/>
		</motion.div>
	);
};

export default Drag;
