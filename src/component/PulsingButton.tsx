import { motion } from "framer-motion";

function PulsingButton() {
	return (
		<motion.button
			className="px-4 py-2 bg-blue-500 rounded outline-none"
			animate={{
				scale: [1, 1.2, 1],
				backgroundColor: ["#3b82f6", "#60a5fa", "#3b82f6"],
			}}
			transition={{ duration: 0.8, ease: "easeInOut", repeat: Infinity }}
		>
			Click ME
		</motion.button>
	);
}

export default PulsingButton;
