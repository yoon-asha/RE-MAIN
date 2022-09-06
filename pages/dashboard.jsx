import PropTypes from 'prop-types';
import { Box, Container, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import MyPage from '../components/dashboard/Mypage';
import Frequency from '../components/dashboard/Frequency';
import Coupon from '../components/dashboard/Coupon';
import Selling from '../components/dashboard/Selling';

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

const Dashboard = () => {
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
            <Tab label='프리퀀시' {...a11yProps(1)} />
            <Tab label='음료 쿠폰' {...a11yProps(2)} />
            <Tab label='판매하기' {...a11yProps(3)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <MyPage />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Frequency />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Coupon />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Selling />
        </TabPanel>
      </Box>
    </>
  );
};

export default Dashboard;
