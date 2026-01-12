import axios from "axios";

const API_URL = "https://jwt-auth-eight-neon.vercel.app"; // Pastikan tidak ada spasi di ujung

export const loginService = async (email, password) => {
  try {
    const response = await axios.post(
      `${API_URL}/login`, 
      { email, password },
      { headers: { "Content-Type": "application/json" } } // Menjamin format JSON
    );
    return response.data;
  } catch (error) {
    // Menangkap pesan "Email not found" dari server
    throw error.response?.data || { msg: "Login gagal" };
  }
};

export const logoutService = async () => {
  try {
    const token = localStorage.getItem("token"); // Ambil token yang disimpan saat login
    await axios.post(
      `${API_URL}/logout`,
      {},
      { headers: { Authorization: `Bearer ${token}` } } // Sertakan token untuk logout
    );
  } catch (error) {
    throw error.response?.data || { msg: "Logout gagal" };
  }
};