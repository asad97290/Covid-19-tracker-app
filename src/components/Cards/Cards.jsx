import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import Countup from "react-countup"; // for number animation
import cx from "classnames"; // for using multiple class names in className
import styles from "./Cards.module.css";

function Cards({ data: { confirmed, recovered, deaths, lastUpdate } }) {
  if (!confirmed) {
    return "loading...";
  }
  return (
    <div className={styles.container}>
      <Grid container justify="center">
        <Grid
          item
          component={Card}
          xs={12} // on small screen devices take full screen i.e 12 columbs
          md={3} // on mediam or higher screen devices take 3 columbs
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography
              color="textSecondary"
              gutterBottom //gutterBottom add bottom padding
            >
              Infected
            </Typography>
            <Typography variant="h5">
              <Countup
                start={0}
                end={confirmed.value}
                duration={2.75}
                separator=","
              ></Countup>
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of active cases of Covid-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12} // on small screen devices take full screen i.e 12 columbs
          md={3} // on mediam or higher screen devices take 3 columbs
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">
              <Countup
                start={0}
                end={recovered.value}
                duration={2.5}
                separator=","
              ></Countup>
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of recoveries from Covid-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12} // on small screen devices take full screen i.e 12 columbs
          md={3} // on mediam or higher screen devices take 3 columbs
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              <Countup
                start={0}
                end={deaths.value}
                duration={2.5}
                separator=","
              ></Countup>
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of deaths from Covid-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
}
export default Cards;
