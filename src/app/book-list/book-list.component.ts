import { Component } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  books: Book[] = [];

  constructor() {
    this.books = [
      {
        isbn: '12345',
        title: 'Tierisch gut kochen',
        authors: ['Mrs Chimp', 'Mr Gorilla'],
        published: '2020-06-20',
        subtitle: 'Rezepte von Affe bis Zebra',
        thumbnailURL: 'https://cdn.ng-buch.de/kochen.png',
        description: 'Immer lecker und gut'
      },
      {
        isbn: '67890',
        title: 'Backen mit Affen',
        authors: ['Orang Utan'],
        published: '2022-07-15',
        subtitle: 'Bananenbrot und mehr',
        thumbnailURL: 'https://cdn.ng-buch.de/backen.png',
        description: 'Tolle Backtipps für für Mensch und Tier'
      }
    ]
  }
}
