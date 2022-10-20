import React from 'react'
import { FaWindowClose } from 'react-icons/fa'
import { useAuthContext } from '../contexts/auth_context';



function Alert() {
  const{alert,hideAlert} = useAuthContext();

  let css = ' alert-container';
  if(alert.show){
    css += ' alert-show';
    if(alert.type === "danger")
      css += " alert-danger";
  }

  return (
    <div className={css}>
      <div className='alert'>
        <p>{alert.show && alert.msg}</p>
        <button className='alert-close'
                type='button'
                onClick={hideAlert}
        >
          <FaWindowClose/>
        </button>
      </div>
    </div>
  )
}

export default Alert