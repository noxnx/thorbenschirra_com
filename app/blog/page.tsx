import Header from "@/app/components/Header";

export default function blog() {
  return (
    <div>
      <Header />
      <div className="mx-12 space-y-14">
        <div className="space-y-4">
          <p className="text-xl font-semibold">
            Note: This is my blog. That means these are my beliefs, opinions and
            interests...
          </p>
          <p>
            If you are not interested in my posts or feel offended any way, feel
            free to leave. <br />
            In case you have constructive feedback, I would highly appreciate if
            you let me know.
          </p>
        </div>
        <div className="text-3xl font-semibold">
          <h1 className="text-4xl font-semibold">Recent blogposts</h1>
        </div>
        <div className="space-y-4 max-w-2/3 border border-gray-200 rounded-box p-4 shadow-md hover:cursor-pointer">
          <h2 /* Post header */ className="text-3xl font-semibold">
            My first blogpost
          </h2>
          <p className="border-t border-gray-300 py-8">
            In this blogpost I want to share the story that led me to creating
            this blog.
            <br />
            This is my first ever post, so laugh if I did something crazy...
            <br />
            Feedback is highly appreciated!!!
          </p>

          {/* <ul className="border-t py-8">
            <strong>What is the motivation for creating this blog? </strong>
            <br />I want to share:
            <li>where my interests lie</li>
            <li>
              things that come to my mind and could be interesting to others
            </li>
            <li>topics I want to share my perspective or experience from</li>
          </ul> */}
        </div>
      </div>
    </div>
  );
}
