import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({ name: 'date' })
export class CustomDatePipe implements PipeTransform {
  transform(date: Date, locale: string, format: string = 'dd-MM-yyyy'): string | null{
    date = new Date(date);
    date.setDate(date.getDate());
    return new DatePipe(locale).transform(date, format);
  }
}
