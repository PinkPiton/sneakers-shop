import { Card, CardBody, CardFooter, Divider } from "@nextui-org/react";

import israfilReuqester from "../../api/base";
import { useEffect, useState } from "react";

export const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const { data } = await israfilReuqester.get(`/posts`);
      console.log(data);
      setPosts(data);
    };
    getPosts();
  }, []);

  return (
    <div className="p-16">
      {posts &&
        posts.map((e) => {
          return (
            <>
              <Card className="max-w-[400px] mt-4">
                <Divider />
                <CardBody>
                  <p>{e.title}</p>
                </CardBody>
                <Divider />
                <CardFooter>{e.body}</CardFooter>
              </Card>
            </>
          );
        })}
    </div>
  );
};
