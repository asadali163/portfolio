import { useSelector } from "react-redux";
import { closeModal } from "../../Redux/modal/modalSlice";
import { useDispatch } from "react-redux";

const Modal = () => {
  const dispatch = useDispatch();
  const { desc, title } = useSelector((state) => state.modal);
  return (
    <aside
      className="fixed top-0 left-0 w-full h-full z-10 flex items-center justify-center"
      style={{ backdropFilter: "blur(10px)", background: "rgba(0,0,0,0.7)" }}
    >
      <div className="bg-white w-9/12 max-w-2xl rounded px-8 py-4">
        <div className="flex justify-between mb-4">
          <h2 className="text-2xl font-semibold capitalize text-mn-primary">
            {title}
          </h2>
          <button
            className="text-2xl font-semibold"
            onClick={() => dispatch(closeModal())}
          >
            &times;
          </button>
        </div>
        <p className="text-gray-900">{desc}</p>
      </div>
    </aside>
  );
};

//   .modal {
//     background: var(--clr-white);
//     width: 80vw;
//     max-width: 400px;
//     border-radius: var(--radius);
//     padding: 2rem 1rem;
//     text-align: center;
//   }
export default Modal;
