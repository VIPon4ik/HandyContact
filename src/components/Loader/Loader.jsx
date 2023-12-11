import React from 'react';
import Modal from 'components/Modal/Modal';
import { Oval } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Modal>
      <Oval
        color="rgb(25, 118, 210)"
        secondaryColor="#1163c1"
        height={100}
        width={100}
      />
    </Modal>
  );
};

export default Loader;
