/// <reference types="vite/client" />
type identityCard = {
  /**
   * @description 姓名
   */
  name: string,
  /**
   * @description 身份证号码
   */
  number: string
}

type identityCardProps = Extract<identityCard, 'name' | 'number'>