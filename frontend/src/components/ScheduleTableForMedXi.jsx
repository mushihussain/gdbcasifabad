import { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ScheduleTableForMedXi = ({ apiEndpoint, title }) => {
  const [schedule, setSchedule] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSchedule();
  }, [apiEndpoint]);

  const fetchSchedule = async () => {
    setLoading(true);
    try {
      const response = await axios.get(apiEndpoint);
      if (response.data.length === 0) {
       
        setSchedule([]);
      } else {
        setSchedule(response.data);
      }
    } catch (error) {
      console.error('Error fetching schedule:', error);
      toast.error('Failed to fetch schedule.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8">
      <ToastContainer />
      <h1 className="text-2xl font-bold text-center mb-4">{title}</h1>
      {loading ? (
        <div className="text-center py-4">Loading...</div>
      ) : (
        schedule.length === 0 ? (
          // Display a message when no data is found
          <h1 className="text-2xl font-bold text-center mb-4 text-red-500">
            No schedule found.
          </h1>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 border border-gray-300">Time</th>
                  <th className="py-2 border border-gray-300">Monday</th>
                  <th className="py-2 border border-gray-300">Tuesday</th>
                  <th className="py-2 border border-gray-300">Wednesday</th>
                  <th className="py-2 border border-gray-300">Thursday</th>
                  <th className="py-2 border border-gray-300">Friday</th>
                  <th className="py-2 border border-gray-300">Saturday</th>
                  <th className="py-2 border border-gray-300">Sunday</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((slot, index) => (
                  <tr key={index}>
                    <td className="border px-4  border-gray-300">{slot.timeSlot}</td>
                    <td className="border px-4 py-2 border-gray-300">{slot.mon}</td>
                    <td className="border px-4 py-2 border-gray-300">{slot.tue}</td>
                    <td className="border px-4 py-2 border-gray-300">{slot.wed}</td>
                    <td className="border px-4 py-2 border-gray-300">{slot.thu}</td>
                    <td className="border px-4 py-2 border-gray-300">{slot.fri}</td>
                    <td className="border px-4 py-2 border-gray-300">{slot.sat}</td>
                    <td className="border px-4 py-2 border-gray-300">{slot.sun}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      )}
    </div>
  );
};

export default ScheduleTableForMedXi;