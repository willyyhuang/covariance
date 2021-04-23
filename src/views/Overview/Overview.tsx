import React from 'react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {Add, ExitToApp, Settings} from '@material-ui/icons'
import UserAvatar from '../../images/avatar.png'
import projectList from '../../mock/projectList.json'

const OverView = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    large: {
      width: theme.spacing(14),
      height: theme.spacing(14),
    },
  }))
  const {projects} = projectList
  const classes = useStyles()

  return (
    <Card style={{margin: '20vh 20vw 20vh 20vw'}}>
      {/* Create Main Profile Card */}
      <Grid container style={{margin: '16px 0px 16px 0px'}}>
        <Grid item xs={1} md={1} lg={1} />
        <Grid item xs={2} md={2} lg={2}>
          <Avatar className={classes.large} src={UserAvatar} />
        </Grid>
        <Grid item xs={8} md={8} lg={8}>
          <Card>
            <CardActions>
              <Add />
              <Settings />
              <ExitToApp />
            </CardActions>
            <CardContent>
              I am a young and aspiring engineering student with an insatiable need to create, tinker, learn,
              and explore what is really possible with the power of software (and it&apos;s marriage to hardware).
              I try and bring a high level of positivity and morale to teammates; helping people and fixing problems are where I excel.
            </CardContent>
          </Card>
          {/* Iterate over list of projects, create expanding accordion with tile and project description */}
          {projects.map((value) => (
            <Accordion style={{margin: '16px 0px 16px 0px'}}>
              <AccordionSummary>
                <Typography>{value.name}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{value.detail}</Typography>
                <Button variant='outlined' href={`#/Project/${value.id}`}>
                  Open
                </Button>
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>
        <Grid item xs={1} md={1} lg={1} />
      </Grid>
    </Card>
  )
}

OverView.displayName = 'OverView'
export default OverView
