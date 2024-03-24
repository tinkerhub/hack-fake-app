/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.lu.ma",
			},
			{
				protocol: "https",
				hostname: "ik.imagekit.io",
			},
		],
	},
};

module.exports = nextConfig;
