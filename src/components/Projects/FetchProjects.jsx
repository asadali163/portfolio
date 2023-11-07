import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: import.meta.env.VITE_SPACE,
  //   environment: '<environment_id>', // defaults to 'master' if not set
  accessToken: import.meta.env.VITE_ACCESS_TOKEN,
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const proj = await client.getEntries({ content_type: "portfolio" });
      // console.log(proj);
      const items = proj.items.map((item) => item.fields);
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
