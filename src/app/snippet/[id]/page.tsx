import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import React from "react";
import { deleteSnippet } from "@/actions/deleteSnippet";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = parseInt((await params).id);
  
  const snippet = await prisma.snippet.findUnique({
    where: {
      id,
    },
  });
  
  if (!snippet) return <h1>Snippet not Found!</h1>;

 const deleteSnippetAction = deleteSnippet.bind(null, id);

  return (
    <div>
      <div>
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-2xl">{snippet.title}</h1>
          <div className="flex items-center justify-end gap-1">
            <Link href={`/snippet/${snippet.id}/edit`}><Button>Edit</Button></Link>
            <form action={deleteSnippetAction}>
              <Button variant={"destructive"}>Delete</Button>
            </form>
          </div>
        </div>
        <div className="border-[2px] rounded-xl bg-gray-200 my-4 p-4">
          <pre>
            <code>{snippet.code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default page;
