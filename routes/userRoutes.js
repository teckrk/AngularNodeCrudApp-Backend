const express = require('express');
const router = express.Router();
const { addUser, getUsers, getUsersById, updateUser, deleteUser } = require('../handlers/userHandle');

router.post("/users", async (req, res) => {
    console.log(req.body);
    let user = await addUser(req.body);
    res.send(user);
});

router.get("/users", async (req, res) => {
    const users = await getUsers();
    res.send(users);
});
router.get("/users/:id", async (req, res) => {
    const id = req.params["id"];
    console.log("id is : ", id);
    const users = await getUsersById(id);
    res.send(users);
});

router.put("/users/:id", async (req, res) => {
    const id = req.params["id"];
    await updateUser(id, req.body);
    res.send({});
});

router.delete("/users/:id", async (req, res) => {
    const id = req.params["id"];
    await deleteUser(id);
    res.send({});
});

module.exports = router;