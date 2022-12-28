import React from 'react'

const TabContent = ({tabs}) => {
  
  //Find retorna el objeto completo
  const tab = tabs.find(tab => tab.estado === true);  

  return (
    <div className='tabContent'>
      {tab.contenido}
    </div>
  )
}

export default TabContent