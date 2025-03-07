import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const FacultyDropdown = ({ department, members, onEdit, onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="border-2 border-purple-500 mb-4 rounded-md">
      <div
        className="flex justify-between items-center p-4 bg-white cursor-pointer hover:bg-purple-400"
        onClick={toggleDropdown}
      >
        <h2 className="text-xl font-bold text-black">{department}</h2>
        <span className="text-purple-600 hover:text-black">
          {isOpen ? "▲" : "▼"}
        </span>
      </div>
      {isOpen && (
        <div className="p-4 bg-gray-100">
          <div className="flex flex-wrap justify-center">
            {members.map((member) => (
              <div key={member.id} className="max-w-xs w-full sm:w-1/3 p-2">
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  {member.image && (
                    <img
                      src={`https://res.cloudinary.com/dzr3drmyk/image/upload/f_auto,q_auto/v1/${member.image}`}
                      alt={member.name}
                      className="w-full h-48 object-cover"
                      
                    />
                  )}
                  <div className="p-4">
                    <h3 className="text-lg font-bold">{member.name}</h3>
                    <p className="text-gray-600">{member.title}</p>
                    <p className="text-gray-600">{member.qualification}</p>
                    <div className="flex justify-between mt-4">
                      <button
                        onClick={() => onEdit(member)}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        <FaEdit size={20} />
                      </button>
                      <button
                        onClick={() => onDelete(member.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <FaTrash size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FacultyDropdown;
