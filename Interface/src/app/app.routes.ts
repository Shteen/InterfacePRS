import { Routes } from '@angular/router';
import { NavComponent } from './nav-bar/nav-bar.component';
import { DashCompComponent } from './dash-comp/dash-comp.component';
import { CanvasCompComponent } from './canvas-comp/canvas-comp.component';
import { PurchaseCompComponent } from './purchase-comp/purchase-comp.component';
import { ChequeCompComponent } from './cheque-comp/cheque-comp.component';
import { ReciveCompComponent } from './recive-comp/recive-comp.component';
import { TransferCompComponent } from './transfer-comp/transfer-comp.component';
import { HistoryCompComponent } from './history-comp/history-comp.component';
import { InventoryCompComponent } from './inventory-comp/inventory-comp.component';
import { LoginPageCompComponent } from './login-page-comp/login-page-comp.component';
import { BrandMaintenanceComponent } from './maintenance-tab/brand-maintenance/brand-maintenance.component';
import { ItemsWMaintenanceComponent } from './maintenance-tab/items-w-maintenance/items-w-maintenance.component';
import { SepMaintenanceComponent } from './maintenance-tab/sep-maintenance/sep-maintenance.component';
import { SupplierWMaintenanceComponent } from './maintenance-tab/supplier-w-maintenance/supplier-w-maintenance.component';
import { AuthGuard } from './Guard/auth.guard';

export const routes: Routes = [




    {    
        path: 'Dashboard',
        component:NavComponent,
        canActivate: [AuthGuard],
        children: [
            { 
                path: 'dash-comp', 
                component: DashCompComponent 
            },    

            { 
                path: 'canvas-comp', 
                component: CanvasCompComponent 
            },  

            { 
                path: 'purchase-comp', 
                component: PurchaseCompComponent 
            },  

            { 
                path: 'cheque-comp', 
                component: ChequeCompComponent 
            }, 

            { 
                path: 'recive-comp', 
                component: ReciveCompComponent 
            }, 

            { 
                path: 'transfer-comp', 
                component: TransferCompComponent 
            },

            
            { 
                path: 'history-comp', 
                component: HistoryCompComponent 
            },

            { 
                path: 'inventory-comp', 
                component: InventoryCompComponent 
            },
            
            { 
                path: 'brand-maintenance', 
                component: BrandMaintenanceComponent 
            },
            
            { 
                path: 'items-w-maintenance', 
                component: ItemsWMaintenanceComponent 
            },
            
            { 
                path: 'sep-maintenance', 
                component: SepMaintenanceComponent 
            },

            { 
                path: 'supplier-w-maintenance', 
                component: SupplierWMaintenanceComponent 
            },

           
        
        ],
       
    },
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },

    { 
        path: 'login', 
        component: LoginPageCompComponent 
    },



];
