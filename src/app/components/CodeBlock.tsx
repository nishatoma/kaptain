"use client";

import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Clipboard } from "lucide-react";

interface CodeSnippetProps {
  content: string;
}

export default function CodeSnippet({ content }: CodeSnippetProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group max-w-2xl my-4 rounded-lg shadow-lg border border-gray-100 bg-[#1e1e1e]">
      {/* Copy Button */}
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 p-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-opacity opacity-0 group-hover:opacity-100"
        aria-label="Copy to clipboard"
      >
        <Clipboard size={16} />
      </button>

      {/* Kotlin Code Display */}
      <SyntaxHighlighter
        language="kotlin"
        style={atomDark}
        wrapLongLines={true}
        showLineNumbers={false}
        wrapLines={true}
        customStyle={{
          padding: "0.5rem",
          borderRadius: "0.8rem",
          backgroundColor: "#1e1e1e",
        }}
      >
        {content}
      </SyntaxHighlighter>

      {/* Copy Confirmation Message */}
      {copied && (
        <span className="absolute top-2 right-12 text-sm text-green-400">
          Copied!
        </span>
      )}
    </div>
  );
}