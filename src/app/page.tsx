import { FC } from 'react'
import Authorize from './components/Authorize'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return (<div>
    <Authorize/>
  </div>)
}

export default page