import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { IonList, IonItem, IonButton, IonIcon, IonLabel, IonAvatar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { heartOutline, cardOutline, locationOutline, logOutOutline, cartOutline } from 'ionicons/icons';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonButton, IonIcon, IonLabel, IonAvatar],
})
export class ProfilePage {
  constructor() {
    addIcons({ heartOutline, cardOutline, locationOutline, logOutOutline, cartOutline });
  }
}
