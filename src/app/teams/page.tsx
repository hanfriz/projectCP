export default function TeamsPage() {
  const dummyTeam = [
    {
      name: "Alice",
      role: "Frontend Developer",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "Bob",
      role: "UI/UX Designer",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      name: "Charlie",
      role: "Project Manager",
      image: "https://randomuser.me/api/portraits/men/85.jpg",
    },

    {
      name: "Diana",
      role: "Backend Developer",
      image: "https://randomuser.me/api/portraits/women/60.jpg"
    },

    {
      name: "Ethan",
      role: "DevOps Engineer",
      image: "https://randomuser.me/api/portraits/men/74.jpg"
    }
    ,
    {
      name: "Fiona",
      role: "Data Scientist",
      image: "https://randomuser.me/api/portraits/women/27.jpg"
    }
    ,
    {
      name: "George",
      role: "QA Engineer",
      image: "https://randomuser.me/api/portraits/men/77.jpg"
    },
    {
      name: "Hannah",
      role: "Content Strategist",
      image: "https://randomuser.me/api/portraits/women/79.jpg"
    }
    ,
    {
      name: "Ian",
      role: "Marketing Specialist",
      image: "https://randomuser.me/api/portraits/men/96.jpg"
    }
    ,
  ];

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {dummyTeam.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden text-center p-6"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h2 className="text-xl font-semibold">{member.name}</h2>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
