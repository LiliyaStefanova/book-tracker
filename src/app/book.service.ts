import { Injectable } from '@angular/core';
import { Book } from './book';
import { TEST_BOOKS } from './test-books';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private messageService: MessageService) { }

  getBooks(): Observable<Book[]> {
    this.messageService.add('received all books');
    return of(TEST_BOOKS);
  }

}