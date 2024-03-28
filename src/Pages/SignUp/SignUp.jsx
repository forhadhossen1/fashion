import { useFormik } from "formik";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";


const SignUp = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
            console.log(values)
        },
    });
    return (
        <div>
            <div className="md:w-1/2">
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
                            className="rounded-md"
                            id="name"
                            name="name"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="email">Email Address</label>
                        <input
                            className="rounded-md"
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="email">Password</label>
                        <input
                            className="rounded-md"
                            id="password"
                            name="password"
                            type="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
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
    );
};

export default SignUp;