import CodeSnippet from './CodeBlock';
import React from 'react';

type BodyContentProps = {
    type: string;
    content: string;
    options: Array<string>;
}

const BodyContent = ({ type, content, options }: BodyContentProps) => {
    switch (type) {
        case 'header':
            return <h1 className="text-xl font-bold my-4">{content}</h1>;
        case 'code':
            return <CodeSnippet content={content} />;
        case 'text':
            return content.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                    {/* Render the line with HTML tags and line breaks */}
                    <span dangerouslySetInnerHTML={{ __html: line }} />
                    <br />
                </React.Fragment>
            ));
        case 'image':
            return (
                <>
                <img src={content} alt="Image content" className="max-w-full rounded-lg border border-gray-100 shadow-sm" />
                <br />
                </>
            );
        case 'link':
            return (
                <a href={content} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    {content}
                    <br />
                </a>
            );
        case 'break':
            return (
                <hr className="my-4 border-gray-700" />
            );
        case 'question':
            return (
                <div className="my-4 p-4 rounded-lg shadow-sm">
                    <p className="font-semibold">{content}</p>
                    <ul className="list-disc ml-4">
                        {options.map((option, index) => (
                            <li key={index} className="p-2">
                                {option}
                            </li>
                        ))}
                    </ul>
                </div>
            );
        default:
            return <p>{content}</p>;
    }
}

export default BodyContent;