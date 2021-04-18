import React, {useState, useEffect} from 'react'
import { Modal, Button } from 'antd';
import Axios from 'axios'
import URL from '../utils/URL'

const ModalComponent = ({isModalVisible, titleModal, handleOk, handleCancel}:any) => {




  return (
    <div>
     
      
      <Modal
        title={titleModal}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}>

      
      </Modal>
</div>
  )
}

export default ModalComponent