import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Blog({ b }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {b.id}
        </Typography>
        <Typography variant="h5" component="div">
          {b.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {b.content}
        </Typography>
        <Typography variant="body2">{b.author}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Update</Button>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
  );
}

export default Blog;
