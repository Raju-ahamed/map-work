import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { APIProvider, Map } from '@vis.gl/react-google-maps'
import { mapApiKey } from './map-api-key.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <APIProvider apiKey={mapApiKey}>
      <Map
        style={{ width: '100vw', height: '100vh' }}
        defaultCenter={{ lat: 22.54992, lng: 0 }}
        defaultZoom={3}
        gestureHandling='greedy'
        disableDefaultUI
      />
      <App/>
    </APIProvider>
  </StrictMode>,
)
