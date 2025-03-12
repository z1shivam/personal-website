import { useEffect, useState, Suspense } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getLatestPostsInfo } from "@/data/getLatestPosts";
import LoadingComponent from "@/components/global/Loading";
import ErrorComponent from "@/components/global/Error";
import { Button } from "@/components/ui/button";
import { FaArrowLeft } from "react-icons/fa6";
import { cn } from "@/utils/cn";
import { postInfo } from "@/types";
import { getPost } from "@/data/getPost";

const LatestPosts = ({ currentSlug }: { currentSlug: string }) => {
  const [latestPosts, setLatestPosts] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchLatestPosts = async () => {
      try {
        const postsInfo: postInfo[] = await getLatestPostsInfo();
        const filteredPosts = postsInfo.filter((post) => post.slug !== currentSlug);
        setLatestPosts(filteredPosts);
      } catch (err: any) {
        setError(err.message || "An error occurred while fetching posts.");
      } finally {
        setLoading(false);
      }
    };
    fetchLatestPosts();
  }, [currentSlug]);

  if (loading) return <LoadingComponent message="Loading Latest Posts" />;
  if (error) return <ErrorComponent message={error} />;

  return (
    <div >
      {latestPosts.length === 0 && (
        <p className="py-6 text-center text-xl font-semibold text-red-600">No other posts found</p>
      )}
      <div className="flex flex-col gap-3">
        {latestPosts.map((post) => (
          <Link
            key={post.slug}
            to={`/blogs/${post.slug}`}
            className="block rounded-md border-2 border-slate-300 bg-slate-100 px-3 py-2 text-base"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            {post.title} - <span className="text-sm text-slate-600">{post.publishedDate}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default function BlogPage() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Loading...";
    const fetchPost = async () => {
      setLoading(true);
      try {
        const post = await getPost(slug!);
        document.title = post.title;
        setPost(post);
      } catch (error: any) {
        console.error(error.message);
        document.title = "Error";
        setError(`${error.message}`);
      } finally {
        setLoading(false);
      }
    };
    slug && fetchPost();
  }, [slug]);

  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col md:flex-row">
      <main className="w-full pb-4 md:w-4/6 md:p-4">
        <div className={cn("hidden min-h-screen", (loading || error) && "block")}>
          {loading && <LoadingComponent message="Loading Post" />}
          {error && (
            <>
              <ErrorComponent message={error} />
              <div>
                <Link to={"/"} className="mx-auto block w-max">
                  <Button variant={"ghost"} size={"sm"} className="rounded-full bg-slate-900 px-3 text-white">
                    <FaArrowLeft className="mr-2 size-4" />
                    Back to home
                  </Button>
                </Link>
              </div>
            </>
          )}
        </div>
        {!loading && post && (
          <>
            <div className="aspect-video w-full">
              <img
                src={post.featuredImage}
                alt={post.title}
                title={post.title}
                className="aspect-video w-full object-cover md:rounded-lg"
              />
            </div>
            <div className="flex w-full items-center gap-4 px-3 py-6">
              <Link
                to={".."}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(-1);
                }}
              >
                <Button variant={"ghost"} size={"sm"} className="rounded-full bg-orange-600 px-3 text-white">
                  <FaArrowLeft className="mr-2 size-4" />
                  Go Back{" "}
                </Button>
              </Link>
              <Link to={"/blogs"}>
                <Button variant={"ghost"} size={"sm"} className="rounded-full bg-orange-600 px-3 text-white">
                  All Blogs
                </Button>
              </Link>
            </div>
            <h1 className="px-4 pb-4 font-inter text-4xl font-extrabold">{post.title}</h1>
            <p className="px-5 font-inter text-sm font-medium text-slate-500">
              By {post.author} - {post.publishedDate}
            </p>
            <article className="prose max-w-3xl px-4">
              <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
            </article>
          </>
        )}
        <div className="py-8 text-center font-acme text-2xl">Thanks For Reading!</div>
      </main>
      <aside className="h-fit w-full border-t-2 p-4 md:sticky md:top-16 md:w-2/6 md:border-none">
        <h2 className="mb-4 text-3xl font-bold">Latest Posts</h2>
        <Suspense fallback={<LoadingComponent message="Loading Latest Posts" />}>
          <LatestPosts currentSlug={slug!} />
        </Suspense>
      </aside>
    </section>
  );
}
