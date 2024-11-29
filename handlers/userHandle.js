const User = require('.././db/user');

async function addUser(userModel) {
    let user = new User({
        ...userModel,
    });
    await user.save();
    return user.toObject();
}

async function getUsers() {
    let users = await User.find();
    return users.map((user) => user.toObject());
}

async function getUsersById(id) {
    const user = await User.findById(id);
    return user.toObject();
}

async function updateUser(id, userModel) {
    const filter = { _id: id };
    await User.findOneAndUpdate(filter, userModel);
}

async function deleteUser(id) {
    await User.findByIdAndDelete(id);
}

module.exports = { addUser, getUsers, getUsersById, updateUser, deleteUser };