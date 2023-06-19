import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { fetchDynamoDbRecord } from "../../server/dynamodb";

type Props = {};
type Blog = {
  Title: string;
  Content: string;
  BlogID: string;
  ImageURL: string;
  Description: string;
};

function BlogPage({}: Props) {
  const router = useRouter();
  const { id, Title } = router.query;

  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    const callFetch = async () => {
      let res = (await fetchDynamoDbRecord(id, Title)) as Blog;
      setBlog(res);
    };
    callFetch();
  }, []);

  return (
    <div>
      <h1 className="mx-auto p-3">{blog?.Title}</h1>
      <p>{blog?.Description}</p>
      <p>{blog?.Content}</p>
    </div>
  );
}

export default BlogPage;
