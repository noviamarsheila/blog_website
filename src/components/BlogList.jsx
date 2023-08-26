import React from "react";
import { Link } from "react-router-dom";

const BlogList = ({ blogs }) => {
	return (
		<>
			{blogs.map((blog) => (
				<div className="blog-list" key={blog.id}>
					<Link to={`blogData/${blog.id}`}>
						<h4>{blog.title}</h4>
						<p>Author: {blog.author}</p>
					</Link>
				</div>
			))}
		</>
	);
};

export default BlogList;
