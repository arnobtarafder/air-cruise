import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-hot-toast';
import auth from "../../../../firebase.init";

const MyProfile = () => {
    const [dbUser, setDbUser] = useState({});
    const [user] = useAuthState(auth);
    const { email, education, phone, city, linkedin } = dbUser;

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                if (data?.insertedId) {
                    toast.success('Successfully added your review!')
                }
                setDbUser(data);
                // console.log(dbUser);
            });
    }, [dbUser, user?.email])

    const onSubmit = async e => {
        e.preventDefault();

        const newName = (e.target.name.value || dbUser?.name) || 'sorry';
        const education = (e.target.education.value || dbUser?.education) || 'sorry';
        const city = (e.target.city.value || dbUser?.city) || 'sorry';
        const phone = (e.target.phone.value || dbUser?.phone) || '';
        const linkedin = (e.target.linkedin.value || dbUser?.linkedin) || '';

        const profile = { name: newName, email: user?.email, education, phone, city, linkedin };

        fetch(`http://localhost:5000/users/${dbUser?.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.modifiedCount) {
                    toast.success('Successfully updated profile!')
                }
                e.target.reset();
            })
    };

    return (
        <div className='mt-16'>
            <section className='z-50 relative mx-auto md:mt-12 grid lg:grid-cols-2 grid-cols-1 lg:px-10 px-5 my-10 gap-10'>
                <div className='flex lg:mt-0 mt-96 justify-content-center items-center'>
                    <div className="card w-96 shadow-xl mx-auto">
                        <div className='card-body shadow-lg p-8 rounded-xl border-2'>
                            <h1 className="card-title text-3xl text-neutral font-bold">Your Profile</h1>
                            <h1 className="text-2xl text-primary font-bold py-2">{dbUser?.name ? dbUser?.name : user?.displayName}</h1>
                            <p>Email : <span className="font-bold">{user?.email}</span></p>
                            <p>Education : <span className="font-bold">{education ? education : 'Not set'}</span></p>
                            <p>Address : <span className="font-bold">{city ? city : 'Not set'}</span></p>
                            <p>Phone : <span className="font-bold">{phone ? phone : 'Not set'}</span></p>
                            <p>Linkedin : <span className="font-bold">{linkedin ? linkedin : 'Not set'}</span></p>
                        </div>
                    </div>
                </div>

                <div className='card flex-shrink-0 max-w-lg shadow-2xl p-5 mx-auto'>
                    <form onSubmit={onSubmit} className='mx-auto'>
                        <h1 className="text-3xl font-bold pb-3 text-primary">Update Profile</h1>
                        <label htmlFor="name" className='mx-1 text-sm'>Name</label>
                        <input type="text" name="name" className='w-full p-2 my-1 rounded-lg border outline-purple-200' placeholder='Your Name' id="" />

                        <label htmlFor="education" className='mx-1 text-sm'>Education</label>
                        <input type="text" name="education" className='w-full p-2 my-1 rounded-lg border outline-purple-200' placeholder='Your Education' id="" />

                        <label htmlFor="phone" className='mx-1 text-sm'>Phone</label>
                        <input type="number" name="phone" className='w-full p-2 my-1 rounded-lg border outline-purple-200' placeholder='Your Phone' id="" />

                        <label htmlFor="city" className='mx-1 text-sm'>City</label>
                        <input type="text" name="city" className='w-full p-2 my-1 rounded-lg border outline-purple-200' placeholder='Your City' id="" />

                        <label htmlFor="linkedin" className='mx-1 text-sm'>Linkedin</label>
                        <input type="text" name="linkedin" className='w-full p-2 my-1 rounded-lg border outline-purple-200' placeholder='Your Linkedin' id="" />

                        <input type="submit" className="btn w-full mt-3 btn-primary" value="Update Profile" />
                    </form>
                </div>
            </section>
        </div>
    );
};

export default MyProfile;
























// import React from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useForm } from 'react-hook-form';
// import { useQuery } from 'react-query';
// import Loading from '../../../General/Loading/Loading';
// import auth from '../../../../firebase.init';
// import "./MyProfile.css";

// const MyProfile = () => {

//     const [user] = useAuthState(auth)

//     // hook form  handel
//     const { register, formState: { errors }, handleSubmit, reset } = useForm();

//     // ?handel submit 
//     const onSubmit = data => {
//         const profile = {
//             email: data.email,
//             names: data.names,
//             img: data.img,
//             skillo: data.skillo,
//             skillt: data.skillt,
//             skill: data.skill,
//             skillf: data.skillf,
//             skillv: data.skillv,
//             bio: data.bio,
//             phone: data.phone,
//             location: data.location,
//             social: data.social

//         }
//         console.log(data)
//         const url = "https://air-cruise.herokuapp.com/profile"
//         fetch(url, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(profile),
//         })
//             .then(res => res.json())
//             .then(data => console.log(data))
//     }

//     // https://thawing-beach-36415.herokuapp.com/orders?email=${email}`

//     const { data: profiles, isLoading } = useQuery('repoData', () =>
//         fetch(`https://air-cruise.herokuapp.com/profile?email=${user?.email}`, {
//             method: "GET",
//             headers: {
//                 'authorization': `Bearer ${localStorage.getItem("accessToken")}`
//             }
//         }).then(res => res.json()))




//     if (isLoading) {
//         return <Loading></Loading>
//     }



//     return (
//         <>
//             <div className='flex justify-center'>
//                 <div className="cardprofile-container text-white">
//                     <span className="pro">ACTIVE</span>

//                     {profiles?.img ? <img className='round' src={profiles?.img} alt="pic" /> : <img className="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />}

//                     {profiles?.names ? <h3 className='text-gray-500'>  {profiles?.names} </h3> :
//                         <h3 className='text-gray-500'> {user?.displayName}  </h3>}

//                     <h6 className='text-gray-500'> {user?.email} </h6>

//                     {profiles?.bio && <p className='mt-3' alt={profiles?.bio} > Education : {profiles?.bio?.slice(0, 30) + ".."} </p>}

//                     {profiles?.location && <p className='mt-3 text-white' alt={profiles?.location} > Location : {profiles?.location?.slice(0, 30) + ".."} </p>}

//                     {profiles?.phone && <p className='mt-3' alt={profiles?.phone} > number : {profiles?.phone?.slice(0, 11)} </p>}

//                     <div className="buttons mt-3">

//                         {/* <button  className="primary ghost">
//                                 Following
//                             </button> */}
//                         <a href={profiles?.social} target='blank' className='primary ghost'> Linkedin  </a>

//                     </div>
//                     <div className="skills">
//                         <h6>Skills</h6>
//                         <ul className='text-white'>
//                             {/* <li>UI / UX</li> */}
//                             <li> {profiles?.bio} </li>
//                             <li>{profiles?.skillo} </li>
//                             <li> {profiles?.skillt} </li>
//                             <li>{profiles?.skill} </li>
//                             <li>{profiles?.skillf} </li>
//                             <li> {profiles?.skillv} </li>
//                         </ul>
//                     </div>
//                 </div>
//                 <div className="card w-96 bg-base-100 shadow-xl">
//                     <div className="card-body">
//                         <h2 className="card-title">Card title!</h2>

//                         <form onSubmit={handleSubmit(onSubmit)} >
//                             <input
//                                 type="text"
//                                 readOnly
//                                 value={user?.email}
//                                 placeholder='type your name'
//                                 className=" mt-2 w-full text-base px-4 py-2 border border-[#E81938] focus:outline-none rounded-2xl focus:border-indigo-500"
//                                 {...register("email", {

//                                 })}
//                             />
//                             <input
//                                 type="text"
//                                 placeholder='type your name'
//                                 className=" mt-2 w-full text-base px-4 py-2 border border-[#E81938] focus:outline-none rounded-2xl focus:border-indigo-500"
//                                 {...register("names", {
                                

//                                 })}
//                             />
//                             <input
//                                 type="text"
//                                 placeholder='pste your imagelink'
//                                 className=" mt-2 w-full text-base px-4 py-2 border border-[#E81938] focus:outline-none rounded-2xl focus:border-indigo-500"
//                                 {...register("img", {
                            

//                                 })}
//                             />
//                             <input
//                                 type="text"
//                                 placeholder='type skill 1'
//                                 className=" mt-2 w-full text-base px-4 py-2 border border-[#E81938] focus:outline-none rounded-2xl focus:border-indigo-500"
//                                 {...register("skillo", {
                            

//                                 })}
//                             />
//                             <input
//                                 type="text"
//                                 placeholder='type skill 2'
//                                 className=" mt-2 w-full text-base px-4 py-2 border border-[#E81938] focus:outline-none rounded-2xl focus:border-indigo-500"
//                                 {...register("skillt", {
                                

//                                 })}
//                             />
//                             <input
//                                 type="text"
//                                 placeholder='type skill 3'
//                                 className=" mt-2 w-full text-base px-4 py-2 border border-[#E81938] focus:outline-none rounded-2xl focus:border-indigo-500"
//                                 {...register("skill", {
                            

//                                 })}
//                             />
//                             <input
//                                 type="text"
//                                 placeholder='type skill 4'
//                                 className=" mt-2 w-full text-base px-4 py-2 border border-[#E81938] focus:outline-none rounded-2xl focus:border-indigo-500"
//                                 {...register("skillf", {
                                   

//                                 })}
//                             />
//                             <input
//                                 type="text"
//                                 placeholder='type skill 5'
//                                 className=" mt-2 w-full text-base px-4 py-2 border border-[#E81938] focus:outline-none rounded-2xl focus:border-indigo-500"
//                                 {...register("skillv", {
                                   

//                                 })}
//                             />
//                             <input
//                                 type="phone"
//                                 placeholder='type phone number'
//                                 className=" mt-2 w-full text-base px-4 py-2 border border-[#E81938] focus:outline-none rounded-2xl focus:border-indigo-500"
//                                 {...register("phone", {
                                  

//                                 })}
//                             />
//                             <input
//                                 type="text"
//                                 placeholder='type location '
//                                 className=" mt-2 w-full text-base px-4 py-2 border border-[#E81938] focus:outline-none rounded-2xl focus:border-indigo-500"
//                                 {...register("location", {
                                   

//                                 })}
//                             />
//                             <input
//                                 type="text"
//                                 placeholder='place your linkedin link'
//                                 className=" mt-2 w-full text-base px-4 py-2 border border-[#E81938] focus:outline-none rounded-2xl focus:border-indigo-500"
//                                 {...register("social", {
                                   

//                                 })}
//                             />
//                             <input
//                                 type="text"
//                                 placeholder='type your Educational Institute name'
//                                 className=" mt-2 w-full text-base px-4 py-2 border border-[#E81938] focus:outline-none rounded-2xl focus:border-indigo-500"
//                                 {...register("bio", {
                                   

//                                 })}
//                             />
//                             {/* <textarea {...register("bio")} placeholder='descirbe your review' className='mt-2 w-full text-base px-4 py-2 border border-[#E81938] focus:outline-none rounded-2xl focus:border-indigo-500' id="" cols="4" rows="4"></textarea> */}
//                             {/* rating add */}

//                             <div className="card-actions justify-end">
//                                 <input className="btn bg-gradient-to-r from-[#FC5A34] to-[#BB1D34]  hover:bg-gradient-to-l hover:from-[#FC5A34] hover:to-[#E81938]  text-gray-100  font-semibold  shadow-lg cursor-pointer transition ease-in duration-500" type="submit" />

//                             </div>
//                         </form>

//                     </div>
//                 </div>
//             </div>

//         </>
//     );


// };

// export default MyProfile;