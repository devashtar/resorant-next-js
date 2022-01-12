import React, { useMemo, useState } from 'react'
import * as Styled from './styled'
import { Nav } from '@containers/Nav'

import { ModalPayment } from '@containers/ModalPayment'
import { SectionHome } from '@containers/Section.Home'
import { SectionDiscount } from '@containers/Section.Discount'
import { SectionDashboard } from '@containers/Section.Dashboard'
import { SectionMessage } from '@containers/Section.Message'
import { SectionNotification } from '@containers/Section.Notification'
import { SectionSetting } from '@containers/Section.Setting'

import { observer } from 'mobx-react-lite'
import { storeNavMenu } from '@store/StoreNavMenu'

export const Main: React.FC<{}> = observer(() => {
  const CurrentSection = useMemo(() => {
    const name = Object.keys(storeNavMenu.activeItem)[0]

    const listComponents = new Map([
      ['home', <SectionHome />],
      ['discount', <SectionDiscount />],
      ['dashboard', <SectionDashboard />],
      ['message', <SectionMessage />],
      ['notification', <SectionNotification />],
      ['setting', <SectionSetting />]
    ])

    return listComponents.get(name)
  }, [storeNavMenu.activeItem])

  return (
    <Styled.Main>
      {storeNavMenu.displayModal && <ModalPayment />}
      <Nav />
      {CurrentSection}
    </Styled.Main>
  )
})
