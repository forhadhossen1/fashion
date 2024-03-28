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
            <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 gap-4">
                <div className="flex flex-col">
                    <label htmlFor="name">Name</label>
                    <input
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
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                </div>

                <button type="submit">Submit</button>


            </form>
            <div className="text-center py-2 ">OR</div>

            <div className="bg-gray-200 p-2 flex justify-center rounded-lg">
                <FcGoogle className="text-center text-3xl" />
            </div>

            <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                You have no account ? Please <Link to='/signUp'><a href="/signUp" className="text-blue-800">Login</a></Link>
            </p>
        </div>
    );
};

export default SignUp;