module.exports = {
	apps: [
		{
			name: "hack-fake-app-staging",
			script: "node_modules/next/dist/bin/next", // Location of the Next.js binary
			args: "start", // Command to run your application in production
			env: {
				NODE_ENV: "staging",
			},
			time: true, // Adds a timestamp to the log statements
		},
	],
};
