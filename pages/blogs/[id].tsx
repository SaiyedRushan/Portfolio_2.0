import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { fetchDynamoDbRecord } from "../../server/dynamodb";
import Header from "../../components/Header";
import { Heading } from "@chakra-ui/react";

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
      <Header isBlog={false} />

      <div className="overflow-auto w-8/12 mx-auto">
        <Heading className="py-7">{blog?.Title}</Heading>

        <img src={blog?.ImageURL} alt="" className="pb-6" width={500} />

        <p className="pb-6">{blog?.Description}</p>

        <p>{blog?.Content}</p>
      </div>
    </div>
  );
}

export default BlogPage;
