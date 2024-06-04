"use server"

import client from "@/db"

export async function getUser(){
    return  {email : "rajpatel@gmail.com", name : "Raj Patel"}
}

export async function signup(username: string, password: string) {
    // should add zod validation here
    const user = await client.user.create({
        data: {
            username: username,
            password: password
        }
    });

    console.log(user.id);

    return "Signed up!"
}