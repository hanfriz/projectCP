export default function AboutPage() {
  return (
    <section className="py-12 px-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">About Us</h1>

      {/* Company History */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Our History</h2>
        <p className="mb-4">
          Hello World, We are a modern digital agency committed to helping businesses elevate their online presence.
          At our core, we are a forward-thinking digital agency passionate about shaping the future of online experiences.
        </p>
        <p className="mb-4">
          Founded in <strong>2020</strong>, we started as a small group of passionate developers and designers. Over the years, we’ve grown into a dynamic team of creative problem-solvers delivering impactful digital solutions for clients across industries.
        </p>
        <p>
          Our mission is to create meaningful digital experiences. Our milestones include launching over 150 websites, helping startups scale, and achieving 5x growth in client satisfaction scores.
        </p>
        <img
          src="/images/office.jpg"
          alt="Our Office"
          className="w-full h-64 object-cover rounded-lg shadow mt-6"
        />
      </div>

      {/* Team Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Team Member 1 */}
          <div className="bg-gray-50 p-4 rounded shadow">
            <h3 className="font-bold text-lg">Alice Doe</h3>
            <p className="text-sm text-gray-600">CEO & Founder& Frontend Developer</p>
            <p className="text-sm mt-2">
              Alice brings over 10 years of experience in tech leadership and has a passion for building inclusive digital solutions.
            </p>
          </div>
          {/* Team Member 2 */}
          <div className="bg-gray-50 p-4 rounded shadow">
            <h3 className="font-bold text-lg">Charlie Smith</h3>
            <p className="text-sm text-gray-600">Project Leader</p>
            <p className="text-sm mt-2">
              A full-stack expert who leads development strategy and ensures technical excellence across projects.
            </p>
          </div>
          {/* Team Member 3 */}
          <div className="bg-gray-50 p-4 rounded shadow">
            <h3 className="font-bold text-lg">Bob Lee</h3>
            <p className="text-sm text-gray-600">UI/UX Designer</p>
            <p className="text-sm mt-2">
              Bob is our creative mind behind intuitive and engaging user interfaces, backed by user research.
            </p>
          </div>
        </div>
      </div>

      {/* Culture Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Our Culture</h2>
        <p className="mb-4">
          At ABC Digital, culture is everything. We believe in collaboration, continuous learning, and transparency. Our team works remotely and in-office, encouraging flexibility and work-life balance.
        </p>
        <p>
          We embrace diversity, innovation, and integrity — and strive to build not just great products, but also a supportive environment where creativity thrives and people are empowered.
        </p>
      </div>
    </section>
  );
}
