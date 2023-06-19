import React, { useEffect, useState } from "react";
import { fetchDynamoDBRecords } from "../server/dynamodb";
import { useRouter } from "next/router";

import {
  Card,
  CardHeader,
  CardBody,
  Text,
  Image,
  Box,
  HStack,
} from "@chakra-ui/react";
import Header from "../components/Header";

type Props = {};
type Blog = {
  Title: string;
  Content: string;
  BlogID: string;
  ImageURL: string;
  Description: string;
};

export default function Blogs({}: Props) {
  const [blogs, setBlogs] = useState<Array<Blog> | []>([]);
  const router = useRouter();

  useEffect(() => {
    const callFetch = async () => {
      let res: [] | Blog[] = (await fetchDynamoDBRecords()) as Blog[];
      setBlogs(res);
    };
    callFetch();
  }, []);

  const routeToBlog = (blogid: string, title: string) => {
    router.push(
      { pathname: "/blogs/[id]", query: { Title: title } },
      `/blogs/${blogid}`
    );
  };

  return (
    <div>
      <Header isBlog={true} />

      <div className="flex flex-col px-8 md:px-28">
        {blogs.map((blog, i) => (
          <Box
            as="button"
            _hover={{ cursor: "pointer", boxShadow: "lg" }}
            onClick={() => routeToBlog(blog.BlogID, blog.Title)}
          >
            <Card
              key={i}
              size="sm"
              className="my-2"
              _hover={{ cursor: "pointer", bg: "gray.100" }}
            >
              <HStack padding="2">
                {(blog.ImageURL && (
                  <Image src={blog.ImageURL} alt="" boxSize="100px" />
                )) || (
                  <Image
                    src="https://cdn.icon-icons.com/icons2/2992/PNG/512/medium_logo_icon_187322.png"
                    alt=""
                    boxSize="100px"
                  />
                )}

                <div className="w-full">
                  <CardHeader fontWeight="bold">{blog.Title}</CardHeader>
                  <CardBody>
                    <Text>{blog.Description + " ..."}</Text>
                  </CardBody>
                </div>
              </HStack>
            </Card>
          </Box>
        ))}
      </div>
    </div>
  );
}
