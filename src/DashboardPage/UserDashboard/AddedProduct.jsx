import { HiTrash } from "react-icons/hi";
import useCart from "../../Hooks/useCart";
import { Button, Table } from "flowbite-react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const AddedProduct = () => {
    const [cart, refetch] = useCart();
    const axiosSecure = useAxiosSecure();
    const totalOfferPrice = cart.reduce((total, product) => {
        return total + (product.quantity * product.offerPrice);
    }, 0);
    // console.log("Total offerPrice:", totalOfferPrice);

    const handleDeltete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/cart/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your cart has been deleted.",
                                icon: "success"
                            });

                            refetch();
                        }
                    })
            }
        });
    }





    return (
        <div className="">
            <div className="flex justify-between ">
                <div>
                    <h3 className="text-3xl font-bold">Total Product : {cart.length}</h3>

                    <h3 className="text-3xl font-bold">Total Price : ${totalOfferPrice} </h3>
                </div>
                <div>
                    {cart.length ?
                        <Link to=''>
                            <Button gradientMonochrome="info" className="px-8">Pay</Button>
                        </Link>
                        :
                        <Button gradientMonochrome="info" className="px-8" disabled>Pay</Button>
                    }
                </div>
            </div>

            <div className="w-full mt-12 ">
                <div className="overflow-x-auto">
                    <Table hoverable>
                        <Table.Head>
                            <Table.HeadCell>Product Image</Table.HeadCell>
                            <Table.HeadCell>Product name</Table.HeadCell>
                            <Table.HeadCell>Size</Table.HeadCell>
                            <Table.HeadCell>Quantity</Table.HeadCell>
                            <Table.HeadCell>Price</Table.HeadCell>

                        </Table.Head>
                        <Table.Body className="divide-y">
                            {
                                cart.map(product => <Table.Row key={product._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell>
                                        <div className="">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={product.image} alt="product Image" />
                                            </div>
                                        </div>
                                    </Table.Cell>
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {product.title}
                                    </Table.Cell>
                                    <Table.Cell>{product.size}</Table.Cell>
                                    <Table.Cell>{product.quantity}</Table.Cell>
                                    <Table.Cell>${product.quantity * product.offerPrice}</Table.Cell>

                                    <Table.Cell>
                                        <button onClick={() => handleDeltete(product._id)}><HiTrash className="text-red-700 text-xl bg-gray-300 rounded-sm" /></button>
                                    </Table.Cell>
                                </Table.Row>)
                            }
                        </Table.Body>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default AddedProduct;