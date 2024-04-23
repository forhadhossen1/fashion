import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import { FaList } from "react-icons/fa";

const imgae_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const imgae_hosting_api = `https://api.imgbb.com/1/upload?key=${imgae_hosting_key}`

const AddProduct = () => {
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        console.log(data)
        //image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(imgae_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            // now send the menu item data to the server with the image url 
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.details,
                image: res.data.data.display_url
            }

            const menuRes = await axiosSecure.post('/menu', menuItem);
            console.log(menuRes.data);
            if (menuRes.data.insertedId) {
                reset();
                Swal.fire({
                    title: "Success",
                    text: `${data.name} is added to the menu.`,
                    icon: "success"
                });
            }

        }
        console.log('with img url', res.data)
    };

    const { register, handleSubmit, reset } = useForm();
    return (
        <div className="bg-slate-200  p-10 rounded-xl">
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-bold">Title*</span>
                        </label>
                        <input {...register("title", { required: true })}
                            type="text" placeholder="Product title" className="input input-bordered w-full " />

                    </div>


                    <div className="felx-col md:flex gap-6">
                        {/* category */}
                        <div className="form-control w-full md:w-1/2 ">
                            <label className="label">
                                <span className="label-text font-bold">Category*</span>
                            </label>
                            <select defaultValue='default' {...register('category', { required: true })}
                                className="select select-bordered w-full ">
                                <option disabled value='default'>Select a category</option>
                                <option value='salad'>Best-sale</option>
                                <option value='trend-fashion'>Trend-fashion</option>
                                <option value='new'>New</option>
                            </select>
                        </div>

                        {/* price */}
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Price*</span>
                            </label>
                            <input {...register("price", { required: true })}
                                type="text" placeholder="Recipe price" className="input input-bordered w-full " />
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Recipe Details*</span>
                        </label>
                        <textarea {...register("details")}
                            className="textarea textarea-bordered h-24" placeholder="Recie Details"></textarea>
                    </div>
                    <div>
                        <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered file-input-warning w-full max-w-xs" />
                    </div>

                    {/* <input  className="btn btn-block" type="submit" /> */}
                    <button className="btn btn-block bg-gradient-to-r from-orange-400 to-red-600" >Add Product <FaList /> </button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;