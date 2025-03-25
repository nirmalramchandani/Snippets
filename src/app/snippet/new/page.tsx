"use client"
import { createSnippet } from "@/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React, { useActionState } from "react";

const CreateSnippetPage = () => {

  const [formStateData,createSnippetAction] = useActionState(createSnippet,{message:""})

  return (
    <form action={createSnippetAction}>
      <div className="mt-2">
        <Label>Title</Label>
        <Input type="text" name="title" id="title" />
      </div>
      <div className="mt-2">
        <Label>Code</Label>
        <Textarea name="code" id="code" />
      </div >
      {formStateData.message && <div className="text-red-600 mt-2 rounded-2xl text-center font-semibold ">{formStateData.message}</div>}
      <Button type="submit" className="my-4">New</Button>
    </form>
  );
};

export default CreateSnippetPage;
