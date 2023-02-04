import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Outlet, Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Button variant="contained" onClick={userAction} color="secondary">
        <Typography>User</Typography>
      </Button>
      <Button variant="contained" onClick={adminAction} color="secondary">
        <Typography>Admin</Typography>
      </Button>
    </>
  );
}

export default Home;

// import { useState } from "react";
// import { Outlet, Link } from "react-router-dom";
// import Button from "@mui/material/Button";
// import Grid from "@mui/material/Grid";

// function Home() {
//   const [blogs, setBlogs] = useState([]);
//   const [adminView, setAdminView] = useState(false);
//   const [userView, setUserView] = useState(false);

//   const userAction = () => {
//     setUserView(true);
//     setAdminView(false);
//   };

//   const adminAction = () => {
//     setUserView(false);
//     setAdminView(true);
//   };

//   return (
//     <div className="App">
//       <Grid
//         container
//         direction="row"
//         justifyContent="space-around"
//         alignItems="center"
//         className="container"
//       >
//         <Grid item>
//           <Button variant="contained" onClick={userAction} color="secondary">
//             User
//           </Button>
//         </Grid>
//         <Grid item>
//           <Button variant="contained" onClick={adminAction} color="secondary">
//             Admin
//           </Button>
//         </Grid>
//       </Grid>

//       <div className="adminContainer">{adminView && <Admin />}</div>
//     </div>
//   );
// }

// export default Home;
