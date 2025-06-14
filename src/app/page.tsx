export default function Home() {
  return (
    <div className="space-y-16">
      <section className="text-center py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Company</h1>
        <p className="text-lg text-white-600 max-w-2xl mx-auto">
          We are a modern company providing high-quality services and insightful blog content.
        </p>
        <br/>
        <p className="text-lg text-white-600 max-w-2xl mx-auto">"Grow together with us"</p>
    
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        <img
          src="/images/tech.jpg"
          alt="Tech Image 1"
          className="w-full h-60 object-cover rounded shadow-md"
        />
        <img
          src="/images/tech2.jpg"
          alt="Tech Image 2"
          className="w-full h-60 object-cover rounded shadow-md"
        />
        <img
          src="/images/tech3.jpg"
          alt="Tech Image 3"
          className="w-full h-60 object-cover rounded shadow-md"
        />
      </section>

      <section className="py-12 bg-yellow-600">
        <h2 className="text-2xl font-semibold text-center mb-6 text-white">Empowering Your Digital Journey</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white shadow rounded p-6">
            <h3 className="font-bold mb-2">Expertise</h3>
            <p className="text-gray-600">We bring years of industry knowledge to every project.</p>
          </div>
          <div className="bg-white shadow rounded p-6">
            <h3 className="font-bold mb-2">Tailored Solutions</h3>
            <p className="text-gray-600">Our solutions are customized to meet your business goals.</p>
          </div>
        </div>
      </section>
    </div>
  );
}