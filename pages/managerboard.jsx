import PropTypes from 'prop-types';
import { Box, Container, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import MyPage from '../components/managerBoard/ManagerPage';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Container>{children}</Container>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

const ManagerBoard = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: '100%', mt: 5 }}>
        {/* <Container mt={10}> */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label='tabs'
            sx={{ justifyContent: 'space-around' }}
          >
            <Tab label='마이페이지' {...a11yProps(0)} />
            <Tab label='발행페이지' {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <MyPage />
        </TabPanel>
        <TabPanel value={value} index={1}>
            발행페이지~~~
        </TabPanel>
      </Box>
    </>
  );
};

export default ManagerBoard;
