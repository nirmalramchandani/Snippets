import React from "react";
import { Button } from "@/components/ui/button";
import Link from 'next/link'
import { prisma } from "@/lib/prisma";

const homePage = async () => {

  const snippets = await prisma.snippet.findMany();

  return (
    <div>
      <h1 className="font-bold text-2xl">Home</h1>
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Snippets</h1>
        <Link href={"/snippet/new"}>
          <Button>New</Button>
        </Link>
      </div>
      <div>
        {snippets.map( (snippet)=>(
          <div key={snippet.id} className="flex justify-between items-center bg-gray-200 rounded-2xl px-8 py-2 my-2">
            <h1>{snippet.title}</h1>
            <Link href={`/snippet/${snippet.id}`}><Button variant={"link"} className="">View</Button></Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default homePage;
