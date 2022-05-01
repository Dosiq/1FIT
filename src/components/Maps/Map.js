import { YMaps, Map } from 'react-yandex-maps';

const YanMap = () => (
  <YMaps>
    <div>

      <Map defaultState={{ center: [43.23511753954379,76.90995074184835], zoom: 16 }} style={{height: '480px', weidth: '1180px'}} />
      
    </div>
  </YMaps>
);
export default YanMap;