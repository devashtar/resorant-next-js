export type Bool = boolean | undefined

export type TypeCallWrapperIcon = {
  name?: string
  isBGLogo?: Bool
  active: Bool
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
  IconComponent: React.FC<{}>
}
