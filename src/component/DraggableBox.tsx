import { motion, useMotionValue, useTransform } from "framer-motion";

const DraggableBox = () => {
	const x = useMotionValue(0);
	const y = useMotionValue(0);

	const backgroundColor = useTransform(
		x,
		[-100, 100],
		["#ff0000", "#00ff00"]
	);

	return (
		<motion.div
			drag
			dragConstraints={{
				left: -200,
				right: 200,
				top: -100,
				bottom: 100,
			}}
			style={{ x, y, backgroundColor }}
			className="w-32 h-32 flex justify-center items-center rounded-lg shadow-lg cursor-pointer"
		>
			<span className="text-white">Drag ME!</span>
		</motion.div>
	);
};

export default DraggableBox;
