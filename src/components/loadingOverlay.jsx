import React from 'react'
import { Overlay, Loader } from '@mantine/core'

function loadingOverlay({visible}) {
  return (
    <Overlay visible={visible} opacity={0.6} color="#000" blur={2}>
      <Loader size="xl" color="white" />
    </Overlay>
  );
}

export default loadingOverlay