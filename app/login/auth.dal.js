import axios from "axios";

export const loginDal = async (loginData) => {
    const { data } = await axios.post(`${process.env.BASE_URL}/api/auth/login`, loginData)
    return data
}