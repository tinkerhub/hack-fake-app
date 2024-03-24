import React from "react";

function ScrollButtons() {
	return (
		<div className="join fixed right-4 top-4 md:bottom-4 md:top-auto">
			<button className="btn bg-primary border-none hover:bg-accent text-background font-bold text-xl join-item">
				&uarr;
			</button>
			<button className="btn bg-primary border-none hover:bg-accent text-background font-bold text-xl join-item">
				&darr;
			</button>
		</div>
	);
}

export default ScrollButtons;
