import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: "uyc2i13f4nmo",
  //   environment: '<environment_id>', // defaults to 'master' if not set
  accessToken: "4BgndwevOVQTMcU6ANg6hGI6cMENnbv70uwq-g4FcxI",
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const proj = await client.getEntries({ content_type: "portfolio" });
      const items = proj.items[0].fields;
      console.log(items);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return null;
};