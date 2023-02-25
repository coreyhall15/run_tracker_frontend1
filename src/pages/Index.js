import Post from "../components/Post";
import {useLoaderData} from "react-router-dom"
import { Form } from "react-router-dom";

const Index = (props) => {
  const runs = useLoaderData()
  // For each post in the array render a Post component
  return <>
  <div style={{textAlign: "center"}}>
  <h2>Where Did You Run</h2>
  <Form action="/create" method="post">
      <input type="text" name="subject" placeholder="write subject here"/>
      <input type="text" name="details" placeholder="write details here"/>
      <button>New Run</button>
  </Form>
  </div>
  {runs.map((post) => <Post post={post} key={post.id} />)}
  </>;
};

export default Index;