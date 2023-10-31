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
      // console.log(proj);
      const items = proj.items.map((item) => item.fields);
      // I want to sort the items of the basis of ID property.
      items.sort((a, b) => a.id - b.id);
      // console.log(items);
      setLoading(false);
      setProjects(items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { loading, projects };
};
