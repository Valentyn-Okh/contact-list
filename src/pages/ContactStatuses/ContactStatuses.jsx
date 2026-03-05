import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import { deleteStatus } from "../../redux/actions";
import ConfirmModal from "../../components/ConfirmModal/ConfirmModal";

export default function ContactStatuses() {
  const contacts = useSelector((state) => state.contacts);
  const statuses = useSelector((state) => state.contactStatuses);
  const dispatch = useDispatch();

  const [modalVisible, setModalVisible] = useState(false);
  const [statusToDelete, setStatusToDelete] = useState(null);

  const handleDeleteClick = (status) => {
    setStatusToDelete(status);
    setModalVisible(true);
  };

  const handleConfirmDelete = () => {
    dispatch(deleteStatus(statusToDelete));
    setModalVisible(false);
    setStatusToDelete(null);
  };

  const getContactCount = (status) =>
    contacts.filter((contact) => contact.status === status).length;

  return (
    <main className="shadow bg-white container rounded mt-4">
      <div className="row">
        <div className="col-12">
          <Link
            to={"/contact-statues/add-contact-status"}
            className="btn btn-success m-2 btn-lg"
          >
            ADD STATUS
          </Link>

          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th className="text-center" scope="col">
                  Status name
                </th>
                <th className="text-center" scope="col">
                  Color
                </th>
                <th className="text-center" scope="col">
                  Contact count
                </th>
                <th className="text-center" scope="col">
                  Edit/Del
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(statuses).map((status, index) => (
                <tr key={index}>
                  <td className="fs-5 align-middle text-center">{++index}</td>
                  <td className="fs-5 align-middle text-center">{status}</td>
                  <td
                    style={{ backgroundColor: statuses[status].bg }}
                    className="fs-6 align-middle text-center"
                  >
                    {statuses[status].bg}
                  </td>
                  <td className="fs-5 align-middle text-center">
                    {getContactCount(status)}
                  </td>
                  <td className="fs-5 align-middle text-center">
                    <Link to={`/contact-statuses/edit-contact/${status}`}>
                      <button className="btn btn-primary mx-1">Edit</button>
                    </Link>
                    <button
                      className="btn btn-danger mx-1"
                      onClick={() => handleDeleteClick(status)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Кастомний alert */}
      <ConfirmModal
        show={modalVisible}
        onClose={() => setModalVisible(false)}
        onConfirm={handleConfirmDelete}
        message={`Delete status "${statusToDelete}"?`}
      />
    </main>
  );
}