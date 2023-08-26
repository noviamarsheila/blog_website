import React from "react";
import useFetch from "../Custom Hooks/useFetch";
import { useParams, useNavigate } from "react-router-dom";

const BlogDetail = () => {
	const { id } = useParams();
	const { data, isPending, error } = useFetch(`http://localhost:5000/blogData/${id}`);
	const navigate = useNavigate();

	const handleDelete = () => {
		fetch(`http://localhost:5000/blogData/${data.id}`, {
			method: "DELETE",
		}).then(() => {
			navigate("/");
		});
	};

	return (
		<>
			<div className="blog-detail">
				{isPending && <div>Loading...</div>}
				{error && <div>{error}</div>}
				{data && (
					<article>
						<h2>{data.title}</h2>
						<p>{data.description}</p>
						<h4>Author: {data.author}</h4>
						<button className="btn btn-delete" onClick={handleDelete}>
							Delete Blog
						</button>
					</article>
				)}
			</div>
		</>
	);
};

export default BlogDetail;
