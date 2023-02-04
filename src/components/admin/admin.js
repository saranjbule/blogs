import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Blog from "../blog/blog";
import "./admin.css";
import { useEffect, useState } from "react";

function Admin() {
  const [addView, setAddView] = useState(false);
  const [allBlog, setAllBlog] = useState([]);
  const [newBlog, setNewBlog] = useState({});
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const submit = () => {
    setNewBlog({
      titile: title,
      content: content,
      author: author,
    });
  };

  useEffect(
    () => {
      if(newBlog){
        setAllBlog([...allBlog, newBlog]);
      }
    }
  , [newBlog])

  console.log(allBlog);

  return (
    <div className="adminContainer">
      <div className="addButton">
        <Button variant="outlined" onClick={() => setAddView(true)}>
          Add
        </Button>
      </div>

      {addView && (
        <div className="addDetails">
          <Grid container spacing={6}>
            <Grid item>
              <TextField
                label="Title"
                variant="standard"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Grid>
            <Grid item>
              <TextField
                label="Content"
                variant="standard"
                onChange={(e) => setContent(e.target.value)}
              />
            </Grid>
            <Grid item>
              <TextField
                label="Author"
                variant="standard"
                onChange={(e) => setAuthor(e.target.value)}
              />
            </Grid>
          </Grid>

          <div className="submit">
            <Button variant="outlined" onClick={submit}>
              Submit
            </Button>
          </div>
        </div>
      )}
      

      {allBlog &&
        allBlog.map((b, index) => 
           <Blog b={b} key={index} />
        )}
      
    </div>
  );
}

export default Admin;
