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
import {Add, ExitToApp, Settings} from '@material-ui/icons'
import ReactLogo from '../../images/react-logo.svg'
import projectList from '../../mock/projectList.json'

const OverView = () => {
  const {projects} = projectList

  return (
    <Card style={{margin: '20vh 20vw 20vh 20vw'}}>
      <Grid container style={{margin: '16px 0px 16px 0px'}}>
        <Grid item xs={1} md={1} lg={1} />
        <Grid item xs={2} md={2} lg={2}>
          <Avatar src={ReactLogo} />
        </Grid>
        <Grid item xs={8} md={8} lg={8}>
          <Card>
            <CardActions>
              <Add />
              <Settings />
              <ExitToApp />
            </CardActions>
            <CardContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </CardContent>
          </Card>
          {projects.map((value) => (
            <Accordion style={{margin: '16px 0px 16px 0px'}}>
              <AccordionSummary>
                <Typography>{value.name}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{value.detail}</Typography>
                <Button variant='outlined' href={`/${value.id}`}>
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
