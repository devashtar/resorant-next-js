import React from 'react'
import { ItemNavMenu } from '@components/ItemNavMenu'
import * as Styled from './styled'
import * as SVGStock from '@assets/images/svg'
import { observer } from 'mobx-react-lite'
import { storeNavMenu } from '@store/StoreNavMenu'

export const Nav: React.FC<{}> = observer(() => {
  const HandlerMenuOnClick = (event: React.MouseEvent<HTMLElement>) => {
    const name = event.currentTarget.dataset.name!
    if (name === 'logo') return goToHome()
    if (name === 'logout') return logout()
    storeNavMenu.setActiveItem({ [name]: true })
  }

  const goToHome = () => {
    console.log('LOGO')
    storeNavMenu.setActiveItem({ ['home']: true })
  }

  const logout = () => {
    console.log('LOGOUT')
  }

  return (
    <Styled.NavMenu>
      <ItemNavMenu
        name='logo'
        isBGLogo={true}
        active={true}
        IconComponent={SVGStock.LogoVector}
        onClick={(e) => HandlerMenuOnClick(e)}
      />
      <ItemNavMenu
        name='home'
        active={storeNavMenu.activeItem.home}
        IconComponent={SVGStock.IconLineHome}
        onClick={(e) => HandlerMenuOnClick(e)}
      />
      <ItemNavMenu
        name='discount'
        active={storeNavMenu.activeItem.discount}
        IconComponent={SVGStock.IconLineDiscount}
        onClick={(e) => HandlerMenuOnClick(e)}
      />
      <ItemNavMenu
        name='dashboard'
        active={storeNavMenu.activeItem.dashboard}
        IconComponent={SVGStock.IconLineDashboard}
        onClick={(e) => HandlerMenuOnClick(e)}
      />
      <ItemNavMenu
        name='message'
        active={storeNavMenu.activeItem.message}
        IconComponent={SVGStock.IconLineMessage}
        onClick={(e) => HandlerMenuOnClick(e)}
      />
      <ItemNavMenu
        name='notification'
        active={storeNavMenu.activeItem.notification}
        IconComponent={SVGStock.IconLineNotification}
        onClick={(e) => HandlerMenuOnClick(e)}
      />
      <ItemNavMenu
        name='setting'
        active={storeNavMenu.activeItem.setting}
        IconComponent={SVGStock.IconLineSetting}
        onClick={(e) => HandlerMenuOnClick(e)}
      />
      <ItemNavMenu
        name='logout'
        active={false}
        IconComponent={SVGStock.IconLineLogOut}
        onClick={(e) => HandlerMenuOnClick(e)}
      />
    </Styled.NavMenu>
  )
})
