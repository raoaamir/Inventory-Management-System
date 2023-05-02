import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const TabComponent = ({labels, setTab, orientation})=>{
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setTab(newValue)
};

  return (
    <Box
      sx={{bgcolor: 'background.primary', display: 'flex', height: 224 , marginTop:'30px'}}
    >
      <Tabs
        orientation={orientation}
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{borderColor: 'divider'}}
      >
        {labels.map((label, i)=>{
          return(
            <Tab  sx={{color : 'black' }} label={label}  value={i}/>
          )
        })}
      </Tabs>
    </Box>
  );
}

export default TabComponent;