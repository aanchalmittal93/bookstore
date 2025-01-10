import Navbar from "./Navbar";

function About() {
  return (
    <div className="relative">
      <Navbar />
      <div className="pt-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white">
            About Us
          </h1>
          <p className="text-lg mt-4 text-gray-600 dark:text-gray-300">
            We are a platform dedicated to providing top-notch educational resources,
            expert guidance, and community support to help individuals achieve their goals.
          </p>
        </div>

        <div className="mt-12 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                  Our Mission
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Our mission is to empower people through education, providing them with
                  the tools and knowledge they need to succeed in their personal and professional lives.
                </p>
              </div>

              <div className="text-center md:text-left">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                  Our Vision
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Our vision is to build a globally accessible platform that democratizes
                  education, ensuring everyone has an equal opportunity to learn and grow.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
              Our Team
            </h2>
            <p className="text-lg mt-4 text-gray-600 dark:text-gray-300">
              Meet the dedicated individuals who bring this vision to life.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <img
                  className="h-24 w-24 rounded-full object-cover"
                  src="https://randomuser.me/api/portraits/men/1.jpg"
                  alt="Team Member"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                John Doe
              </h3>
              <p className="text-gray-600 dark:text-gray-300">Founder & CEO</p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <img
                  className="h-24 w-24 rounded-full object-cover"
                  src="https://randomuser.me/api/portraits/women/1.jpg"
                  alt="Team Member"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Jane Smith
              </h3>
              <p className="text-gray-600 dark:text-gray-300">Co-Founder & CTO</p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <img
                  className="h-24 w-24 rounded-full object-cover"
                  src="https://randomuser.me/api/portraits/men/2.jpg"
                  alt="Team Member"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Michael Johnson
              </h3>
              <p className="text-gray-600 dark:text-gray-300">Lead Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;