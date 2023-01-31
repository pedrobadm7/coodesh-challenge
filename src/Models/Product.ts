import firebase from 'firebase';

export interface Product {
  id: string;
  title: string;
  type: string;
  description: string;
  filename: string;
  height: number;
  width: number;
  price: number;
  rating: number;
  created_at: firebase.firestore.Timestamp;
}
