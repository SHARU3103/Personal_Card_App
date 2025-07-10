
import Card from "./component/Card";

function App() {
  const people = [
    { name: "Sharayu Asalkar", age: 23, bio: "Frontend Developer passionate about building UI with React." },
    { name: "John Joshi", age: 28, bio: "Backend Developer who loves working with Node.js and databases." },
    { name: "Aditi Sharma", age: 21, bio: "UI/UX designer focusing on user-centric design." }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-10">Personal Info Cards</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {people.map((person, index) => (
          <Card key={index} name={person.name} age={person.age} bio={person.bio} />
        ))}
      </div>
    </div>
  );
}

export default App;
