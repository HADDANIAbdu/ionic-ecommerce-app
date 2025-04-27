import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonButton, IonIcon } from '@ionic/angular/standalone';  
import { addIcons } from 'ionicons';
import { pricetagOutline, pricetagsOutline, cubeOutline, starOutline, cartOutline } from 'ionicons/icons';

@Component({
  selector: 'app-new-products',
  templateUrl: './new-products.page.html',
  styleUrls: ['./new-products.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonButton, IonIcon]
})
export class NewProductsPage {
  
  products = [
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      description: 'Noise-cancelling headphones with premium sound quality and 24-hour battery life.',
      price: 249.99,
      imageUrl: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'electronics',
      stock: 15,
      rating: 4.8,
      isNew: true,
      discount: 0
    },
    {
      id: 2,
      name: 'Smart Fitness Watch',
      description: 'Track your fitness goals with this waterproof smart watch featuring heart rate monitoring.',
      price: 179.99,
      imageUrl: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'electronics',
      stock: 8,
      rating: 4.5,
      isNew: true,
      discount: 10
    },
    {
      id: 3,
      name: 'Casual Denim Jacket',
      description: 'Classic denim jacket with a modern fit, perfect for casual everyday wear.',
      price: 89.99,
      imageUrl: 'https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'clothing',
      stock: 23,
      rating: 4.3,
      isNew: false,
      discount: 25
    },
    {
      id: 4,
      name: 'Ceramic Coffee Set',
      description: 'Elegant ceramic coffee set including 4 mugs and a matching coffee pot.',
      price: 64.99,
      imageUrl: 'https://images.pexels.com/photos/1566308/pexels-photo-1566308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'home',
      stock: 12,
      rating: 4.7,
      isNew: false,
      discount: 0
    },
    {
      id: 5,
      name: 'Minimalist Desk Lamp',
      description: 'Modern LED desk lamp with adjustable brightness and color temperature.',
      price: 49.99,
      imageUrl: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'home',
      stock: 20,
      rating: 4.6,
      isNew: true,
      discount: 0
    },
    {
      id: 6,
      name: 'Ultra-Thin Laptop',
      description: 'Powerful and portable laptop with 12-hour battery life and stunning display.',
      price: 1299.99,
      imageUrl: 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'electronics',
      stock: 5,
      rating: 4.9,
      isNew: true,
      discount: 0
    },
    {
      id: 7,
      name: 'Slim-Fit Dress Shirt',
      description: 'Premium cotton dress shirt with a slim-fit design, available in multiple colors.',
      price: 59.99,
      imageUrl: 'https://images.pexels.com/photos/45055/pexels-photo-45055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'clothing',
      stock: 0,
      rating: 4.2,
      isNew: false,
      discount: 15
    },
    {
      id: 8,
      name: 'Scented Candle Set',
      description: 'Set of 3 premium scented candles in elegant glass jars with wooden lids.',
      price: 34.99,
      imageUrl: 'https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'home',
      stock: 18,
      rating: 4.4,
      isNew: false,
      discount: 0
    }
  ];

  productPairs: { id: number; name: string; description: string; price: number; imageUrl: string; category: string; stock: number; rating: number; isNew: boolean; discount: number; }[][] = [];

  constructor() {
    this.groupProducts();
    addIcons({pricetagOutline,pricetagsOutline,cubeOutline,starOutline,cartOutline});
  }

  groupProducts() {
    for (let i = 0; i < this.products.length; i += 2) {
      const pair = [this.products[i]];
      if (this.products[i + 1]) {
        pair.push(this.products[i + 1]);
      }
      this.productPairs.push(pair);
    }
  }
}
