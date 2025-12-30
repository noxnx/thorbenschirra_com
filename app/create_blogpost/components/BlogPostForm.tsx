"use client";

import { useState } from "react";

export default function BlogpostForm() {
  const [header, setHeader] = useState<string | undefined>();
  const [description, setDescription] = useState<string | undefined>();
  const [content, setContent] = useState<string | undefined>();

  function handleHeader(event: React.ChangeEvent<HTMLInputElement>) {
    setDescription(event?.currentTarget.value);
  }

  function handleDescription(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setHeader(event?.currentTarget.value);
  }

  function handleContent(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setContent(event?.currentTarget.value);
  }
  return (
    <form className="flex flex-col space-y-8 items-end">
      <input
        type="text"
        className="input bg-white w-full border border-gray-200"
        placeholder="Header"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleHeader(event)
        }
        value={header}
      />
      <textarea
        className="textarea w-full bg-white border border-gray-200"
        placeholder="Description"
        onChange={(event) => handleDescription(event)}
        value={description}
      />
      <textarea
        className="textarea bg-white w-full min-h-screen border border-gray-200"
        placeholder="Start typing..."
        onChange={(event) => handleContent(event)}
        value={content}
      />
      <button type="submit" className="btn w-96">
        Create blogpost
      </button>
    </form>
  );
}
