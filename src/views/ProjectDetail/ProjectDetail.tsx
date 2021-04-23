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
  DeveloperBoard,
  Code,
  Layers,
  Home,
} from '@material-ui/icons'
import styled from 'styled-components'
import projectDetail from '../../mock/projectDetail.json'

const StyledCardActionArea = styled(CardActionArea)`
  text-align: right;
  padding: 8px;
`

const StyledRightIcon = styled(ChevronRight)`
  vertical-align: -10px;
`

const StyledListIcon = styled(ListIcon)`
  vertical-align: -6px;
`

const StyledButton = styled(Button)`
  height: 55px;
`
// Build the project description using a Typography component for fancier display
const ProjectDetail = () => {
  const projectFilesTitle = (
    <Typography>
      <StyledListIcon />
      Project files
    </Typography>
  )

  // Build the project title using a Typography component for fancier display
  const getProjectTitle = (name: any) => (
    <Typography>
      {name}
      <IconButton href='#/'>
        <Home />
      </IconButton>
    </Typography>
  )

  // Switch statement for translating type to an actual component
  const getTypeIcon = (type: string) => {
    let icon
    switch (type) {
      case 'PDF':
        icon = <PictureAsPdf />
        break
      case 'Gerber':
        icon = <DeveloperBoard />
        break
      case 'Code':
        icon = <Code />
        break
      case 'CAD':
        icon = <Layers />
        break
      default:
        icon = <Folder />
    }
    return icon
  }

  return (
    <Card style={{margin: '20vh 20vw 20vh 20vw'}}>
      <Card style={{padding: 16}}>
        <CardHeader title={getProjectTitle(projectDetail.name)} />
        <CardActions>
          <Add />
          <Delete />
          <Settings />
        </CardActions>
        <CardContent>{projectDetail.description}</CardContent>
        <StyledCardActionArea>
          <Button
            href='#/Documentation'
            style={{textDecoration: 'none', color: '#3366bb'}}>
            Documentation
            <StyledRightIcon />
          </Button>
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
            {/* Iterate over all the versions in the array and print them as options 1 by 1 */}
            {projectDetail.version.map((version) => (
              <MenuItem value={version}>{version}</MenuItem>
            ))}
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
            {/* Iterate over all files listed as being part of this project and render them with appropriate icons */}
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
