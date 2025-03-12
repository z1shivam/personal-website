import { db } from "@/utils/firebase";
import { postInfo, postWithContent } from "@/types";
import { getCache, setCache } from "@/utils/cache";
import { formatDate } from "@/utils/dateFormat";
import { doc, getDoc, increment, setDoc } from "firebase/firestore";

export const getPost = async (slug: string): Promise<postWithContent> => {
  let cachedPostInfo = getCache(slug);
  const cachedPostContent = getCache(`${slug}_CONTENT`);

  if (cachedPostInfo.isCache && cachedPostInfo.data.publishedDate) {
    cachedPostInfo.data.publishedDate = formatDate(new Date(cachedPostInfo.data.publishedDate.seconds * 1000));
  }

  if (cachedPostInfo.isCache && cachedPostContent.isCache) {
    return { ...cachedPostInfo.data, content: cachedPostContent.data };
  }

  let postData: postWithContent = {} as postWithContent;

  if (!cachedPostInfo.isCache) {
    const firebaseRes = await getDoc(doc(db, "blogMetaCollection", slug));
    const postInfo = firebaseRes.data() as postInfo;
    if (!postInfo || postInfo.isPublic === false) {
      throw new Error("Post info not found or not published");
    }
    setCache(slug, postInfo);
    postInfo.publishedDate = formatDate(new Date(postInfo.publishedDate.seconds * 1000));
    postData = { ...postInfo, content: "" };
  } else {
    postData = { ...cachedPostInfo.data, content: "" };
  }

  if (!cachedPostContent.isCache) {
    await setDoc(doc(db, "blogReadCountCollection", slug), { readCount: increment(1) }, { merge: true });
    const postContentDoc = await getDoc(doc(db, "blogContentCollection", slug));
    const postContent = postContentDoc.data() as { content: string };
    
    if (!postContent) {
      throw new Error("Post content not found");
    }
    setCache(`${slug}_CONTENT`, postContent.content);
    postData = { ...postData, content: postContent.content };
  } else {
    postData = { ...postData, content: "" };
  }

  return postData;
};
