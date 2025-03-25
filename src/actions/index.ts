"use server"

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function createSnippet(prevState:{message:string},formData : FormData){
  const title = formData.get("title");
  const code = formData.get("code") as string | null;

  if(!title || typeof title !== "string") return {message:"Title is Required"};
  if (!code || typeof code !== "string") return { message: "Code is Required" };

  await prisma.snippet.create({
    data:{
      title,
      code
    }
  });

  redirect("/");
}