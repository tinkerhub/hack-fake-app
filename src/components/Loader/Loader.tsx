import React from "react";

import styles from "./Loader.module.css";

function Loader() {
	return (
		<div className="flex justify-center items-center h-screen">
			<div className={styles.loader}></div>
		</div>
	);
}

export default Loader;
