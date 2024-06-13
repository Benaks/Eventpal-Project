
import Navbar from '../components/Navbar'
import Footer from "../components/footers/Footer";

function BlogPage()  {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <Navbar />
      <header class="bg-purple-700 p-4 shadow-lg">
        <div class="container mx-auto">
          <h1 class="text-white text-4xl font-bold">
            Eventrybe: Your Ultimate Event Management Solution
          </h1>
        </div>
      </header>
      <main class="container mx-auto my-8 p-4 bg-white rounded-lg shadow">
        <article class="prose lg:prose-xl">
          <h2 class="text-2xl font-semibold text-purple-700">Introduction</h2>
          <p>
            Eventrybe is an innovative event management app that offers
            comprehensive features to plan, promote, and manage events. Much
            like Eventbrite, Eventrybe is designed to streamline the process of
            event organization, from small gatherings to large-scale
            conferences.
          </p>

          <h2 class="text-2xl font-semibold text-purple-700">Key Features</h2>
          <ul class="list-disc pl-5 space-y-2">
            <li>
              <strong>Event Creation:</strong> Easily create events with
              customizable templates and detailed descriptions.
            </li>
            <li>
              <strong>Ticketing:</strong> Simplify ticket sales with integrated
              payment options and real-time sales tracking.
            </li>
            <li>
              <strong>Promotion:</strong> Utilize built-in tools for marketing
              your event across social media and email campaigns.
            </li>
            <li>
              <strong>Attendee Management:</strong> Keep track of attendees with
              easy-to-use registration and check-in systems.
            </li>
            <li>
              <strong>Analytics:</strong> Gain insights with comprehensive
              analytics and reporting tools.
            </li>
          </ul>

          <h2 class="text-2xl font-semibold text-purple-700">
            Why Choose Eventrybe?
          </h2>
          <p>
            Eventrybe stands out due to its user-friendly interface, robust
            feature set, and flexible customization options. Here’s why you
            should consider Eventrybe for your next event:
          </p>
          <ol class="list-decimal pl-5 space-y-2">
            <li>
              <strong>All-in-One Solution:</strong> Manage every aspect of your
              event from a single platform.
            </li>
            <li>
              <strong>Scalability:</strong> Whether you're hosting a small
              meeting or a large conference, Eventrybe scales with your needs.
            </li>
            <li>
              <strong>Cost-Effective:</strong> Competitive pricing plans ensure
              you get the best value for your money.
            </li>
            <li>
              <strong>Exceptional Support:</strong> Our dedicated support team
              is here to assist you every step of the way.
            </li>
          </ol>

          <h2 class="text-2xl font-semibold text-purple-700">Conclusion</h2>
          <p>
            Eventrybe is the go-to app for all your event management needs. Its
            comprehensive features, ease of use, and reliability make it the
            perfect tool for event organizers. Try Eventrybe today and take your
            events to the next level!
          </p>

          <div class="mt-8">
            <a
              href="#"
              class="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800"
            >
              Get Started with Eventrybe
            </a>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}

export default BlogPage



    
