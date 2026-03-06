import { useEffect, useState } from "react";
import AdminSidebar from "../Components/AdminSidebar";
import {
  getAllVendorsAPI,
  approveVendorAPI,
} from "../../Service/allAPIs";

function Vendors() {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch Vendors
  const fetchVendors = async () => {
    try {
      const res = await getAllVendorsAPI();
      setVendors(res.data);
    } catch (error) {
      alert("Failed to fetch vendors");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVendors();
  }, []);

  // Approve Vendor
  const approveVendor = async (id) => {
    if (!window.confirm("Approve this vendor?")) return;

    try {
      await approveVendorAPI(id);
      alert("Vendor approved ✅");
      fetchVendors();
    } catch (error) {
      alert("Approval failed");
    }
  };

  return (
    <div className="admin-layout">
      <AdminSidebar />

      <main className="admin-content">
        <h2 className="page-title">Vendor Approvals</h2>

        {loading ? (
          <p>Loading vendors...</p>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Service</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {vendors.length > 0 ? (
                vendors.map((vendor) => (
                  <tr key={vendor._id}>
                    <td>{vendor.name}</td>
                    <td>{vendor.email}</td>
                    <td>{vendor.serviceType}</td>

                    <td>
                      <span className={`status ${vendor.status}`}>
                        {vendor.status}
                      </span>
                    </td>

                    <td>
                      {vendor.status === "pending" ? (
                        <button
                          className="approve-btn"
                          onClick={() => approveVendor(vendor._id)}
                        >
                          Approve
                        </button>
                      ) : (
                        <span className="approved-text">
                          Approved ✔
                        </span>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" style={{ textAlign: "center" }}>
                    No vendors found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </main>
    </div>
  );
}

export default Vendors;
