export const isExist = async (id) => {
    await userModel.finfByid(id)
}