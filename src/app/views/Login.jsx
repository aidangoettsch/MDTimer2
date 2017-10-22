import React from 'react'

import Typography from 'material-ui/Typography';
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'

class Login extends React.Component {
  render () {
    return (
      <div className='loginContainer'>
        <Card className='loginCard'>
          <CardContent>
            <Typography type="headline" component="h2">
              Login
            </Typography>
            <Typography component="p">
              Don't have an account? Sign up!
            </Typography>
          </CardContent>
          <CardActions>
            <Button dense color="primary">
              Cancel
            </Button>
            <Button dense color="primary">
              Login
            </Button>
          </CardActions>
        </Card>
      </div>
    )
  }
}

export default Login
