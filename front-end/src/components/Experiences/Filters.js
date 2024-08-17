import Wishlist from "./Wishlist";

const Filters = () => {
    return (
        <div className="flex justify-start space-x-4 px-4 pt-3">
            <h3 className="border-2 border-cyan-300 p-2 rounded-lg">Museums</h3>
            <h3 className="border-2 border-rose-300 p-2 rounded-lg">Concerts</h3>
            <h3 className="border-2 border-orange-300 p-2 rounded-lg">Tours</h3>
        </div>
    );
}
export default Filters;