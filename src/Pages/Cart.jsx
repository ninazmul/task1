import { FaPaste } from "react-icons/fa6";
import { AiFillLike } from "react-icons/ai";
import { AiOutlineComment } from "react-icons/ai";
import { GrAttachment } from "react-icons/gr";
import { MdOutlineDateRange } from "react-icons/md";

const Cart = ({ item }) => {
  const { clientName, desc } = item;
  return (
    <div className="card w-72 glass m-1 shadow-xl">
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title">{clientName}</h2>
          <h2 className="card-title">User Name</h2>
        </div>
        <div className="flex justify-between items-center">
          <p>{desc}</p>
          <div>
            <FaPaste />
          </div>
        </div>
        <div className="card-actions flex justify-around items-center">
          <button>
            <AiFillLike />
          </button>
          <button>
            <AiOutlineComment />
          </button>
          <button>
            <GrAttachment />
          </button>
          <button>
            <MdOutlineDateRange />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
