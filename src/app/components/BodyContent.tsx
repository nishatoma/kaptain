import CodeBlock from './CodeBlock';

type BodyContentProps = {
    type: string;
    content: string;
}

const BodyContent = ({ type, content }: BodyContentProps) => { 
    switch (type) {
        case 'code':
            return <CodeBlock content={content} />;
        case 'text':
            return <p>{content}</p>;
        case 'image':
            return <img src={content} alt="Image content" className="max-w-full"/>;
        default:
            return <p>{content}</p>;
    }
}

export default BodyContent;