import React from 'react'
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Typography,
} from '@material-ui/core'
import {AddCircleOutline, ArrowBack} from '@material-ui/icons'
import projectDocuments from '../../mock/projectDocumentation.json'

const ProjectDocumentation = () => (
  <Card style={{margin: '20vh 20vw 20vh 20vw'}}>
    <Grid container style={{margin: '16px 0px 16px 0px'}}>
      <Grid item xs={4} md={4} lg={4}>
        <Button
          style={{margin: '14px 0px 0px 16px'}}
          href='#/Project/1'
          variant='outlined'
          color='primary'>
          <ArrowBack />
          Back to Project
        </Button>
      </Grid>
      <Grid item xs={7} md={7} lg={7} />
      <Grid item xs={1} md={1} lg={1}>
        <IconButton>
          <AddCircleOutline fontSize='large' />
        </IconButton>
      </Grid>
    </Grid>
    {projectDocuments.documents.map((items) => (
      <Card style={{padding: 16, margin: '16px 0px 16px 0px'}}>
        <CardHeader
          title={items.title}
          action={
            <Typography style={{color: '#3366bb', marginTop: 8}}>
              Edit
            </Typography>
          }
        />
        <CardContent>
          <Typography variant='body1' style={{whiteSpace: 'pre-line'}}>
            {items.body}
          </Typography>
        </CardContent>
      </Card>
    ))}
  </Card>
)

ProjectDocumentation.displayName = 'ProjectDocumentation'
export default ProjectDocumentation
