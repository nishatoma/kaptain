// src/app/assignments/[id]/page.tsx
import { MongoClient } from 'mongodb';
import BodyContent from '../../components/BodyContent';

type idParam = Promise<{ id: string }>;

// This function will be run on the server to fetch data for the assignment
const AssignmentPage = async (props: { params: idParam}) => {
  const { id } = await props.params;

  // Fetching data from MongoDB
  const client = await MongoClient.connect(process.env.MONGODB_URI!);
  const db = client.db('kaptain');
  const chapter = await db.collection('chapters').findOne({ "assignments.id": id });
  const assignment = chapter?.assignments.find((assign: any) => assign.id === id);
  client.close();

  if (!assignment) {
    return <div>Assignment not found</div>;
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">{assignment.title}</h1>
      <div>
        {assignment.body &&
          assignment.body.map((item: any, index: number) => (
            <BodyContent key={index} type={item.type} content={item.content} options={item.options} />
          ))}
      </div>
      <br />
    </main>
  );
};

export default AssignmentPage;
