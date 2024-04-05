import { useFormik } from "formik";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const SignUp = () => {
    const axiosPublic = useAxiosPublic();
    const { createUser, updateUserProfile } = useAuth();
    const navigate = useNavigate();


    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },

        validationSchema: Yup.object({
            name: Yup.string().required(),
            email: Yup.string().email('Invalid email address').required(),
            password: Yup.string()
                .min(6, "Must be 6 characters")
                .matches(/(?=.*[A-Z])/, 'Must contain at least one uppercase letter')
                .matches(/(?=.*[!@#$%^&*])/, 'Must contain at least one special character')
                .required('')
        }),

        onSubmit: data => {
            // alert(JSON.stringify(values, null, 2));
            console.log(data)
            createUser(data.email, data.password)
                .then(result => {
                    const loggedUser = result.user;
                    console.log(loggedUser);
                    updateUserProfile(data.name, data?.photoUrl)

                        .then(() => {
                            const userInfo = {
                                name: data.name,
                                email: data.email,
                            }
                            // console.log('user profile info update')
                            axiosPublic.post('/users', userInfo)
                                .then(res => {
                                    if (res.data.insertedId) {
                                        // console.log('Users added to the data')
                                        formik.resetForm();

                                        Swal.fire({
                                            position: "center",
                                            icon: "success",
                                            title: "User create success",
                                            showConfirmButton: false,
                                            timer: 1000
                                        });
                                        navigate('/')
                                    }
                                })


                        })
                        .catch(error => console.log(error))
                })

        },
    });
    return (
        <div className="">
            <div className="flex justify-center items-center h-screen bg-white">
                <div className="md:w-1/2 lg:w-1/3">
                    <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
                        <h4 className="block text-3xl font-bold text-center tracking-normal antialiased relative text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                            Sign UP
                        </h4>
                        <p className="mt-1 block text-center text-base font-normal leading-relaxed text-gray-700 antialiased">
                            Provide Your Info.
                        </p>
                    </div>
                    <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 gap-4">
                        <div className="flex flex-col">
                            <label htmlFor="name">Name</label>
                            <input
                                className="rounded-md bg-gray-200 border-none"
                                id="name"
                                name="name"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.name}
                            />
                            {formik.touched.name && formik.errors.name ? (
                                <div className="text-red-500">{formik.errors.name}</div>
                            ) : null}
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="email">Email Address</label>
                            <input
                                className="rounded-md bg-gray-200 border-none"
                                id="email"
                                name="email"
                                type="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div className="text-red-500">{formik.errors.email}</div>
                            ) : null}
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="email">Password</label>
                            <input
                                className="rounded-md bg-gray-200 border-none"
                                id="password"
                                name="password"
                                type="password"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                            />
                            {formik.touched.password && formik.errors.password ? (
                                <div className="text-red-500">{formik.errors.password}</div>
                            ) : null}
                        </div>

                        <button type="submit" className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-2 rounded-md">Submit</button>


                    </form>
                    <div className="text-center py-2 ">OR</div>

                    <div className="bg-gray-200 p-2 flex justify-center rounded-lg">
                        <FcGoogle className="text-center text-3xl" />
                    </div>

                    <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                        Already have an account ? Please <Link to='/login'><a href="/login" className="text-blue-800">Login</a></Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;