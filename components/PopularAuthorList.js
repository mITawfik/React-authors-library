import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import {Fragment} from 'react'

import { POPULAR_AUTHORS } from '../utils/constants/popular_authors';

export default function PopularAuthorList(props){
    return  <Grid item xs={4}>              
              <Box sx={{width: '100%'}}>
                <Typography
                  component="h1"
                  variant="h4"
                  align="center"
                  color="text.primary"
                  gutterBottom
                >
                  Popular Authors
                </Typography>
                <List sx={{width: '100%'}}>
                  <Divider />
                  {POPULAR_AUTHORS.map((author, index)=> {
                    return <Fragment key={index}>
                      <ListItem
                        secondaryAction={
                          <Button
                           onClick={(e)=>{props.setAuthorKey(author.key)}}
                          >show</Button>
                        }
                      >
                        <ListItemText primary={author.name}></ListItemText>
                      </ListItem>
                      <Divider />
                    </Fragment>
                  })}
                </List>
              </Box>
            </Grid>
}