import { factory as cssFactory } from './config';
import { ApplicationSource, ApiServer, factory as ServerFactory } from 'aplx-hmw-server';
import { CustomerAccountRoute } from './customer-account';
import { StoresProductsRoute } from './stores-products';
import { CustomerWishlistRoute } from './customer-wishlist';
import { CustomerCartRoute } from './customer-cart';
import { CustomerOrdersRoute } from './customer-orders';
import { CustomerSchedulesRoute } from './customer-schedules';
import { CustomerGrievancesRoute } from './customer-grievances';

 var devInstance = "postgres://mohan:mohan@192.168.5.9:5432/sr-groceries";
 
 ServerFactory.setWebConfig({
     applicationSource: ApplicationSource.APLX,
     DB_URL: devInstance
 });

 new ApiServer().start(8600, "dev", [
    new CustomerAccountRoute(),
    new StoresProductsRoute(),
    new CustomerWishlistRoute(),
    new CustomerCartRoute(),
    new CustomerOrdersRoute(),
    new CustomerSchedulesRoute(),
    new CustomerGrievancesRoute(),
 ], false);


/** 
* Export all files 
**/
 export * from './config/index';
 export * from "./customer-account/index";
 export * from "./stores-products/index";
export * from "./customer-wishlist/index";
export * from "./customer-cart/index";
export * from "./customer-orders/index";
export * from "./customer-schedules/index";
export * from "./customer-grievances/index";
