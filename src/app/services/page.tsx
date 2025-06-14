export default function ServicesPage() {
  return (
    <>
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Web Development */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <img
              src="/images/web-development.jpg"
              alt="Web Development"
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">Web Development</h2>
            <p className="text-gray-700 text-sm">
              We build fast, responsive, and scalable websites using the latest technologies
              like React, Next.js, and Tailwind CSS. From landing pages to complex web
              applications, we deliver digital solutions that drive results.
              Every line of code we write is optimized for performance, accessibility, and SEO,
              ensuring your online presence leaves a lasting impression.
            </p>
          </div>

          {/* UI/UX Design */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <img
              src="/images/ui-ux.jpg"
              alt="UI/UX Design"
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">UI/UX Design</h2>
            <p className="text-gray-700 text-sm">
              We design user interfaces that are not only visually stunning but also
              intuitive and easy to navigate. Our design process puts user experience
              at the center, resulting in products that are both delightful to use
              and aligned with your business goals. Whether it's mobile or desktop,
              our designs adapt seamlessly across platforms.
            </p>
          </div>

          {/* Content Strategy */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <img
              src="/images/content-strategy.jpg"
              alt="Content Strategy"
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">Content Strategy</h2>
            <p className="text-gray-700 text-sm">
              Great content starts with a solid strategy. We help you define your voice,
              plan impactful content, and manage it across all your digital channels.
              From blog writing and SEO copy to branding narratives, our team ensures
              that your message reaches and resonates with your target audience.
            </p>
          </div>
        </div>
      </section>

      {/* ✅ Testimonial Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">What Our Clients Say</h2>
          <div className="grid gap-6 md:grid-cols-3 text-left">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded shadow">
              <p className="text-gray-600 italic">"The web development team at ABC Digital transformed our online presence. The site is faster, responsive, and looks amazing!"</p>
              <div className="mt-4">
                <p className="font-semibold text-gray-800">— Sarah L., Founder of Yes</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded shadow">
              <p className="text-gray-600 italic">"We are super Satistfied.Their UI/UX team is top-notch. They really understood our users and delivered a clean, intuitive design."</p>
              <div className="mt-4">
                <p className="font-semibold text-gray-800">— James K., Prod.Manager of SKY</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded shadow">
              <p className="text-gray-600 italic">"We used their content strategy service and saw a 40% increase in engagement. Highly recommended for growing brands."</p>
              <div className="mt-4">
                <p className="font-semibold text-gray-800">— Ava D., Marketing Staff of Cloud</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
