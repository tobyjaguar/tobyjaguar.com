
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'

const MyPaper = withStyles({
  root: {
      backgroundColor: '#ffffff',
      margin: 0,
      display: 'block',
      padding: '1em',

  }
})(Paper)

export default MyPaper
