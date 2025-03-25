"use client";
import Editor from "@monaco-editor/react";
import type { Snippet } from "@prisma/client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { saveSnippet } from "@/actions/SaveEditorCode";

const SnippetEditor = ({ snippet }: { snippet: Snippet }) => {
  const [code, setCode] = useState(snippet.code);

  const changeEventHandler = (value: string = "") => {
    setCode(value);
  };
  const saveSnippetAction = saveSnippet.bind(null, snippet.id, code);

  return (
    <div>
      <form
        action={saveSnippetAction}
        className="flex items-center justify-end mb-4"
      >
        <Button type="submit">Save</Button>
      </form>
      <Editor
        height="40vh"
        defaultLanguage="javascript"
        defaultValue={code}
        onChange={changeEventHandler}
      />
    </div>
  );
};

export default SnippetEditor;
