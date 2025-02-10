import Header from "../../components/header.js";
import Footer from "../../components/footer.js";

const blogPosts = {
  "how-to-rank-images-in-google": {
    title: "How to Rank Images in Google",
    date: "25 March 2023",
    content: `
      Ranking images in Google requires a combination of SEO techniques,
      including optimizing image file names, adding alt text, and ensuring fast page load times.
    `,
  },
  "the-ultimate-seo-checklist": {
    title: "The Ultimate SEO Checklist",
    date: "25 February 2023",
    content: `
      This checklist covers everything you need to optimize your website,
      from meta tags to backlinks and everything in between.
    `,
  },
};

export default function BlogPost({ params }) {
  const { slug } = params;
  const post = blogPosts[slug];

  if (!post) {
    return <p>Post not found!</p>;
  }

  return (
    <div className="min-h-screen bg-blue-500 text-white">
      <Header></Header>
      <div className="w-full md:w-2/3 mx-auto p-6 bg-white shadow-lg rounded-lg m-10">
        <h1 className="text-4xl text-gray-900 font-bold mb-4">{post.title}</h1>
        <p className="text-sm text-gray-500 mb-4">📅 {post.date}</p>
        <p className="text-gray-700 leading-7">{post.content}</p>
      </div>
      <Footer></Footer>
    </div>
  );
}
