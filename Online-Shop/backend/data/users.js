import bcrypt from "bcryptjs";

const users = [
    {
        name: "Admin User",
        email: "admin@email.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: true,
    } ,
    {
        name: "John davies",
        email: "john@email.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: false,
    } ,
    {
        name: "leroy sane",
        email: "leroy@email.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: false,
    } ,
];

export default users;
