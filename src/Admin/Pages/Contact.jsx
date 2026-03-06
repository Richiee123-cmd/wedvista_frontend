import AdminSidebar from "../Components/AdminSidebar";

const messages = [
  { user: "Akhil", message: "Payment issue" },
  { user: "Sneha", message: "Vendor not responding" },
];

function Contacts() {
  return (
    <div className="admin-layout">
      <AdminSidebar />

      <main className="admin-content">
        <h1>Contact Requests</h1>

        {messages.map((m, i) => (
          <div className="contact-card" key={i}>
            <strong>{m.user}</strong>
            <p>{m.message}</p>
          </div>
        ))}
      </main>
    </div>
  );
}

export default Contacts;
