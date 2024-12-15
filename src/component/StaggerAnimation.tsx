import { motion } from "framer-motion";

const StaggerAnimation = () => {
	const parentVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { staggerChildren: 0.8 } },
	};
	const childVariant = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<motion.div
			variants={parentVariants}
			initial="hidden"
			animate="visible"
			className="flex space-x-2"
		>
			{[...Array(5)].map((_, index) => (
				<motion.div
					key={index}
					variants={childVariant}
					className="box mt-3"
				/>
			))}
		</motion.div>
	);
};

export default StaggerAnimation;
