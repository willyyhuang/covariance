import React from 'react'
import {Box, Button, Card, CardContent, CardHeader, IconButton, List, Typography} from '@material-ui/core'
// import {Edit} from '@material-ui/icons'
import {AddCircleOutline, ArrowBack} from '@material-ui/icons'
import {BrowserRouter} from 'react-router-dom'
import projectDocuments from '../../mock/projectDocumentation.json'


type ProjectDocumentationPropType = {}

const ProjectDocumentation = (props: ProjectDocumentationPropType) => {
  console.log(props)
  return (
      <List>
          <Box display='flex'>
              <Button onClick={BrowserRouter.goBack} style={{margin: '2vw 2vh 2vw 2vh'}} variant='outlined' color='primary'>
                  <ArrowBack />
                  Back to Project
              </Button>
              <IconButton style={{margin: '0vw 0vh 0vw 90vh'}}>
                <AddCircleOutline fontSize='large' />
              </IconButton>
          </Box>
          {projectDocuments.documents.map((items) => (
                  <Card style={{margin: '2vw 2vh 2vw 2vh'}}>
                      <CardHeader title={items.title} action='Edit' />
                      <CardContent style={{margin: '0vw 2vh 0vw 2vh'}}>
                          <Typography variant='body1' style={{whiteSpace: 'pre-line'}}>
                              {items.body}
                          </Typography>
                      </CardContent>
                  </Card>
          ))}
      </List>
  )
}

ProjectDocumentation.displayName = 'ProjectDocumentation'
export default ProjectDocumentation
