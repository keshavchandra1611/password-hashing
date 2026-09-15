import * as bcrypt from 'bcrypt';

const SALT: number = 10;
const MyPassword: string = "12345678";
const MyHash: string = "$2b$10$l8NNj.zoZj0mnZpp4uspOejuopLebXQhTY.m.69RIQ0G70h6bu0pG";

// Hash password
async function encryptPassword(password: string): Promise<string> {
    const hash = await bcrypt.hash(password, SALT);
    return hash;
}

// Compare password with hash
// NOTE: There is no "decrypt" for bcrypt. Bcrypt is a one-way hash, so a hash
// can never be turned back into the original password. The closest operation
// is verification: hash the candidate password and check if it matches the
// stored hash. That is exactly what comparePassword does below.


async function comparePassword(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash);
}

async function run(): Promise<void> {
    // const hashed = await encryptPassword(MyPassword);
    // console.log("Hashed Password:", hashed);

    const match = await comparePassword(MyPassword, MyHash);

    console.log("Password Match:", match);
}

run();