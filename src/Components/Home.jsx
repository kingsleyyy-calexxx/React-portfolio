import React from "react";
import "./styles/Home.css";
import calex from "./assets/calex.jpeg";
import "./styles/Home.css";
import me from "./assets/calex.jpeg";
import fend from "./assets/card1.jpg";
import cal from "./assets/Calci.jpg";
import game from "./assets/chess.jpg"
// import Calex from './Calex';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
// import Calex from "./Calex";
function Intro() {
  return (
    <div className="main_header section_padding" id="home">
      <div className="main_header-content">
        <div className="text">
          {/* <img src={me} className='my-img'/> */}
          <Card
            sx={{
              maxWidth: 345,
              overflow: "hidden",
              position: "relative",
              "&:hover img": {
                transform: "scale(1.1)",
                transition: "transform 0.5s ease",
              },
            }}
          >
            <CardMedia component="img" height="140" src={fend} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Front-end Developer
              </Typography>
              <Typography variant="body2" color="text.secondary">
                He has a huge passion in this field. Developed a lot of love on
                front-end development. Loves designing and hence, patient too!
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              maxWidth: 345,
              overflow: "hidden",
              position: "relative",
              "&:hover img": {
                transform: "scale(1.1)",
                transition: "transform 0.5s ease",
              },
            }}
          >
            <CardMedia component="img" height="140" src={cal} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Math-Enthusiastic
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Loves Mathematics more than his life. A very good problem solver and logical thinker.
                Helps his juniors to excel in Mathematics. 
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              maxWidth: 345,
              overflow: "hidden",
              position: "relative",
              "&:hover img": {
                transform: "scale(1.1)",
                transition: "transform 0.5s ease",
              }
            }}
          >
            <CardMedia component="img" height="140" src={game} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Chess Elite
              </Typography>
              <Typography variant="body2" color="text.secondary">
                District level champion in Chess and has passion on it. 
                Learns in every game to develop a better critical thinking. 
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
export default Intro;
