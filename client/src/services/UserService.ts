import axios from "axios";

const URL = 'http://localhost:5000/api/v1/users'

class UserService {

    static async getUser(email: string) {
        try {
            const { data } = await axios.get(`${URL}/${email}`)
            return data
        } catch (err: any) {
            throw new Error(err)
        }
    }

    static async updateUser(id: string, updatedUser: any) {
        try {
            const { status } = await axios.put(`${URL}/${id}`, { user: updatedUser })
            return status
        } catch (err: any) {
            throw new Error(err)
        }
    }

    static async deleteUser(id: string) {
        try {
            const { status } = await axios.delete(`${URL}/${id}`)
            return status
        } catch (err: any) {
            throw new Error(err)
        }
    }
}

export default UserService