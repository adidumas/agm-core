import { ModuleWithProviders } from '@angular/core';
import { AgmMap } from './directives/map';
import { AgmCircle } from './directives/circle';
import { AgmRectangle } from './directives/rectangle';
import { AgmInfoWindow } from './directives/info-window';
import { AgmMarker } from './directives/marker';
import { AgmPolygon } from './directives/polygon';
import { AgmPolyline } from './directives/polyline';
import { AgmPolylinePoint } from './directives/polyline-point';
import { AgmKmlLayer } from './directives/kml-layer';
import { AgmDataLayer } from './directives/data-layer';
import { LazyMapsAPILoaderConfigLiteral } from './services/maps-api-loader/lazy-maps-api-loader';
import { AgmFitBounds } from './directives/fit-bounds';
import { AgmPolylineIcon } from './directives/polyline-icon';
import { AgmTransitLayer } from './directives/transit-layer';
/**
 * @internal
 */
export declare function coreDirectives(): (typeof AgmCircle | typeof AgmRectangle | typeof AgmMarker | typeof AgmInfoWindow | typeof AgmPolygon | typeof AgmPolylinePoint | typeof AgmPolylineIcon | typeof AgmPolyline | typeof AgmKmlLayer | typeof AgmDataLayer | typeof AgmTransitLayer | typeof AgmMap | typeof AgmFitBounds)[];
/**
 * The angular-google-maps core module. Contains all Directives/Services/Pipes
 * of the core module. Please use `AgmCoreModule.forRoot()` in your app module.
 */
export declare class AgmCoreModule {
    /**
     * Please use this method when you register the module at the root level.
     */
    static forRoot(lazyMapsAPILoaderConfig?: LazyMapsAPILoaderConfigLiteral): ModuleWithProviders<AgmCoreModule>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<AgmCoreModule, [typeof ɵngcc1.AgmBicyclingLayer, typeof ɵngcc2.AgmCircle, typeof ɵngcc3.AgmDataLayer, typeof ɵngcc4.AgmFitBounds, typeof ɵngcc5.AgmInfoWindow, typeof ɵngcc6.AgmKmlLayer, typeof ɵngcc7.AgmMap, typeof ɵngcc8.AgmMarker, typeof ɵngcc9.AgmPolygon, typeof ɵngcc10.AgmPolyline, typeof ɵngcc11.AgmPolylineIcon, typeof ɵngcc12.AgmPolylinePoint, typeof ɵngcc13.AgmRectangle, typeof ɵngcc14.AgmTransitLayer], never, [typeof ɵngcc1.AgmBicyclingLayer, typeof ɵngcc2.AgmCircle, typeof ɵngcc3.AgmDataLayer, typeof ɵngcc4.AgmFitBounds, typeof ɵngcc5.AgmInfoWindow, typeof ɵngcc6.AgmKmlLayer, typeof ɵngcc7.AgmMap, typeof ɵngcc8.AgmMarker, typeof ɵngcc9.AgmPolygon, typeof ɵngcc10.AgmPolyline, typeof ɵngcc11.AgmPolylineIcon, typeof ɵngcc12.AgmPolylinePoint, typeof ɵngcc13.AgmRectangle, typeof ɵngcc14.AgmTransitLayer]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<AgmCoreModule>;
}
