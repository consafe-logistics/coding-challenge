import { Avatar, Box, Button, Grid, List, ListItem, ListItemAvatar, ListItemText, Paper, Stack, TextField, Typography } from '@mui/material';
import { Observer } from 'mobx-react-lite';
import { ReactElement, useState } from 'react';
import { appContainer } from '../../Composition/AppContainer';
import { withInstances } from '../../utils/withInstances';
import { SearchType } from './SearchViewModel';
import ImageIcon from '@mui/icons-material/Image';

// class to style button component
const ButtonStyle = {
  backgroundColor: '#3f51b5',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#3f51b5',
    color: '#fff',
  },
};

function SearchResultsPage({ viewModel }:{ viewModel: SearchType | undefined }): ReactElement {
  const [value, setValue] = useState<any>(viewModel?.searchValue);
  const [results, setResults] = useState({ data: []});
  
  let model = appContainer.get<any>('SEARCH_PAGE');

  function updateTextValue (e:any) {
    setValue(model.searchValue = e.target.value);
  }

  const onSearch = async () => {
    var resp = await model.search(value);
    const newData = {
      data: filteredData(resp, 'title', value),
    }
    setResults(newData);
  };

  var selected:boolean = false;

  return <Observer>{() => <Box>
    <Grid container spacing={2}>
    <Grid item md={4}>

    <Stack direction="row">

    <TextField
      id="outlined-basic"
      label="Search for an article"
      variant="outlined"
      value={model.searchValue}
      onChange={updateTextValue}
    />
    <Button style={ButtonStyle} sx={{ marginLeft: 2 }} variant="contained" onClick={onSearch}>Search</Button>
    </Stack>
    {selected && <Box marginTop={2}><Paper sx={{ padding: 2 }}>
      <strong>Title</strong>
      <p>description</p>
      <p style={{ float: 'right'}}>price</p>
      <div style={{ clear: 'both'}}></div>
    </Paper></Box>}
    </Grid>
    <Grid item md={8}>

      <Box alignItems="center" flexGrow={1}>
        <Typography align="center" variant="h5">Search results</Typography>
       </Box>
      {!results && <Box>No results</Box>}
      {<List>
          {(results) && results.data.map((result: any) => (
            <ListItem>
               <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
              <ListItemText primary={result.title} secondary={result.description} />
            </ListItem>
          ))}
        </List>}
      </Grid>
    </Grid>
    </Box>}</Observer>;
}

export default withInstances({ viewModel: 'SEARCH_PAGE' }, SearchResultsPage);

function filteredData(response: any, param: string, value: string) {
  return response.data.filter((item: any) => {
    return item[param].toLowerCase().includes(value.toLowerCase());
  });
};