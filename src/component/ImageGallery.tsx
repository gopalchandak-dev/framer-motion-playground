import { motion } from "framer-motion";

const images = [
	{
		src: "https://imgs.search.brave.com/fbx7H_bC3VrS0V0ay4H4muQdMIDRuZVYVRNIxpl8-y8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzU5Lzc0Lzg2/LzM2MF9GXzU1OTc0/ODY4Nl9jRE51aEx4/TUpIcTRvWFFWS2FS/dmM3dzlmUW5RVjI1/US5qcGc",
		caption: "caption 1",
	},
	{
		src: "https://imgs.search.brave.com/-AkgvFCc8mNUz9rgGC6xKmz88QPW9rSE8Xf0zXtMaYY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS5zaHV0dGVyc3Rv/Y2suY29tL2ltYWdl/LXBob3RvL3Nsb3Ro/LWFuaW1hbC1jb3N0/YS1yaWNhLW9uLTQ1/MHctMjQ4NjM5Nzk5/NS5qcGc",
		caption: "caption 69",
	},
	{
		src: "https://imgs.search.brave.com/fbx7H_bC3VrS0V0ay4H4muQdMIDRuZVYVRNIxpl8-y8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzU5Lzc0Lzg2/LzM2MF9GXzU1OTc0/ODY4Nl9jRE51aEx4/TUpIcTRvWFFWS2FS/dmM3dzlmUW5RVjI1/US5qcGc",
		caption: "caption 2",
	},
	{
		src: "https://imgs.search.brave.com/NEFS-nHonIvno90811Jf3BnyJdtX0C8VytSEy5xn4Tc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMw/MTY2NzQ5OC9waG90/by9odW1wYmFjay13/aGFsZS1wbGF5ZnVs/bHktc3dpbW1pbmct/aW4tY2xlYXItYmx1/ZS1vY2Vhbi5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9MGNM/VXJxaTNwZ2R4djdp/UFJfVC1zMkMxVng3/dFV5UmhQRXRsMnNI/RUR3bz0",
		caption: "caption 3",
	},
];

const ImageGallery = () => {
	return (
		<div className="w-[80%] flex ">
			{images.map((image, index) => (
				<motion.div
					whileHover={{ scale: 1.05 }}
					key={index}
					className="relative m-1 overflow-hidden rounded-lg shadow-lg "
				>
					<img
						src={image.src}
						alt={image.caption}
						className="w-full h-auto"
					/>
					<motion.div
						whileHover={{ operator: 1 }}
						className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
					>
						<p>{image.caption}</p>
					</motion.div>
				</motion.div>
			))}
		</div>
	);
};

export default ImageGallery;
