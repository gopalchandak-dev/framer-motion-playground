import { motion } from "framer-motion";
const AnimatedCard = () => {
	return (
		<motion.div
			initial={{ scale: 1, rotate: 0 }}
			whileHover={{ scale: 1.05, rotate: 3 }}
			whileTap={{ scale: 0.95 }}
			drag
			dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
			dragElastic={0.2}
			transition={{ type: "spring", stiffness: 300 }}
			className="max-w-sm mx-auto bg-white  rounded-lg shadow-sm overflow-hidden cursor-pointer"
		>
			<img
				src="https://imgs.search.brave.com/VuAnZCwNTWNkE6UQ_OHAe2mwduX1VorGbB-PIW68QG4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNS8x/MS8xNi8xNC80My9j/YXQtMTA0NTc4Ml82/NDAuanBn"
				alt="card"
				className="w-full h-48 object-cover"
			/>
			<div className="p-6">
				<h2 className="text-xl mb-2 font-bold font-mono text-black">
					Cat Cattish
				</h2>
				<p className="text-gray-900 font-semibold mb-4">
					This ia a simple card cat with framer motion animations and
					tailwind css.
				</p>
				<button className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition">
					Learn More
				</button>
			</div>
		</motion.div>
	);
};

export default AnimatedCard;
