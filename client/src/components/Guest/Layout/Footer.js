import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

class Footer extends Component {
    render() {
        function Copyright() {
            return (
              <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="/">
                  BrandO
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
              </Typography>
            );
          }
        return (
        <Box mt={5} mb={5}>
            <Copyright />
        </Box>
        )
    }
}

export default Footer
