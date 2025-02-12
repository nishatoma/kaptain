const CodeBlock = ({content} : { content: string}) => {
    return (
        <pre className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-4 rounded overflow-auto">
            <code>
                {content}
            </code>
        </pre>
    );
}

export default CodeBlock;