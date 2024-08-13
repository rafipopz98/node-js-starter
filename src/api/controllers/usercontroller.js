import { hihi } from "../../services/user.js";


class UserController {
    hi = async (req, res) => {
        const type = 'servicee';
        const service = hihi(type);
        console.log(service);
        res.sendSuccess(service,"Successssssssss",201)
    }
}
export { UserController }