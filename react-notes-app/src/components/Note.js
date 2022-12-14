//? Note ini reusable component (mirip sticky notes bentuknya)
import { MdDeleteForever } from "react-icons/md";

const Note = () => {
  return (
    <div className="note">
      <span>Hello! This is our first note</span>
      <div className="note-footer">
        <small>14/12/22</small>
        <MdDeleteForever className="delete-icon" size="1.3em" />
      </div>
    </div>
  );
};

export default Note;
