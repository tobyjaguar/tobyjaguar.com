
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

const MyButton = withStyles({
  root: {
      borderRadius: 5,
      border: 0,
      height: 40,
      padding: '0 30px',
      marginRight: '3em',
  }
})(Button)

export default MyButton
