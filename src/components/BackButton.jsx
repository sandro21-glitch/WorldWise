import { useNavigate } from "react-router-dom";
function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        navigate(-1);
      }}
      className="border px-3 py-1 rounded-md uppercase"
    >
      &larr; Back
    </button>
  );
}

export default BackButton;
