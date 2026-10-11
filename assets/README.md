# Map-only ECharts bundle

The site serves ECharts from this repository instead of a blocking external CDN.
Only MapChart, GeoComponent, TooltipComponent and CanvasRenderer are included.
Version: ECharts 5.4.3, zrender 5.4.4, tslib 2.3.0; bundled with esbuild 0.25.12.
Licenses are preserved in THIRD_PARTY_LICENSES.txt and the generated script.

To rebuild in a temporary directory:

```sh
npm install --save-exact echarts@5.4.3 zrender@5.4.4 tslib@2.3.0 esbuild@0.25.12
# Copy echarts-map-entry.js into that directory first.
npx esbuild echarts-map-entry.js --bundle --minify --format=iife --global-name=echarts --target=es2017 --legal-comments=eof --outfile=echarts-map-5.4.3.min.js
```

Copy the generated file back to assets/. If changing its contents later, use a new
versioned filename and update the script reference in index.html to avoid stale caches.
The source china.json coordinates and policy entries are unchanged.
