import { getLatestPostsInfo } from "@/data/getLatestPosts";
import { postInfo } from "@/types";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ErrorComponent from "../global/Error";
import { Heading2 } from "../global/Headings";
import LoadingComponent from "../global/Loading";
import { Button } from "../ui/button";

export default function LatestPosts() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [latestPosts, setLatestPosts] = useState<postInfo[]>([]);
  const [visiblePosts, setVisiblePosts] = useState(5);

  const getVisiblePostsCount = () => {
    if (window.innerWidth >= 1024) return 8;
    else if (window.innerWidth >= 768) return 6;
    else if (window.innerWidth >= 640) return 4;
    else return 5;
  };

  useEffect(() => {
    const fetchLatestPosts = async () => {
      try {
        const latestPostsInfo: postInfo[] = await getLatestPostsInfo();
        setLatestPosts(latestPostsInfo);
      } catch (err: any) {
        setError(err.message || "An error occurred while fetching posts.");
      } finally {
        setLoading(false);
      }
    };

    fetchLatestPosts();

    const handleResize = () => setVisiblePosts(getVisiblePostsCount());
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="mx-auto max-w-7xl p-4">
      <Heading2 emoji="✍️">I write sometimes</Heading2>
      {loading && <LoadingComponent message="Loading Posts" />}
      {error && <ErrorComponent message={error} />}
      <div className="grid grid-cols-1 gap-3 py-3 sm:auto-rows-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {latestPosts.slice(0, visiblePosts).map((post) => (
          <Link
            title={post.title}
            to={`blogs/${post.slug}`}
            key={post.title}
            className="group flex gap-3 rounded-md border border-transparent p-1 hover:border-gray-300 hover:bg-slate-100/50 sm:flex-col"
          >
            <div className="aspect-video h-full w-32 shrink-0 overflow-hidden rounded-md sm:h-auto sm:w-auto">
              <img
                src={post.featuredImage}
                alt={post.title}
                className="aspect-video h-full w-32 rounded-md object-cover transition-transform duration-300 group-hover:scale-105 sm:w-full"
              />
            </div>
            <div>
              <h3 className="line-clamp-2 text-lg font-medium leading-snug sm:text-base">{post.title}</h3>
              <p className="text-base text-slate-600 sm:text-sm">{post.publishedDate}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex w-full justify-center py-2">
        <Link to="/blogs">
          <Button variant={"ghost"} size={"lg"}>
            Read More
            <FaArrowRight className="ml-2 size-3.5" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
