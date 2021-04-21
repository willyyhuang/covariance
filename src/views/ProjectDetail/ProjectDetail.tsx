import React from 'react'
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardActions,
  CardActionArea,
  CardHeader,
  Grid,
  MenuItem,
  TextField,
  Typography,
  List,
  ListItemAvatar,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core'
import {
  Add,
  Delete,
  Settings,
  ChevronRight,
  Edit,
  Folder,
  Label,
  List as ListIcon,
  PictureAsPdf,
  Publish,
  Restore,
} from '@material-ui/icons'
import styled from 'styled-components'
import projectDetail from '../../mock/projectDetail.json'

const StyledCardActionArea = styled(CardActionArea)`
  color: #3366bb;
  text-align: right;
  padding: 8px;
`

const StyledRightIcon = styled(ChevronRight)`
  vertical-align: -8px;
`

const StyledListIcon = styled(ListIcon)`
  vertical-align: -6px;
`

const StyledButton = styled(Button)`
  height: 55px;
`

const ProjectDetail = () => {
  const projectFilesTitle = (
    <Typography>
      <StyledListIcon />
      Project files
    </Typography>
  )

  const getTypeIcon = (type: string) => {
    let icon
    switch (type) {
      case 'PDF':
        icon = <PictureAsPdf />
        break
      default:
        icon = <Folder />
    }
    return icon
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
        <Grid item xs={3} md={3} lg={3}>
          <TextField
            style={{width: '80%'}}
            id='tag-version'
            select
            label='Select'
            variant='outlined'>
            <MenuItem value='1.0.0'>1.0.0</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={2} md={2} lg={2} />
        <Grid item xs={3} md={3} lg={3}>
          <StyledButton variant='outlined' startIcon={<Label />}>
            Tag New Version
          </StyledButton>
        </Grid>
        <Grid item xs={2} md={2} lg={2}>
          <StyledButton variant='outlined' startIcon={<Publish />}>
            Upload
          </StyledButton>
        </Grid>
        <Grid item xs={1} md={1} lg={1} />
      </Grid>
      <Card>
        <CardHeader title={projectFilesTitle} />
        <CardContent>
          <List>
            {projectDetail.files.map((item) => (
              <ListItem>
                <ListItemAvatar>
                  <Avatar>{getTypeIcon(item.type)}</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={item.name}
                  secondary={item.description}
                />
                <ListItemSecondaryAction>
                  <IconButton edge='end'>
                    <Restore />
                  </IconButton>
                  <IconButton edge='end'>
                    <Edit />
                  </IconButton>
                  <IconButton edge='end'>
                    <Delete />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Card>
  )
}

ProjectDetail.displayName = 'ProjectDetail'
export default ProjectDetail
