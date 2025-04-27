import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonList, IonRow, IonCol, IonCard,IonItem, IonCardContent, IonButton,IonLabel, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {  cartOutline, tvOutline, shirtOutline, homeOutline, bodyOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonList, IonRow, IonCol, IonCard, IonCardContent, IonButton, IonIcon, IonLabel, IonItem]
})
export class HomePage {
  constructor(){
    addIcons({cartOutline,tvOutline,shirtOutline,homeOutline,bodyOutline});
  }
  categories = [
    { name: 'Electronics', icon: 'tv-outline' },
    { name: 'Clothing', icon: 'shirt-outline' },
    { name: 'Home & Kitchen', icon: 'home-outline' },
    { name: 'Beauty', icon: 'body-outline' },
  ];

  featuredProducts = [
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      description: 'Noise-cancelling headphones with premium sound quality and 24-hour battery life.',
      price: 249.99,
      imageUrl: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 2,
      name: 'Smart Fitness Watch',
      description: 'Track your fitness goals with this waterproof smart watch featuring heart rate monitoring.',
      price: 179.99,
      imageUrl: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 3,
      name: 'Casual Denim Jacket',
      description: 'Classic denim jacket with a modern fit, perfect for casual everyday wear.',
      price: 89.99,
      imageUrl: 'https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];
}

