import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Card,
  Grid,
  Typography,
} from '@material-ui/core'
import React from 'react'

const App = () => {
  const projects = [
    {
      name: 'Project Name 1',
      detail:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    },
    {
      name: 'Project Name 2',
      detail:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    },
  ]

  return (
    <Card style={{margin: '20vh 20vw 20vh 20vw'}}>
      <Grid container style={{margin: '16px 0px 16px 0px'}}>
        <Grid item xs={1} md={1} lg={1} />
        <Grid item xs={2} md={2} lg={2}>
          <Avatar />
        </Grid>
        <Grid item xs={8} md={8} lg={8}>
          {projects.map((value) => (
            <Accordion>
              <AccordionSummary>
                <Typography>{value.name}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{value.detail}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>
        <Grid item xs={1} md={1} lg={1} />
      </Grid>
    </Card>
  )
}

export default App
