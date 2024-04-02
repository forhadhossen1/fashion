import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import Swal from 'sweetalert2';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import useCart from '../Hooks/useCart';

const ProductCard = ({ product }) => {
    const { image, offerPercentage, price, offerPrice, title, _id } = product || {};
    const { user } = useAuth();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();

    // State variables for size and quantity
    const [size, setSize] = useState('');
    const [quantity, setQuantity] = useState(1);

    const handleSizeChange = event => {
        setSize(event.target.value);
    };

    const handleQuantityChange = event => {
        setQuantity(parseInt(event.target.value));
    };

    const handleAddtoCart = () => {
        if (user && user.email) {
            // Ensure both size and quantity are selected
            if (!size || !quantity) {
                Swal.fire({
                    title: 'Please select size and quantity',
                    icon: 'error',
                    timer: 2000,
                    showConfirmButton: false
                });
                return;
            }

            const productItem = {
                productId: _id,
                email: user.email,
                title,
                image,
                offerPrice,
                size,
                quantity
            };

            axiosSecure.post('/cart', productItem)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: `${title} Added to the cart `,
                            showConfirmButton: false,
                            timer: 1000
                        });
                        // Refetch cart to update the cart product
                        refetch();
                    }
                });
        } else {
            Swal.fire({
                title: 'You are not Logged In',
                text: 'Please login add to the cart!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Login'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login');
                }
            });
        }
    };

    return (
        <div>
            <section className="mx-auto w-fit p-3">
                <div className="w-72 md:w-80 lg:w-96 h-fit group">
                    <div className="relative overflow-hidden">
                        <img className="h-96 w-full object-cover" src={image} alt="product image" />
                        <div className="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <button
                                onClick={handleAddtoCart} // Call handleAddtoCart directly
                                className="bg-black text-white py-2 px-5">Add to cart
                            </button>
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
            {/* Form for selecting size and quantity */}
            <form className="px-3 mx-auto w-fit flex gap-3">
                <div className="form-control ">
                    <label className="label">
                        <span className="label-text">Size</span>
                    </label>
                    <select
                        name="size"
                        className="input input-bordered w-full"
                        value={size}
                        onChange={handleSizeChange}
                    >
                        <option value="">Select Size</option>
                        <option value="xl">XL</option>
                        <option value="xxl">XXL</option>
                        <option value="xxxl">XXXL</option>
                        <option value="4xl">4XL</option>
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Quantity</span>
                    </label>
                    <select
                        name="quantity"
                        className="input input-bordered w-full"
                        value={quantity}
                        onChange={handleQuantityChange}
                    >
                        {[1, 2, 3, 4].map(num => (
                            <option key={num} value={num}>{num}</option>
                        ))}
                    </select>
                </div>
            </form>
        </div>
    );
};

export default ProductCard;
