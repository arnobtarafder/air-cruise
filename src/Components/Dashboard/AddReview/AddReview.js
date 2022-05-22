import React from "react";

const AddReview = () => {
  return (
    <div className="px-10 py-10 bg-base-300 h-screen rounded-md">
      <div className="bg-base-100 pl-8 pb-44 py-8 rounded-xl">
        <label className="label">
          <span className="label-text">Your Name</span>
        </label>
        <input
          type="text"
          placeholder="Your Name"
          class="input input-bordered w-full max-w-sm"
        />
        <label className="label">
          <span className="label-text">Company’s name, Designation</span>
        </label>
        <input
          type="text"
          placeholder="Company’s name, Designation"
          class="input input-bordered w-full max-w-sm"
        />
        <label className="label">
          <span className="label-text">Description</span>
        </label>
        <textarea
          class="textarea textarea-bordered w-full pb-12 max-w-sm"
          placeholder="Description"
        ></textarea>
      </div>
      <button className="btn btn-primary mt-6 px-16 text-white">Submit</button>
    </div>
  );
};

export default AddReview;