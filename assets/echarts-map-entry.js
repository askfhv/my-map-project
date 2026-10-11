import { use, init, registerMap, getInstanceByDom, setPlatformAPI, version } from 'echarts/core';
import { MapChart } from 'echarts/charts';
import { GeoComponent, TooltipComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
use([MapChart, GeoComponent, TooltipComponent, CanvasRenderer]);
export { init, registerMap, getInstanceByDom, setPlatformAPI, version };
