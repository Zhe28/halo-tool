/// <reference types="vite/client" />
type identityCard = {
  id?: number,
  /**
   * @description 姓名
   */
  name: string,
  /**
   * @description 身份证号码
   */
  number: string,
  /**
   * @description 创建时间
   */
  createdAt?: string,
  /**
   * @description 更新时间
   */
  updatedAt?: string
}

type identityCardProps = Extract<identityCard, 'name' | 'number'>

type globalConfig = {
  theme: 'light' | 'dark' | 'auto',
  navbar: {}
  sidebar: {
    mode: 'horizontal' | 'vertical',
    isCollapse: boolean
  }
}