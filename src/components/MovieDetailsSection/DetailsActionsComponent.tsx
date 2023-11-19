import { MdFavorite } from "react-icons/md";
import { FaStar } from "react-icons/fa";

export const DetailsActionsComponent = () => {
  return (
    <div className="flex items-center justify-between flex-wrap mx-auto gap-6 text-white mt-12">
      <button className="details-action-button">
        <FaStar size={26} />
      </button>
      <button className="details-action-button">
        <MdFavorite size={26} />
      </button>
    </div>
  );
};