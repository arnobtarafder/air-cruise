import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import { Rating } from '@mui/material';



const AddReview = () => {
	// react hook form
	const { register, formState: { errors }, handleSubmit, reset } = useForm();


	//    rating handel
	const [value, setValue] = useState(5);

	// console.log(value, "aa" );

	// submit handel
	const onSubmit = data => {
		const review = {
			qoute: data.qoute,
			name: data.name,
			img: data.img,
			from: data.from,
			value: value
		}
		console.log(review);
		const url = "https://air-cruise.herokuapp.com/reviews"
		fetch(url, {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(review)
		})
			.then(res => res.json())
			.then(data => {
				if (data.insertedId) {
					Swal.fire({
						icon: 'success',
						title: 'Successful added',
					})
				}
				reset();
				console.log(data)
			})
		console.log(data, review);



	}


	return (
		<div className='flex justify-center mt-20'>
			<div className="card w-96 bg-base-100 shadow-xl">
				<div className="card-body">
					<form onSubmit={handleSubmit(onSubmit)} >
						<input
							type="text"
							placeholder='type your name'
							className=" mt-2 w-full text-base px-4 py-2 border border-primary focus:outline-none rounded-2xl focus:border-indigo-500"
							{...register("name", {
								required: {
									value: true,
									message: "Name required"
								},

							})}
						/>
						<input
							type="text"
							placeholder='type location'
							className=" mt-2 w-full text-base px-4 py-2 border border-primary focus:outline-none rounded-2xl focus:border-indigo-500"
							{...register("from", {
								required: {
									value: true,
									message: "Name required"
								},

							})}
						/>
						<input
							type="text"
							placeholder='pste your imagelink'
							className=" mt-2 w-full text-base px-4 py-2 border border-primary focus:outline-none rounded-2xl focus:border-indigo-500"
							{...register("img", {
								required: {
									value: true,
									message: "image link required"
								},

							})}
						/>
						<textarea {...register("qoute")} placeholder='descirbe your review' className='mt-2 w-full text-base px-4 py-2 border border-primary focus:outline-none rounded-2xl focus:border-indigo-500' id="" cols="4" rows="4"></textarea>
						{/* rating add */}
						<Rating
							name="simple-controlled"
							value={value}
							onChange={(event, newValue) => {
								setValue(newValue);
							}}
						/>

						<div className="card-actions justify-end">
							<input className="btn bg-primary font-semibold  shadow-lg cursor-pointer transition ease-in duration-500" type="submit" />

						</div>
					</form>

				</div>
			</div>
		</div>
	);
};


export default AddReview;
