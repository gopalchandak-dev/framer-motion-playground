import { motion } from "framer-motion";
import { useState } from "react";

const galleryImages = [
	"https://imgs.search.brave.com/EwKQLWmFm-kR6gt55Z2gPsdKnKOuDwHdefQRivpU0PM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcy/Mjk0ODI4L3Bob3Rv/L2tpdGUuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPUZhdE0y/ZHJ1SDZUTzlwMm1l/NFZaVWd6TS1CV09n/Z2VpcTBaZm9FOU1n/Ums9",
	"https://imgs.search.brave.com/8Up5JIXu7J9oE3-yCWy-04GYe1tBxEbKpLrCNWirbeU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTAx/NjA3MDU2NC9waG90/by95b3VuZy1ib3kt/bGVhcm5pbmctdG8t/Zmx5LWtpdGUuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWNi/WVpJMXhIMHY4cUUw/VGlHSnc4b2ZOLTB5/RzBLR2FZQXdxcFo2/b3VNQ0U9",
	"https://imgs.search.brave.com/NRTcz6AHLjU_nK2jGVHCHdrFRIa55p1Qf4FwO0dx4co/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODk5/NzQ4MDQ2L3Bob3Rv/L29yYW5ndXRhbnMu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PUM5N1hjV1pvR1ZX/R2Z6Q2FaQ2RxM2VT/dUdZTml3THE2MnNp/OS1wcWNGcGs9",
	"https://imgs.search.brave.com/wLY8a6xCPNJPc6LyBK98Ns0LFGv2XyBJvm0kI_XiUFE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjc1/NjIwNzk2L3Bob3Rv/L2N1dGUtbWluaWF0/dXJlLXBpbnNjaGVy/LWRvZy5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9NndCZmtz/WlJjNzZDaHNTbll1/RG9YdnZydlM3eUww/dFR6elVoU3U0S01R/WT0",
	"https://imgs.search.brave.com/C98vZ8nvi7oKOyOPv5i2pPAIcwbYn_v2vqYcX3VJgTQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODY1/NzE5LTAwMS9waG90/by95b3VuZy1lbGVw/aGFudC1zZWFscy1h/bnRhcmN0aWNhLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1Q/SlE4Mjh5UG1NekJr/SS0xbnRaSVhLZ2Ey/QVFpRlRSaXRnM2R1/TlBrVXM0PQ",
	"https://imgs.search.brave.com/EwKQLWmFm-kR6gt55Z2gPsdKnKOuDwHdefQRivpU0PM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcy/Mjk0ODI4L3Bob3Rv/L2tpdGUuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPUZhdE0y/ZHJ1SDZUTzlwMm1l/NFZaVWd6TS1CV09n/Z2VpcTBaZm9FOU1n/Ums9",
	"https://imgs.search.brave.com/8Up5JIXu7J9oE3-yCWy-04GYe1tBxEbKpLrCNWirbeU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTAx/NjA3MDU2NC9waG90/by95b3VuZy1ib3kt/bGVhcm5pbmctdG8t/Zmx5LWtpdGUuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWNi/WVpJMXhIMHY4cUUw/VGlHSnc4b2ZOLTB5/RzBLR2FZQXdxcFo2/b3VNQ0U9",
	"https://imgs.search.brave.com/NRTcz6AHLjU_nK2jGVHCHdrFRIa55p1Qf4FwO0dx4co/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODk5/NzQ4MDQ2L3Bob3Rv/L29yYW5ndXRhbnMu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PUM5N1hjV1pvR1ZX/R2Z6Q2FaQ2RxM2VT/dUdZTml3THE2MnNp/OS1wcWNGcGs9",
	"https://imgs.search.brave.com/wLY8a6xCPNJPc6LyBK98Ns0LFGv2XyBJvm0kI_XiUFE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjc1/NjIwNzk2L3Bob3Rv/L2N1dGUtbWluaWF0/dXJlLXBpbnNjaGVy/LWRvZy5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9NndCZmtz/WlJjNzZDaHNTbll1/RG9YdnZydlM3eUww/dFR6elVoU3U0S01R/WT0",
	"https://imgs.search.brave.com/C98vZ8nvi7oKOyOPv5i2pPAIcwbYn_v2vqYcX3VJgTQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODY1/NzE5LTAwMS9waG90/by95b3VuZy1lbGVw/aGFudC1zZWFscy1h/bnRhcmN0aWNhLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1Q/SlE4Mjh5UG1NekJr/SS0xbnRaSVhLZ2Ey/QVFpRlRSaXRnM2R1/TlBrVXM0PQ",
];

const parentVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.5,
			staggerDirection: 1,
		},
	},
};
const childVarient = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0 },
};

const AnimatedGallery = () => {
	const [showImage, setShowImage] = useState(false);
	return (
		<div>
			<button
				className="px-4 py-2 bg-teal-500 hover:bg-teal-600 rounded-lg text-black font-semibold"
				onClick={() => setShowImage(!showImage)}
			>
				{showImage ? "Hide Image" : "Show Image"}
			</button>
			<motion.div
				variants={parentVariants}
				initial="hidden"
				animate={showImage ? "visible" : "hidden"}
				className=" grid grid-cols-5 space-x-5"
			>
				{galleryImages.map((image, index) => (
					<motion.img
						key={index}
						src={image}
						variants={childVarient}
						className="ml-3 w-[300px] rounded space-x-2"
					/>
				))}
			</motion.div>
		</div>
	);
};

export default AnimatedGallery;
