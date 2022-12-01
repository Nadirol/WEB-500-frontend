import Heatmap from './HomeSidebarHeatmap'
import Sidebar from './HomeSidebar'
import SidebarModal from './HomeModal'
import { useState } from 'react'

const Main = ({ modalState }: { modalState: Boolean }) => {
  return (
    <div id='main' className='col-span-4 relative'>
      <Heatmap />
      {modalState && <SidebarModal modalState={modalState} />}
    </div>
  )
}

const Home = () => {
  const [modalState, setModalState] = useState<Boolean>(false)

  return (
    <div className='grid grid-cols-5'>
      <Sidebar setModalState={setModalState} modalState={modalState} />
      <Main modalState={modalState} />
    </div>
  )
}

export default Home
