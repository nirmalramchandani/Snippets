import SnippetEditor from "@/components/SnippetEditor";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import React from "react";

const EditSnippetPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = parseInt((await params).id);

  const snippet = await prisma.snippet.findUnique({
    where: {
      id,
    },
  });

  if (!snippet) return <h1>"Snippet not Found!</h1>;

  return (
    <div>
      <SnippetEditor snippet={snippet}/>
    </div>
  );
};

export default EditSnippetPage;
