import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
	const [formData, setFormData] = useState({
		title: "",
		description: "",
		author: "",
	});
	const [isPending, setIsPending] = useState(false);
	const navigate = useNavigate();

	const { title, description, author } = formData;

	const handleChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const blog = { title, description, author };

		setIsPending(true);

		fetch("http://localhost:5000/blogData", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(blog),
		}).then(() => {
			console.log("data berhasil ditambahkan");
			setIsPending(false);
			navigate("/");
		});
	};

	return (
		<div className="add-content">
			<h3>Tambahkan blog anda.</h3>
			<form action="" onSubmit={handleSubmit}>
				<input type="text" name="title" value={title} onChange={handleChange} placeholder="Title of Blog" autoComplete="off" />
				<textarea name="description" value={description} onChange={handleChange} placeholder="Description..." autoComplete="off" id="" cols="30" rows="10"></textarea>
				<input type="text" name="author" value={author} onChange={handleChange} placeholder="Author Name" autoComplete="off" />
				{!isPending && (
					<button type="submit" className="btn btn-add">
						Add Blog
					</button>
				)}
				{isPending && (
					<button type="submit" disabled className="btn btn-add">
						Adding Blog...
					</button>
				)}
			</form>
		</div>
	);
};

export default Add;
