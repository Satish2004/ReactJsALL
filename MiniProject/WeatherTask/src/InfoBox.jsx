import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
const InfoBox = ({ info }) => {
  // this is initial info
  const Initial_URL =
    "https://images.unsplash.com/photo-1706382196405-21ed85dea993?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bHVzaCUyMGdyZWVufGVufDB8fDB8fHww";
  const HOT_URL =
    "https://media.istockphoto.com/id/1137759901/photo/summer-hot-weather-season-high-temperature-thermometer-with-city-view.webp?b=1&s=170667a&w=0&k=20&c=H7WvPOgOX-iVivqwBE842Wda80r7fAm5ZFalNAO-upk=";
  const RAINY_URL =
    "https://media.istockphoto.com/id/105934727/photo/rain.webp?b=1&s=170667a&w=0&k=20&c=IroMBxRXyfm4K6sLvLaBBV3Wj6Bzv1kKJtDisEo5Jhg=";
  const COLD_URL =
    "https://media.istockphoto.com/id/868098786/photo/thermometer-on-snow-shows-low-temperatures-zero-low-temperatures-in-degrees-celsius-and.webp?b=1&s=170667a&w=0&k=20&c=n21SIzH1emvYJmePa_kg8r0AcdVu2vTOk327qk4tYzE=";
  const HOT_ICON = "";

  //     let info={
  //         city:"Delhi",
  // feelslike: 24.84,
  // temp:25.05,
  // tempMin: 25.05,
  // tempMax: 25.05,
  // humadity: 'haze',
  //     };

  return (
    <div className="InfoBox">
      <br /> <br />
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={
              info.humadity > 80
                ? RAINY_URL
                : info.temp > 23
                ? HOT_URL
                : COLD_URL
            }
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <h2>
                City: {info.city}
                {info.humadity > 80 ? (
                  <AcUnitIcon></AcUnitIcon>
                ) : info.temp > 23 ? (
                  <WbSunnyIcon></WbSunnyIcon>
                ) : (
                  <ThunderstormIcon></ThunderstormIcon>
                )}
              </h2>
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              Feels Like: {info.feelslike} <br />
              Temp: {info.temp}&deg;C <br />
              Temp Min: {info.tempMin}&deg;C <br />
              Temp Max: {info.tempMax}&deg;C <br />
              Humadity: {info.humadity} <br />
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default InfoBox;
