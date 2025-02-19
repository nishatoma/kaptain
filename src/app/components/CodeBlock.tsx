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
    <div className="relative group w-fit max-w-full my-4 rounded-lg shadow-lg border border-gray-100 bg-[#1e1e1e] overflow-auto">
      {/* Copy Button */}
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 p-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-opacity opacity-0 group-hover:opacity-100"
        aria-label="Copy to clipboard"
      >
        <Clipboard size={16} />
      </button>

      {/* Kotlin Code Display */}
      <div className="inline-block">
        <SyntaxHighlighter
          language="kotlin"
          style={atomDark}
          showLineNumbers={true}
          wrapLines={false}
          customStyle={{
            padding: "0.75rem",
            borderRadius: "0.8rem",
            backgroundColor: "#1e1e1e",
            whiteSpace: "pre", // Ensures no wrapping
            display: "inline-block", // Fit content width
            maxWidth: "100%", // Prevents overflow on smaller screens
          }}
        >
          {content}
        </SyntaxHighlighter>
      </div>

      {/* Copy Confirmation Message */}
      {copied && (
        <span className="absolute top-2 right-12 text-sm text-green-400">
          Copied!
        </span>
      )}
    </div>
  );
}
