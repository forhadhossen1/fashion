import useCart from "../../Hooks/useCart";
import { Table } from "flowbite-react";

const AddedProduct = () => {
    const [cart] = useCart();
    const totalOfferPrice = cart.reduce((total, product) => {
        return total + product.offerPrice;
    }, 0);
    console.log("Total offerPrice:", totalOfferPrice);
    return (
        <div className="">
            <div className=" gap-5 ">
                <h3 className="text-3xl font-bold">Total Product : {cart.length}</h3>

                <h3 className="text-3xl font-bold">Total Price : {totalOfferPrice}</h3>
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
                                    <Table.Cell>product image</Table.Cell>
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {product.title}
                                    </Table.Cell>
                                    <Table.Cell>{product.size}</Table.Cell>
                                    <Table.Cell>{product.quantity}</Table.Cell>
                                    <Table.Cell>{product.quantity * product.offerPrice}</Table.Cell>
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