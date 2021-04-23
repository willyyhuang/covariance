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
          {/* Build the top navigation, Back button + Add button */}
          <Box display='flex'>
              <Button onClick={BrowserRouter.goBack} style={{margin: '2vw 2vh 2vw 2vh'}} variant='outlined' color='primary'>
                  <ArrowBack />
                  Back to Project
              </Button>
              {/* OMEGALUL at the margins, i know, i know, very messy... */}
              <IconButton style={{margin: '0vw 0vh 0vw 90vh'}}>
                <AddCircleOutline fontSize='large' />
              </IconButton>
          </Box>
          {/* Build a list of cards representing documentation entries */}
          {projectDocuments.documents.map((items) => (
                  <Card style={{margin: '2vw 2vh 2vw 2vh'}}>
                      <CardHeader title={items.title} action='Edit' />
                      <CardContent style={{margin: '0vw 2vh 0vw 2vh'}}>
                          {/* Typography component so the \n's render properly from our JSON */}
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
