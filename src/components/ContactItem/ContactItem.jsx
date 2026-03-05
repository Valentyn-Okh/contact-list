import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteContact } from "../../redux/actions";

export default function ContactItem() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);

  const searchContacts = contacts;

  if (!contacts.length) {
    return <h3 className="text-center mt-3">No contacts found</h3>;
  }

  return (
    <table className="table table-striped table-hover align-middle">
      <thead className="table-dark">
        <tr>
          <th></th>
          <th className="text-center">Name</th>
          <th className="text-center">Email / Phone</th>
          <th className="text-center">Status</th>
          <th className="text-center">Actions</th>
        </tr>
      </thead>

      <tbody>
        {searchContacts.map((contact) => (
          <tr key={contact.id}>
            <td className="text-center">
              <img
                className="rounded-circle"
                width="50"
                height="50"
                src={`https://randomuser.me/api/portraits/${contact.gender}/${contact.avatar}.jpg`}
                alt="avatar"
              />
            </td>

            <td className="text-center">
              <div className="fw-bold">{contact.firstName}</div>
              <div>{contact.lastName}</div>
            </td>

            <td className="text-center">
              <div>{contact.email}</div>
              <div>{contact.phone}</div>
            </td>

            <td className="text-center">
              <span className="badge bg-success">
                {contact.status.toUpperCase()}
              </span>
            </td>

            <td className="text-center">
              <Link to={`/update-contact/${contact.id}`}>
                <button className="btn btn-sm btn-primary me-2">
                  Edit
                </button>
              </Link>

              <button
                className="btn btn-sm btn-danger"
                onClick={() => dispatch(deleteContact(contact.id))}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}