import PropTypes from 'prop-types';
import { Box, Button, Tab, Tabs, Typography } from "@mui/material"
import { useState } from 'react';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
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
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Dashboard = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return <>
  <Box sx={{ width: '100%' }}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
      >
        <Tab label="마이페이지" {...a11yProps(0)} />
        <Tab label="프리퀀시" {...a11yProps(1)} />
        <Tab label="음료 쿠폰" {...a11yProps(2)} />
        <Tab label="판매하기" {...a11yProps(3)} />
      </Tabs>
    </Box>
    <TabPanel value={value} index={0}>
      마이페이지
    </TabPanel>
    <TabPanel value={value} index={1}>
      프리퀀시
    </TabPanel>
    <TabPanel value={value} index={2}>
      음료 쿠폰
    </TabPanel>
    <TabPanel value={value} index={3}>
      판매하기
    </TabPanel>
  </Box>
  </>
}

export default Dashboard