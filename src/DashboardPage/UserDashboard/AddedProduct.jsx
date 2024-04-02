import useCart from "../../Hooks/useCart";

const AddedProduct = () => {
    const [cart] = useCart();
    return (
        <div>
            <div>
                Total Product : {cart.length}
            </div>
        </div>
    );
};

export default AddedProduct;