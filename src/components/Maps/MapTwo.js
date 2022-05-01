import { YMaps, Map } from 'react-yandex-maps';

const YanMap = () => (
  <YMaps>
    <div>

      <Map defaultState={{ center: [43.23511753954379,76.90995074184835], zoom: 16 }} style={{height: '1100px', weidth: '1320px'}} />
      
    </div>
  </YMaps>
);
export default YanMap;