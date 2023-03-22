import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Skills = () => {
	const initialState = [
		{ id: "1", title: "Java SE" },
		{ id: "2", title: "Java EE" },
	];
	const [skills, setSkills] = useState(initialState);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const saveData = (data) => {
		console.log("data: ", data);
		//No need to create Id (it should be created at the back-end), but here we don't have a back-end!
		const id = Math.floor(Math.random() * 1000000000 + 1).toString();
		const title = data.title;
		const newObject = { id, title };
		skills.push(newObject);
		console.log("Skills: ", skills);
	};

	return (
		<>
			<ul className="row pb-2">
				{skills.map((skill) => {
					return <li key={skill.id}>{skill.title}</li>;
				})}
			</ul>
			<br />
			<form onSubmit={handleSubmit(saveData)}>
				<div className="row">
					<div className="col">
						<input
							type="text"
							className="form-control"
							{...register("title", { required: true })}
							placeholder="Enter Title..."
						/>
						{errors.title && errors.title.type === "required" && (
							<span className="text-danger">Title is Required!</span>
						)}
					</div>
					<div className="col">
						<button type="submit" className="btn btn-success">
							+
						</button>
					</div>
				</div>
			</form>
		</>
	);
};

export default Skills;
