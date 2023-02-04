import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import Blog from "../../components/blog/blog"
import "./admin.css";

function Admin() {
  const [blog, setBlog] = useState([]);
  const [addView, setAddView] = useState(false);
  const [newBlog, setNewBlog] = useState({});
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  console.log(blog);

  const submit = () => {
    setNewBlog({
      title: title,
      content: content,
      author: author,
    });
    setAuthor("");
    setTitle("");
    setContent("");
  };

  useEffect(() => {
    setBlog([...blog, newBlog]);
  }, [newBlog]);

  useEffect(() => {
    localStorage.setItem("blog", JSON.stringify(blog));
  }, [blog]);

  return (
    <div className="adminContainer">
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <Button variant="outlined" onClick={() => setAddView(true)}>
          <Typography>Add</Typography>
        </Button>
        <Button
          variant="outlined"
          color="error"
          onClick={() => setAddView(false)}
        >
          <Typography>Cancel</Typography>
        </Button>
      </Stack>

      {addView && (
        <div className="addDetails">
          <div className="addContent">
            <Grid container spacing={6}>
              <Grid item>
                <TextField
                  label="Title"
                  variant="standard"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Content"
                  value={content}
                  variant="standard"
                  onChange={(e) => setContent(e.target.value)}
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Author"
                  variant="standard"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </Grid>
            </Grid>
          </div>
          <div className="submitButton">
            <Button variant="outlined" onClick={submit}>
              <Typography>Submit</Typography>
            </Button>
          </div>
        </div>
      )}

      {blog && blog.map((blog, index) => <Blog blog={blog} key={index} />)}
    </div>
  );
}

export default Admin;
