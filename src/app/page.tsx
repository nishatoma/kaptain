import { MongoClient } from "mongodb";
import Link from 'next/link';


const clientPromise = MongoClient.connect(process.env.MONGODB_URI || "")
  .then(client => {
    // Debugging: Log success message
    console.log("MongoDB connected successfully!");
    return client;
  })
  .catch(error => {
    // Debugging: Log error message if connection fails
    console.error("Error connecting to MongoDB:", error);
    throw error; // Rethrow to handle the error appropriately
  });

async function getChapters() {
  const client = await clientPromise;
  const db = client.db("kaptain");
  const chapters = await db.collection("chapters").find().toArray();
  return JSON.parse(JSON.stringify(chapters)); // Convert MongoDB objects to JSON
}

export default async function HomePage() {
  const chapters = await getChapters();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4 inline">Kaptain: Learn Kotlin</h1>
      {chapters.map((chapter: any) => (
        <div key={chapter.id} className="border p-4 mb-4 rounded-lg shadow max-w-md mx-auto">
          <h2 className="text-xl font-semibold">{chapter.title}</h2>
          <ul className="mt-2">
          {chapter.assignments.map((assignment: any) => {
            // Extracting assignment number from the id (assuming it's a number)
            const assignmentNumber = assignment.id.replace('assignment-', ''); // You can modify this depending on your id format
            return (
              <li key={assignment.id} className="ml-4 mt-2">
                {/* Displaying the assignment number */}
                {assignmentNumber}.{' '}
                <Link href={`/assignments/${assignment.id}`} className="text-blue-500 hover:underline">
                  {assignment.title}
                </Link>
              </li>
            );
          })}
        </ul>
        </div>
      ))}
    </main>
  );
}
