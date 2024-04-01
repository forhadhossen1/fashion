import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const ProductCard = ({ product }) => {
    const { image, offerPercentage, price, offerPrice, title, _id } = product || {}
    const { user } = useAuth();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();

    const handleAddtoCart = colth => {
        if (user && user.email) {
            //  todo : sent cart product
            console.log(user.email, colth)
            const productItem = {
                productId: _id,
                email: user.email,
                title,
                image,
                offerPrice
            }

            axiosSecure.post('/cart', productItem)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: `${title} Added to the cart `,
                            showConfirmButton: false,
                            timer: 1000
                        });
                    }
                })

        } else {
            Swal.fire({
                title: "You are not Logged In",
                text: "Please login add to the cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                }
            });
        }
    }
    return (
        <div>
            <section className="mx-auto w-fit p-3">
                {/* <!-- Card --> */}
                <div className="w-72 md:w-80 lg:w-96 h-fit group">
                    <div className="relative overflow-hidden">
                        <img className="h-96 w-full object-cover" src={image} alt="product image" />



                        <div className="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <div className="flex flex-col gap-2">
                                <button
                                    onClick={() => handleAddtoCart(product)}
                                    className="bg-black text-white py-2 px-5">Add to cart</button>
                                <button className="bg-black text-white py-2 px-5">Add to Favourite</button>
                            </div>
                        </div>
                        <div className="absolute bg-white text-gray-900 top-1 right-1 p-2">{offerPercentage}% off</div>

                    </div>


                </div>
                <h2 className="mt-3 text-xl capitalize">{title}</h2>
                <div className="flex justify-between items-center">
                    <del className="text-red-700 text-lg">Price : ${price}</del>
                    <p className="text-xl mt-2 ml-1 inline-block">Price : ${offerPrice}</p>
                </div>
            </section>
        </div>
    );
};

export default ProductCard;