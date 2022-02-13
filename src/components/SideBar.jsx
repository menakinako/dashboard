import { makeStyles } from "@material-ui/core";
import { Box, Typography } from "@mui/material";
import { Navigation } from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import BrushIcon from '@mui/icons-material/Brush';
import TimelineIcon from '@mui/icons-material/Timeline';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HelpCenterOutlinedIcon from '@mui/icons-material/HelpCenterOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import FlightTakeoffOutlinedIcon from '@mui/icons-material/FlightTakeoffOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import { useHistory, useLocation } from "react-router-dom";

const useStyles = makeStyles(theme=>({
    container:{
        width:"20%",
        [theme.breakpoints.down('md')]: {
          width:"100%",
        },
    }
}))


const Sidebar =()=>{
    const classes = useStyles();
    const history = useHistory();
    return(
   <Box className={classes.container}>
    <Box>
        <Typography>Logo</Typography>
    </Box>
       <Navigation
            // you can use your own router's api to get pathname
            activeItemId="/Admin" 
             onSelect={({ itemId }) => {
             history.push(itemId);
          }}
            items={[
              {
                title: 'Getting Started',
                elemBefore: () => <FlightTakeoffOutlinedIcon />,
              },
              {
                title: 'Reports',
                elemBefore: () => <AssessmentOutlinedIcon />,
                subNav: [
                  {
                    title: 'Sales',
                    itemId: '',
                  },
                  {
                    title: 'Usage',
                    itemId: '/',
                  },
                  {
                    title: 'Live Tests',
                    itemId: '/',
                  },
                  {
                    title: 'Live Classes',
                    itemId: '/',
                  },
                  {
                    title: 'Experiments',
                    itemId: '/',
                  },
                ],
              },
              {
                title: 'Contents',
                elemBefore: () => <ContentCopyIcon />,
                subNav: [
                  {
                    title: 'Course',
                    itemId: '/',
                  },
                  {
                    title: 'Asset Libraries',
                    itemId: '/',
                  },
                  {
                    title: 'Packages',
                    itemId: '/',
                  },
                  {
                    title: 'Assignments',
                    itemId: '/',
                  },
                  {
                    title: 'live Test',
                    itemId: '/',
                  },
                ],
              },
            ]}
          />
           <Navigation
            // you can use your own router's api to get pathname 
             onSelect={({ itemId }) => {
             history.push(itemId);
          }}
            items={[
              {
                title: 'Users',
                elemBefore: () => <GroupOutlinedIcon />,
                subNav: [
                  {
                    title: 'Admin',
                    itemId: '/Admin',
                  },
                  {
                    title: 'Learners',
                    itemId: '',
                  },
                  {
                    title: 'Instructors',
                    itemId: '/',
                  },
                  {
                    title: 'Subscribers',
                    itemId: '/',
                  }
                ],
              }
            ]}
          />
           <Navigation
            // you can use your own router's api to get pathname
            activeItemId="/management/members"  
             onSelect={({ itemId }) => {
             history.push(itemId);
          }}
            items={[
                {
                    title: 'Engagements',
                    elemBefore: () => <ForumOutlinedIcon />,
                    subNav: [
                      {
                        title: 'Public Forum',
                        itemId: '/',
                      },
                      {
                        title: 'Course View',
                        itemId: '/',
                      },
                      {
                        title: 'Messengers',
                        itemId: '/',
                      }
                    ],
                  },
            ]}
          />
          <Navigation
            // you can use your own router's api to get pathname
            activeItemId="/management/members"  
             onSelect={({ itemId }) => {
             history.push(itemId);
          }}
            items={[
              {
                title: 'Design',
                elemBefore: () => <BrushIcon />,
                subNav: [
                  {
                    title: 'Website',
                    itemId: '/',
                  },
                  {
                    title: 'Page Builders',
                    itemId: '/',
                  },
                  {
                    title: 'Mobile Apps',
                    itemId: '/',
                  },
                  {
                    title: 'languages',
                    itemId: '/',
                  }
                ],
              },
            ]}
          />
          <Navigation
            // you can use your own router's api to get pathname
            activeItemId="/"  
             onSelect={({ itemId }) => {
             history.push(itemId);
          }}
            items={[
              {
                title: 'Marketing',
                elemBefore: () => <TimelineIcon />,
                subNav: [
                  {
                    title: 'Blogs',
                    itemId: '/',
                  },
                  {
                    title: 'promo Codes',
                    itemId: '/',
                  },
                  {
                    title: 'Credits',
                    itemId: '/',
                  },
                  {
                    title: 'Settings',
                    itemId: '/',
                  }
                ],
              }
            ]}
          />
          <Navigation
            // you can use your own router's api to get pathname
            activeItemId="/management/members"  
             onSelect={({ itemId }) => {
             history.push(itemId);
          }}
            items={[
              {
                title: 'Integrations',
                elemBefore: () => <IntegrationInstructionsIcon />,
                subNav: [
                  {
                    title: 'Third Party',
                    itemId: '/',
                  },
                  {
                    title: 'API',
                    itemId: '/',
                  },
                  {
                    title: 'Logs',
                    itemId: '/',
                  }
                ],
              },
              {
                title: 'Settings',
                elemBefore: () => <SettingsIcon />,
              },
              {
                title: 'Help Center',
                elemBefore: () => <HelpCenterOutlinedIcon />
              }
            ]}
          />
          <Navigation
            // you can use your own router's api to get pathname
            activeItemId="/"  
             onSelect={({ itemId }) => {
             history.push(itemId);
          }}
            items={[
              {
                title: 'Account',
                elemBefore: () => <AccountCircleOutlinedIcon />,
                subNav: [
                  {
                    title: 'My Profile',
                    itemId: '/',
                  },
                  {
                    title: 'Refferals',
                    itemId: '/',
                  }
                ],
              },
            ]}
          />
   </Box>
    )
}

export default Sidebar;