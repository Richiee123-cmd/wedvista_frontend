import API from "./api";

// ================= AUTH =================

export const registerUserAPI = (data) =>
  API.post("/auth/register", data);

export const loginUserAPI = (data) =>
  API.post("/auth/login", data);

export const registerVendorAPI = (data) =>
  API.post("/vendor/register", data);

export const loginVendorAPI = (data) =>
  API.post("/vendor/login", data);

export const adminLoginAPI = (data) =>
  API.post("/admin/login", data);

// ================= SERVICES =================

export const addServiceAPI = (formData) =>
  API.post("/services", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const getServicesAPI = (type) =>
  API.get(`/services?type=${type}`);

export const deleteServiceAPI = (id) =>
  API.delete(`/services/${id}`);

// ================= BOOKINGS =================

export const createBookingAPI = (data) =>
  API.post("/bookings", data);

export const getUserBookingsAPI = () =>
  API.get("/bookings/user");

export const getVendorBookingsAPI = () =>
  API.get("/bookings/vendor");

export const updateBookingStatusAPI = (id, data) =>
  API.put(`/bookings/${id}`, data);

// ================= STRIPE =================

export const createCheckoutAPI = (bookingId) =>
  API.post(`/bookings/create-checkout/${bookingId}`);

// ================= VENDOR PROFILE =================

export const getVendorProfileAPI = () =>
  API.get("/vendor/profile");

export const updateVendorProfileAPI = (data) =>
  API.put("/vendor/profile", data);


export const getBudgetAPI = () => API.get("/budget"); 

export const saveBudgetAPI = (data) => API.post("/budget", data);

export const getAllVendorsAPI = () =>
  API.get("/vendor/all");

export const approveVendorAPI = (id) =>
  API.put(`/vendor/approve/${id}`);

// ================= SERVICES =================

export const getMyServicesAPI = () =>
  API.get("/services/my");


export const getAllUsersAPI = () =>
  API.get("/admin/users");


export const getDashboardStatsAPI = () => 
  API.get("/admin/dashboard-stats");

  export const confirmPaymentAPI = (id) =>
  API.get(`/bookings/confirm-payment/${id}`);

    