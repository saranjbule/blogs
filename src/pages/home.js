import { Outlet, useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./home.css";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        className="buttonContainer"
      >
        <Grid item>
          <Button
            className="button"
            variant="contained"
            startIcon={<AccountCircleIcon />}
            onClick={() => navigate("./user")}
          >
            <Typography>User</Typography>
          </Button>
        </Grid>
        <Grid item>
          <Button
            className="button"
            variant="contained"
            startIcon={<AdminPanelSettingsIcon />}
            onClick={() => navigate("./admin")}
          >
            <Typography>Admin</Typography>
          </Button>
        </Grid>
      </Grid>
      <Outlet />
    </>
  );
}

export default Home;

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
