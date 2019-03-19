import React from 'react'
import PropTypes from 'prop-types'
import marked from 'marked'
import dateFormat from 'dateformat'
import Avatar from '@material-ui/core/Avatar'
import { withStyles } from '@material-ui/core/styles'

import { replyStyles } from './styles'

const Reply = ({ reply, classes }) => (
  <div className={classes.root}>
    <div className={classes.left}>
      <Avatar src={reply.author.avatar_url} />
    </div>
    <div className={classes.right}>
      <span>{`${reply.author.loginname} ${dateFormat(reply.create_at, 'yy-mm-dd hh:mm:ss')}`}</span>
      <p dangerouslySetInnerHTML={{ __html: marked(reply.content) }} />
    </div>
  </div>
)

Reply.propTypes = {
  reply: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(replyStyles)(Reply)
