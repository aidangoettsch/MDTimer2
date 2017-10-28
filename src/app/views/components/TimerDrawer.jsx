import React from 'react'

import Drawer from 'material-ui/Drawer'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import List, { ListItem, ListItemText, ListSubheader } from 'material-ui/List'
import Divider from 'material-ui/Divider'

class TimerDrawer extends React.Component {
  render () {
    return (
      <div>
        <IconButton className='menu-button' color="contrast" aria-label="Menu" onClick={() => this.props.openDrawer()}>
          <MenuIcon />
        </IconButton>
        <Drawer open={this.props.open} onRequestClose={() => this.props.closeDrawer()}>
          <div
            tabIndex={0}
            role="button"
            onClick={() => this.props.closeDrawer()}
            onKeyDown={() => this.props.closeDrawer()}>
            <List>
              <ListItem button className={this.props.activePage === '/timer' ? 'list-active' : ''}>
                <ListItemText classes={{
                  text: this.props.activePage === '/timer' ? 'list-text-active' : ''
                }} primary="Timer" />
              </ListItem>
              <ListItem button className={this.props.activePage === '/settings' ? 'list-active' : ''}>
                <ListItemText classes={{
                  text: this.props.activePage === '/settings' ? 'list-text-active' : ''
                }} primary="Settings" />
              </ListItem>
            </List>
            <Divider className='drawer-divider' />
            <List>
              <ListSubheader>Sessions</ListSubheader>
              <ListItem button className={this.props.activeSession === 0 ? 'list-active' : ''}>
                <ListItemText classes={{
                  text: this.props.activeSession === 0 ? 'list-text-active' : ''
                }} primary="Session 1" />
              </ListItem>
              <ListItem button className={this.props.activeSession === 1 ? 'list-active' : ''}>
                <ListItemText classes={{
                  text: this.props.activeSession === 1 ? 'list-text-active' : ''
                }} primary="Session 2" />
              </ListItem>
            </List>
          </div>
        </Drawer>
      </div>
    )
  }
}

export default TimerDrawer