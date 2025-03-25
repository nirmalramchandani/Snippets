"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export const deleteSnippet = async (id: number) => {
  await prisma.snippet.delete({
    where : {
      id
    }
  });

  redirect(`/`);
};
