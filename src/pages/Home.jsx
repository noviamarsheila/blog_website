import React from "react";
import useFetch from "../Custom Hooks/useFetch";
import BlogList from "../components/BlogList";

const Home = () => {
	const { data, isPending, error } = useFetch("http://localhost:5000/blogData");

	return (
		<div className="home">
			<h3>Blogs yang tersedia saat ini: </h3>
			{error && <div>{error}</div>}
			{isPending && <div>Loading...</div>}
			<BlogList blogs={data} />
		</div>
	);
};

export default Home;
