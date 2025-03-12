import { db } from "@/utils/firebase";
import { postInfo } from "@/types";
import { getCache, setCache } from "@/utils/cache";
import { getRelativeDate } from "@/utils/dateFormat";
import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore";

export const getLatestPostsInfo = async (numberOfItems?: number) => {
  let latestPostsInfo: postInfo[] = [];

  const { isCache, data } = getCache("LATEST_POSTS_INFO_CACHE");
  if (isCache) {
    latestPostsInfo = data;
    return latestPostsInfo;
  }
  const getLatestPostsInfoQuery = query(
    collection(db, "blogMetaCollection"),
    where("isPublic", "==", true),
    orderBy("publishedDate", "desc"),
    limit(numberOfItems || 8),
  );

  try {
    const firestoreResponse = await getDocs(getLatestPostsInfoQuery);
    latestPostsInfo = firestoreResponse.docs.map((doc) => doc.data()) as postInfo[];

    latestPostsInfo.forEach((postInfo) => {
      const { slug, publishedDate } = postInfo;
      setCache(slug, postInfo);

      const formattedDate = getRelativeDate(new Date(publishedDate.toDate()));
      postInfo.publishedDate = formattedDate;
    });

    setCache("LATEST_POSTS_INFO_CACHE", latestPostsInfo);
    return latestPostsInfo;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
