import { NavItems } from './Nav'
import { AppContext } from './AppProvider'

const OverlayMenu = props => {
  return (
    <AppContext.Consumer>
      {(context) => {
        let className = `${props.className} ${context.state.showMenu ? 'show' : ''}`

        return (
          <ul className={className}>
            <NavItems {...context} />
          </ul>
        )
      }}
    </AppContext.Consumer>
  )
}

export default OverlayMenu
