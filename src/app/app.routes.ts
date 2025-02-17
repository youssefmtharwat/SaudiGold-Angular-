import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InvestmentsComponent } from './investments/investments.component';
import { SavingsComponent } from './savings/savings.component';
import { GoldenBetsComponent } from './golden-bets/golden-bets.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoansComponent } from './loans/loans.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ProfileComponent } from './profile/profile.component';
import { EventsComponent } from './events/events.component';
import { WalletComponent } from './wallet/wallet.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { SettingsComponent } from './settings/settings.component';
import { ProductComponent } from './product/product.component';
export const routes: Routes = [

{ 
    path:'',
    redirectTo:'home',
    pathMatch:'full'
}
,
{ 
    path:'savings/product/home',
    redirectTo:'home',
    pathMatch:'full'
}
,
{ 
    path:'savings/product/savings',
    redirectTo:'savings',
    pathMatch:'full'
}
,


{ 
    path:'home',
    component:HomeComponent
}
,
{ 
    path:'investments',
    component:InvestmentsComponent
}
,
{ 
    path:'savings',
    component:SavingsComponent
}
,
{ 
    path:'goldenbets',
    component:GoldenBetsComponent
}
,
{ 
    path:'loans',
    component:LoansComponent
}
,
{ 
    path:'favorites',
    component:FavoritesComponent
}
,
{ 
    path:'profile',
    component:ProfileComponent
}
,
{ 
    path:'events',
    component:EventsComponent
}
,
{ 
    path:'wallet',
    component:WalletComponent
}
,
{ 
    path:'MyOrders',
    component:MyOrdersComponent
}
,
{ 
    path:'settings',
    component:SettingsComponent
}
,
{ 
    path:'savings/product',
    component:ProductComponent
}
,
{ 
    path:'**',
    component:NotFoundComponent
}

];
