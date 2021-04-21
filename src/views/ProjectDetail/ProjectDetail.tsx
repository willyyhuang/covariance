import React from 'react'
import {
  Button,
  Card,
  CardContent,
  CardActions,
  CardActionArea,
  Grid,
  Select,
  Typography,
} from '@material-ui/core'
import {
  Add,
  Delete,
  Settings,
  ChevronRight,
  Label,
  Publish,
} from '@material-ui/icons'
import styled from 'styled-components'

const StyledCardActionArea = styled(CardActionArea)`
  color: #3366bb;
  text-align: right;
  padding: 8px;
`

const StyledRightIcon = styled(ChevronRight)`
  vertical-align: -8px;
`

const StyledTypography = styled(Typography)`
  font-size: 80%;
`
const ProjectDetail = () => {
  const projectDetail = {
    name: 'secret hardware 1',
    description:
      'Donec pulvinar ultrices eros a iaculis. Vestibulum velit ipsum, ornare et ante et, gravida interdum mauris. Quisque facilisis erat eget orci vehicula pulvinar. Curabitur iaculis lacus ac est posuere gravida. Cras tempor ex vel orci viverra, vel fringilla nibh facilisis. Curabitur venenatis risus in elementum ultrices. Nunc vel nisl convallis, fringilla quam quis, varius nisl. In at porttitor enim, a dictum nibh. Integer at blandit diam. Mauris eget sem blandit magna rhoncus molestie. Pellentesque laoreet auctor hendrerit. Maecenas sed gravida justo. Maecenas ut molestie elit. Curabitur viverra nec tortor quis tincidunt. Vestibulum sed orci vel augue lacinia interdum eget sed metus. Suspendisse bibendum blandit elementum.',
    version: 1.0,
    files: [
      {
        type: 'PDF',
        name: 'ultrices eros a iaculis',
      },
    ],
  }
  return (
    <Card style={{margin: '20vh 20vw 20vh 20vw'}}>
      <Card>
        <CardActions>
          <Add />
          <Delete />
          <Settings />
        </CardActions>
        <CardContent>{projectDetail.description}</CardContent>
        <StyledCardActionArea>
          Documentation
          <StyledRightIcon />
        </StyledCardActionArea>
      </Card>
      <Grid container style={{margin: '16px 0px 16px 0px'}}>
        <Grid item xs={1} md={1} lg={1} />
        <Grid item xs={4} md={4} lg={4}>
          <StyledTypography>Version: </StyledTypography>
          <Select style={{width: '60%'}} />
        </Grid>
        <Grid item xs={2} md={2} lg={2} />
        <Grid item xs={3} md={3} lg={3}>
          <Button
            variant='outlined'
            startIcon={<Label />}
            style={{marginTop: 8}}>
            Tag New Version
          </Button>
        </Grid>
        <Grid item xs={2} md={2} lg={2}>
          <Button
            variant='outlined'
            startIcon={<Publish />}
            style={{marginTop: 8}}>
            Upload
          </Button>
        </Grid>
      </Grid>
    </Card>
  )
}

ProjectDetail.displayName = 'ProjectDetail'
export default ProjectDetail
