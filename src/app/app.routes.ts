import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ExhibitionComponent } from './pages/exhibition/exhibition.component';
import { TicketPurchaseComponent } from './pages/ticket-purchase/ticket-purchase.component';

export const routes: Routes = [
    {path: 'home',component: HomeComponent},
    {path: 'profile',component: ProfileComponent},
    {path: 'exhibition',component: ExhibitionComponent},
    {path: 'ticket-purchase',component: TicketPurchaseComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', component:HomeComponent}
];
