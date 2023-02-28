import Post from "../components/Post";
import { useLoaderData } from "react-router-dom"
import { Form } from "react-router-dom";

const Index = (props) => {
  const run = useLoaderData()
  // For each post in the array render a Post component
  return <>
  <div style={{textAlign: "center"}}>
  <h2>Where Did You Run</h2>
  <Form action="/create" method="post">
      <input type="text" name="subject" placeholder="write LOCATION here"/>
      <input type="text" name="details" placeholder="write MILES here"/>
      <button>New Run</button>
  </Form>
  </div>
  {run.map((post) => <Post post={post} key={post.id} />)}
  </>;
};

export default Index;