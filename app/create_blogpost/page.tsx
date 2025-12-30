import Header from "../components/Header";
import BlogpostForm from "./components/BlogPostForm";

export default function create_blogpost() {
  return (
    <div>
      <Header />
      <div className="flex flex-col m-20 space-y-8">
        <h1 className="text-4xl font-semibold">Create a new blogpost</h1>
        <BlogpostForm />
      </div>
    </div>
  );
}
