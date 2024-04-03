import useCart from "../../Hooks/useCart";

const AddedProduct = () => {
    const [cart] = useCart();
    const totalOfferPrice = cart.reduce((total, product) => {
        return total + product.offerPrice;
    }, 0)
    console.log("Total offerPrice:", totalOfferPrice);
    return (
        <div>
            <div className="flex gap-5 ">
                <h3 className="text-3xl font-bold">Total Product : {cart.length}</h3>

                <h3 className="text-3xl font-bold">Total Price : {totalOfferPrice}</h3>
            </div>
            <div>

            </div>
        </div>
    );
};

export default AddedProduct;