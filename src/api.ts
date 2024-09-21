import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const BOT_TOKEN = process.env.BOT_TOKEN;
const API_BASE_URL = `https://api.telegram.org/bot${BOT_TOKEN}`;

export async function getMe() {
  try {
    const response = await axios.get(`${API_BASE_URL}/getMe`);
    return response.data.result;
  } catch (error) {
    console.error("Error fetching bot info:", error);
    throw error;
  }
}

export async function getUserProfilePhotos(userId: number) {
  try {
    const response = await axios.get(`${API_BASE_URL}/getUserProfilePhotos`, {
      params: { user_id: userId }
    });
    return response.data.result;
  } catch (error) {
    console.error("Error fetching user profile photos:", error);
    throw error;
  }
}
